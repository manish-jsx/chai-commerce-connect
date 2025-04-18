
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Award, CheckCircle } from "lucide-react";

type SellerProps = {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  specialty: string[];
  verified: boolean;
  premium: boolean;
};

const sellers: SellerProps[] = [
  {
    id: "1",
    name: "Darjeeling Tea Estates",
    image: "https://images.unsplash.com/photo-1582796723450-94d4c0c50937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "Darjeeling, West Bengal",
    rating: 4.8,
    specialty: ["Black Tea", "White Tea"],
    verified: true,
    premium: true,
  },
  {
    id: "2",
    name: "Assam Tea Exports",
    image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "Dibrugarh, Assam",
    rating: 4.7,
    specialty: ["Black Tea", "Green Tea"],
    verified: true,
    premium: false,
  },
  {
    id: "3",
    name: "Munnar Tea Plantations",
    image: "https://images.unsplash.com/photo-1593337874347-aab298b9c386?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "Munnar, Kerala",
    rating: 4.9,
    specialty: ["Green Tea", "Specialty Tea"],
    verified: true,
    premium: true,
  },
  {
    id: "4",
    name: "Himalayan Organic Teas",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    location: "Sikkim",
    rating: 4.6,
    specialty: ["Organic Tea", "Herbal Tea"],
    verified: true,
    premium: false,
  },
];

const SellerCard = ({ name, image, location, rating, specialty, verified, premium }: SellerProps) => {
  return (
    <Link to={`/sellers/${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {premium && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-tea-gold text-white">
                <Award className="h-3 w-3 mr-1" /> Premium
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-medium text-tea-brown">{name}</h3>
            {verified && <CheckCircle className="h-5 w-5 text-tea-green" />}
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {specialty.map((item) => (
              <Badge key={item} variant="outline" className="bg-gray-100 text-tea-brown border-tea-brown/20">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const FeaturedSellers = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-tea-brown mb-4">Featured Sellers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with trusted tea suppliers from across India. 
            Each seller is verified to ensure quality products and reliable service.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sellers.map((seller) => (
            <SellerCard key={seller.id} {...seller} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link 
            to="/sellers" 
            className="text-tea-green hover:text-tea-brown underline font-medium transition-colors"
          >
            View all sellers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSellers;
