
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-tea-green">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Grow Your Tea Business?</h2>
          <p className="text-lg mb-8 text-white/90">
            Join ChaiPort today and connect with buyers and sellers from across India's tea industry.
            Registration is free and only takes a few minutes to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-tea-green hover:bg-gray-100 w-full sm:w-auto"
              asChild
            >
              <Link to="/register">Register Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-tea-green/80 w-full sm:w-auto"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
