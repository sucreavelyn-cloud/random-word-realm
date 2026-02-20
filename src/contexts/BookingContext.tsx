import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { format, addDays } from 'date-fns';

interface TimeSlot {
  time: string;
}

interface SlotsData {
  [date: string]: TimeSlot[];
}

interface BookingContextType {
  slots: SlotsData;
  loading: boolean;
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const WEBHOOK_URL = 'https://gg.tevorasolutions.si/webhook/1f8bec4a-1fc0-4fbe-84c6-1a298bb4b857';

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [slots, setSlots] = useState<SlotsData>({});
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchSlots = useCallback(async () => {
    try {
      const startDate = format(new Date(), 'yyyy-MM-dd');
      const endDate = format(addDays(new Date(), 30), 'yyyy-MM-dd');

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ start_date: startDate, end_date: endDate }),
      });

      const data = await res.json();
      if (data?.slots) {
        setSlots(data.slots);
      }
    } catch (err) {
      console.error('Failed to fetch booking slots:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSlots();
    const interval = setInterval(fetchSlots, 30000);
    return () => clearInterval(interval);
  }, [fetchSlots]);

  return (
    <BookingContext.Provider value={{ slots, loading, dialogOpen, setDialogOpen }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within BookingProvider');
  return context;
};
