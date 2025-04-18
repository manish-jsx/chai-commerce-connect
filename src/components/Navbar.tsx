
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Menu, 
  X, 
  ShoppingCart, 
  User,
  MessageSquare,
  Home,
  Package,
  Leaf
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-tea-green mr-2" />
              <span className="text-2xl font-serif font-bold text-tea-green">
                Chai<span className="text-tea-brown">Port</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-tea-brown hover:text-tea-green font-medium transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-tea-brown hover:text-tea-green font-medium transition-colors">
              Categories
            </Link>
            <Link to="/sellers" className="text-tea-brown hover:text-tea-green font-medium transition-colors">
              Sellers
            </Link>
            <Link to="/about" className="text-tea-brown hover:text-tea-green font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-tea-brown hover:text-tea-green font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative w-1/3">
            <Input
              type="search"
              placeholder="Search tea products..."
              className="w-full rounded-full pr-10"
            />
            <Search className="absolute right-3 h-5 w-5 text-muted-foreground" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              asChild
            >
              <Link to="/messages">
                <MessageSquare className="h-5 w-5 text-tea-brown" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              asChild
            >
              <Link to="/account">
                <User className="h-5 w-5 text-tea-brown" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="hidden md:flex"
              asChild
            >
              <Link to="/login">
                Log in
              </Link>
            </Button>
            <Button 
              className="hidden md:flex bg-tea-green hover:bg-tea-brown text-white"
              asChild
            >
              <Link to="/register">
                Register
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b pb-4">
          <div className="px-4 py-3 mb-3">
            <Input
              type="search"
              placeholder="Search tea products..."
              className="w-full rounded-full pr-10"
            />
            <Search className="absolute right-7 top-24 h-5 w-5 text-muted-foreground" />
          </div>
          <nav className="flex flex-col space-y-3 px-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-tea-brown hover:text-tea-green"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/categories" 
              className="flex items-center space-x-2 text-tea-brown hover:text-tea-green"
              onClick={() => setIsMenuOpen(false)}
            >
              <Package className="h-5 w-5" />
              <span>Categories</span>
            </Link>
            <Link 
              to="/sellers" 
              className="flex items-center space-x-2 text-tea-brown hover:text-tea-green"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>Sellers</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-2 text-tea-brown hover:text-tea-green"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About Us</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-2 text-tea-brown hover:text-tea-green"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <div className="pt-2 flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/login">
                  Log in
                </Link>
              </Button>
              <Button 
                className="flex-1 bg-tea-green hover:bg-tea-brown text-white"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/register">
                  Register
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
