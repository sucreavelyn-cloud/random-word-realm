import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import HomeFAQ from '@/components/home/HomeFAQ';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <Testimonials />
      <CaseStudiesPreview />
      <HomeFAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
