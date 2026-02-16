import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import HowItWorks from '@/components/home/HowItWorks';
import HomeFAQ from '@/components/home/HomeFAQ';
import StillQuestions from '@/components/home/StillQuestions';
import FinalCTA from '@/components/home/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <CaseStudiesPreview />
      <HowItWorks />
      <HomeFAQ />
      <StillQuestions />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
