
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/Services';
import FeaturesSection from '@/components/home/Features';
import TestimonialsSection from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
