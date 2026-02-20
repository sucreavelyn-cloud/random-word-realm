import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { BookingProvider } from "./contexts/BookingContext";
import { ScrollToTop } from "./components/ScrollToTop";
import BookingCalendarDialog from "./components/BookingCalendarDialog";
import Index from "./pages/Index";
import AIVideoAds from "./pages/AIVideoAds";
import AIProductPhotography from "./pages/AIProductPhotography";
import SocialMediaContent from "./pages/SocialMediaContent";
import DigitalMarketing from "./pages/DigitalMarketing";
import AIAvatarCreation from "./pages/AIAvatarCreation";
import AICreativeEngine from "./pages/AICreativeEngine";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <BookingProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BookingCalendarDialog />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-video-ads" element={<AIVideoAds />} />
            <Route path="/ai-product-photography" element={<AIProductPhotography />} />
            <Route path="/social-media-content" element={<SocialMediaContent />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/ai-avatar-creation" element={<AIAvatarCreation />} />
            <Route path="/ai-creative-engine" element={<AICreativeEngine />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </BookingProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
