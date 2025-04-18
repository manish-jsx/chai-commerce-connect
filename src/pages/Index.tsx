
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TeaCategories from "@/components/TeaCategories";
import FeaturedSellers from "@/components/FeaturedSellers";
import MarketplaceFeatures from "@/components/MarketplaceFeatures";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedBlogs from "@/components/FeaturedBlogs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
        <TeaCategories />
        <FeaturedSellers />
        <MarketplaceFeatures />
        <FeaturedBlogs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
