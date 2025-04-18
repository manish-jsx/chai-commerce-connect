
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeaCategories from "@/components/TeaCategories";

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-tea-brown mb-8 text-center">
              Tea Categories
            </h1>
            <TeaCategories />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
