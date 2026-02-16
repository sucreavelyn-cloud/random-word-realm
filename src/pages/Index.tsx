import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import HowItWorks from '@/components/home/HowItWorks';
import HomeFAQ from '@/components/home/HomeFAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      <CaseStudiesPreview />
      <HowItWorks />
      <HomeFAQ />
      <Footer />
    </main>
  );
};

export default Index;
