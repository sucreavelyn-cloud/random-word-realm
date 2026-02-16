import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import MobileCTA from "./components/MobileCTA";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import AIVideoPage from "./pages/AIVideoPage";
import AIPhotoPage from "./pages/AIPhotoPage";
import PortfolioPage from "./pages/PortfolioPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-video-oglasi" element={<AIVideoPage />} />
            <Route path="/ai-produktna-fotografija" element={<AIPhotoPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<CaseStudyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* About page removed */}
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/cenik" element={<PricingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MobileCTA />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
