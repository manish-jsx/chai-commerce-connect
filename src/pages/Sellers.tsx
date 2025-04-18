
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedSellers from "@/components/FeaturedSellers";

const Sellers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-tea-brown mb-8 text-center">
              Tea Sellers
            </h1>
            <FeaturedSellers />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sellers;
