import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import HowItWorks from '@/components/home/HowItWorks';
import WhyUs from '@/components/home/WhyUs';
import ComparisonTable from '@/components/home/ComparisonTable';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div id="services">
        <ServicesOverview />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <WhyUs />
      <ComparisonTable />
      <div id="testimonials">
        <Testimonials />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
