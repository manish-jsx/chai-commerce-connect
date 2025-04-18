
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h1 
              className="text-4xl font-serif font-bold text-tea-brown mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About ChaiPort
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                ChaiPort is India's premier B2B marketplace connecting tea producers, suppliers, and buyers. 
                Our platform streamlines the tea trading process, making it easier for businesses to source 
                high-quality tea products directly from verified sellers.
              </motion.p>

              <motion.h2 
                className="text-2xl font-serif font-bold text-tea-brown mt-8 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Our mission is to revolutionize India's tea trade by providing a transparent, efficient, 
                and reliable platform for businesses. We aim to empower tea producers and create meaningful 
                connections between buyers and sellers in the tea industry.
              </motion.p>

              <motion.h2 
                className="text-2xl font-serif font-bold text-tea-brown mt-8 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Why Choose ChaiPort?
              </motion.h2>
              <motion.ul 
                className="list-disc list-inside text-gray-600 mb-6 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <li>Direct access to verified tea producers and suppliers</li>
                <li>Quality assurance and standardized grading system</li>
                <li>Transparent pricing and competitive rates</li>
                <li>Secure payment processing</li>
                <li>Efficient logistics and delivery support</li>
                <li>Dedicated customer support</li>
              </motion.ul>

              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Button 
                  className="bg-tea-green hover:bg-tea-brown text-white transition-colors duration-300"
                  size="lg"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default About;
