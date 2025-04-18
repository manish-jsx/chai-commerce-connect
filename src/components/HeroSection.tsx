
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('https://images.unsplash.com/photo-1547825407-2d060104b7f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center py-24 md:py-32">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Connect with India's Premier Tea Marketplace
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            ChaiPort connects tea producers, distributors, wholesalers, and retailers across India. 
            Discover premium tea products, forge valuable business connections, and grow your tea business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-tea-green hover:bg-tea-green/90 text-white w-full sm:w-auto"
              asChild
            >
              <Link to="/register">Join as Seller</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-tea-brown hover:bg-gray-100 border-white w-full sm:w-auto"
              asChild
            >
              <Link to="/categories">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
