import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import FeaturesSection from '@/components/FeaturesSection';
import SolutionsSection from '@/components/SolutionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
