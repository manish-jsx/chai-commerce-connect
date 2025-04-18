
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tea-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-white mr-2" />
              <span className="text-2xl font-serif font-bold">
                Chai<span className="text-tea-gold">Port</span>
              </span>
            </div>
            <p className="text-gray-200 text-sm">
              India's premier B2B marketplace connecting tea producers, distributors, wholesalers, and retailers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-tea-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-tea-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-tea-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-tea-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Sellers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-tea-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Tea Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tea Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/black-tea" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Black Tea
                </Link>
              </li>
              <li>
                <Link to="/categories/green-tea" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Green Tea
                </Link>
              </li>
              <li>
                <Link to="/categories/white-tea" className="text-gray-200 hover:text-tea-gold transition-colors">
                  White Tea
                </Link>
              </li>
              <li>
                <Link to="/categories/oolong-tea" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Oolong Tea
                </Link>
              </li>
              <li>
                <Link to="/categories/herbal-tea" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Herbal Tea
                </Link>
              </li>
              <li>
                <Link to="/categories/specialty-tea" className="text-gray-200 hover:text-tea-gold transition-colors">
                  Specialty Tea
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-tea-gold mt-1 flex-shrink-0" />
                <span className="text-gray-200">123 Tea Garden Road, Dibrugarh, Assam, India - 786001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-tea-gold flex-shrink-0" />
                <span className="text-gray-200">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-tea-gold flex-shrink-0" />
                <span className="text-gray-200">info@chaiport.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} ChaiPort. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:text-tea-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-tea-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
