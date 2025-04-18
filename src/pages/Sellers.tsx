
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedSellers from "@/components/FeaturedSellers";
import { motion } from "framer-motion";

const Sellers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-16">
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-4xl font-serif font-bold text-tea-brown mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Tea Sellers
            </motion.h1>
            <FeaturedSellers />
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Sellers;
