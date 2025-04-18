
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold text-tea-brown mb-8 text-center">
              About ChaiPort
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                ChaiPort is India's premier B2B marketplace connecting tea producers, suppliers, and buyers. 
                Our platform streamlines the tea trading process, making it easier for businesses to source 
                high-quality tea products directly from verified sellers.
              </p>

              <h2 className="text-2xl font-serif font-bold text-tea-brown mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Our mission is to revolutionize India's tea trade by providing a transparent, efficient, 
                and reliable platform for businesses. We aim to empower tea producers and create meaningful 
                connections between buyers and sellers in the tea industry.
              </p>

              <h2 className="text-2xl font-serif font-bold text-tea-brown mt-8 mb-4">Why Choose ChaiPort?</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Direct access to verified tea producers and suppliers</li>
                <li>Quality assurance and standardized grading system</li>
                <li>Transparent pricing and competitive rates</li>
                <li>Secure payment processing</li>
                <li>Efficient logistics and delivery support</li>
                <li>Dedicated customer support</li>
              </ul>

              <div className="mt-12 text-center">
                <Button 
                  className="bg-tea-green hover:bg-tea-brown text-white"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
