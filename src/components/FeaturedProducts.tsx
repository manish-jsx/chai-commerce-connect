
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

type ProductProps = {
  id: string;
  name: string;
  image: string;
  seller: string;
  price: string;
  priceRange: string;
  minOrder: string;
  rating: number;
  category: string;
  isNew: boolean;
  featured: boolean;
};

const products: ProductProps[] = [
  {
    id: "1",
    name: "Premium Darjeeling First Flush",
    image: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "Darjeeling Tea Estates",
    price: "₹850",
    priceRange: "₹800 - ₹900",
    minOrder: "10 kg",
    rating: 4.8,
    category: "Black Tea",
    isNew: true,
    featured: true,
  },
  {
    id: "2",
    name: "Assam Orthodox Tea",
    image: "https://images.unsplash.com/photo-1571934811356-5cc482c76130?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "Assam Tea Exports",
    price: "₹650",
    priceRange: "₹600 - ₹700",
    minOrder: "25 kg",
    rating: 4.6,
    category: "Black Tea",
    isNew: false,
    featured: true,
  },
  {
    id: "3",
    name: "Nilgiri Green Tea",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "Munnar Tea Plantations",
    price: "₹750",
    priceRange: "₹700 - ₹800",
    minOrder: "15 kg",
    rating: 4.7,
    category: "Green Tea",
    isNew: true,
    featured: true,
  },
  {
    id: "4",
    name: "Silver Needle White Tea",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "Himalayan Organic Teas",
    price: "₹1250",
    priceRange: "₹1200 - ₹1300",
    minOrder: "5 kg",
    rating: 4.9,
    category: "White Tea",
    isNew: false,
    featured: true,
  },
  {
    id: "5",
    name: "Masala Chai Blend",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "Spice Garden Teas",
    price: "₹550",
    priceRange: "₹500 - ₹600",
    minOrder: "20 kg",
    rating: 4.5,
    category: "Specialty Tea",
    isNew: false,
    featured: true,
  },
  {
    id: "6",
    name: "Himalayan Oolong Tea",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "Mountain Valley Teas",
    price: "₹950",
    priceRange: "₹900 - ₹1000",
    minOrder: "10 kg",
    rating: 4.7,
    category: "Oolong Tea",
    isNew: true,
    featured: true,
  },
];

const ProductCard = ({ name, image, seller, price, priceRange, minOrder, rating, category, isNew }: ProductProps) => {
  return (
    <Link to={`/products/${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {isNew && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-tea-green text-white">New</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-medium text-tea-brown">{name}</h3>
          </div>
          <p className="text-sm text-gray-500 mt-1">{seller}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            <Badge variant="outline" className="bg-gray-100 text-tea-brown border-tea-brown/20">
              {category}
            </Badge>
          </div>
          <div className="mt-3">
            <p className="text-lg font-bold text-tea-brown">{price} <span className="text-xs font-normal text-gray-500">/ kg</span></p>
            <p className="text-xs text-gray-500">Range: {priceRange}</p>
            <p className="text-xs text-gray-500 mt-1">Min. Order: {minOrder}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const FeaturedProducts = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-tea-brown">Featured Products</h2>
            <p className="text-gray-600 mt-2">Discover our selection of premium tea products</p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              className="rounded-full border-tea-brown/20 text-tea-brown hover:text-tea-green"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              className="rounded-full border-tea-brown/20 text-tea-brown hover:text-tea-green"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-4 pb-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[280px] max-w-[280px]">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/products" 
            className="text-tea-green hover:text-tea-brown underline font-medium transition-colors"
          >
            View all products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
