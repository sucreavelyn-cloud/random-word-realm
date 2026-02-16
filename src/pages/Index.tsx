import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background">
      <Header />
      <HeroSection />
      {/* More sections will be added here */}
      <div className="h-screen bg-hero-gradient" />
      <Footer />
    </main>
  );
};

export default Index;
