
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

type CategoryProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
};

const categories: CategoryProps[] = [
  {
    title: "Black Tea",
    image: "https://images.unsplash.com/photo-1565799566545-1f131372b460?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Strong, full-bodied tea varieties including Assam, Darjeeling, and Nilgiri.",
    slug: "black-tea",
  },
  {
    title: "Green Tea",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Unoxidized tea leaves, known for a lighter flavor and health benefits.",
    slug: "green-tea",
  },
  {
    title: "Oolong Tea",
    image: "https://images.unsplash.com/photo-1534587568815-1861f52a5fd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Partially oxidized tea with complex flavors between green and black teas.",
    slug: "oolong-tea",
  },
  {
    title: "White Tea",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Minimally processed with a delicate flavor and high antioxidant content.",
    slug: "white-tea",
  },
  {
    title: "Herbal Tea",
    image: "https://images.unsplash.com/photo-1546342280-a995a524fca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Caffeine-free infusions made from herbs, spices, and botanical blends.",
    slug: "herbal-tea",
  },
  {
    title: "Specialty Tea",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Premium and exotic tea varieties including rare and artisanal blends.",
    slug: "specialty-tea",
  },
];

const CategoryCard = ({ title, image, description, slug }: CategoryProps) => {
  return (
    <Link to={`/categories/${slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-serif font-bold text-tea-brown mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

const TeaCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-tea-brown mb-4">Explore Tea Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of high-quality tea products from across India, 
            categorized to help you find exactly what you're looking for.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeaCategories;
