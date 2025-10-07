import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsPage from '@/components/ProductsPage';

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
}
