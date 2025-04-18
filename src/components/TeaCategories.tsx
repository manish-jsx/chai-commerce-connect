import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Package, Leaf, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

type CategoryProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
  products: number;
  topSellers: number;
  averagePrice: string;
  popularVarieties: string[];
};

const categories: CategoryProps[] = [
  {
    title: "Black Tea",
    image: "https://images.unsplash.com/photo-1565799566545-1f131372b460?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Strong, full-bodied tea varieties including Assam, Darjeeling, and Nilgiri.",
    slug: "black-tea",
    products: 245,
    topSellers: 28,
    averagePrice: "₹450/kg",
    popularVarieties: ["Assam Orthodox", "Darjeeling First Flush", "Nilgiri BOP"],
  },
  {
    title: "Green Tea",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Unoxidized tea leaves, known for a lighter flavor and health benefits.",
    slug: "green-tea",
    products: 189,
    topSellers: 22,
    averagePrice: "₹650/kg",
    popularVarieties: ["Gunpowder", "Sencha Style", "Dragon Well"],
  },
  {
    title: "Oolong Tea",
    image: "https://images.unsplash.com/photo-1534587568815-1861f52a5fd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Partially oxidized tea with complex flavors between green and black teas.",
    slug: "oolong-tea",
    products: 120,
    topSellers: 15,
    averagePrice: "₹850/kg",
    popularVarieties: ["Iron Buddha", "High Mountain", "Oriental Beauty"],
  },
  {
    title: "White Tea",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Minimally processed with a delicate flavor and high antioxidant content.",
    slug: "white-tea",
    products: 100,
    topSellers: 10,
    averagePrice: "₹300/kg",
    popularVarieties: ["Sencha", "White Peony", "Honeydew"],
  },
  {
    title: "Herbal Tea",
    image: "https://images.unsplash.com/photo-1546342280-a995a524fca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Caffeine-free infusions made from herbs, spices, and botanical blends.",
    slug: "herbal-tea",
    products: 50,
    topSellers: 5,
    averagePrice: "₹200/kg",
    popularVarieties: ["Peppermint", "Lavender", "Chamomile"],
  },
  {
    title: "Specialty Tea",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Premium and exotic tea varieties including rare and artisanal blends.",
    slug: "specialty-tea",
    products: 30,
    topSellers: 3,
    averagePrice: "₹1000/kg",
    popularVarieties: ["Yunnan Black", "Pu'er", "Jasmine Green"],
  },
];

const CategoryCard = ({ 
  title, 
  image, 
  description, 
  slug, 
  products,
  topSellers,
  averagePrice,
  popularVarieties 
}: CategoryProps) => {
  return (
    <Link to={`/categories/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-white/90">
                {averagePrice}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-serif font-bold text-tea-brown mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Package className="h-4 w-4 mr-1 text-tea-green" />
                <span>{products} Products</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="h-4 w-4 mr-1 text-tea-green" />
                <span>{topSellers} Sellers</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Leaf className="h-4 w-4 text-tea-green" />
                <span>Popular Varieties:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularVarieties.map((variety) => (
                  <Badge 
                    key={variety} 
                    variant="outline" 
                    className="bg-gray-50 text-tea-brown border-tea-brown/20"
                  >
                    {variety}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

const TeaCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold text-tea-brown mb-4">
              Explore Tea Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover a wide range of high-quality tea products from across India, 
              categorized to help you find exactly what you're looking for.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-tea-green hover:text-tea-brown">
            <TrendingUp className="h-5 w-5" />
            <span className="font-medium">View Market Trends</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeaCategories;
