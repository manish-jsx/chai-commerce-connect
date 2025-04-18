
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
};

const featuredPosts: BlogPost[] = [
  {
    id: "1",
    title: "From Garden to Global: Success Story of Darjeeling Tea Exports",
    excerpt: "How a small tea garden transformed into a major international supplier...",
    image: "https://images.unsplash.com/photo-1582796723450-94d4c0c50937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-04-15",
    author: "Rajesh Kumar",
    category: "Success Story",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Innovative Tea Processing Methods Boost Productivity",
    excerpt: "New technology adoption leads to 40% increase in production efficiency...",
    image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-04-12",
    author: "Priya Sharma",
    category: "Case Study",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Market Analysis: Growing Demand for Organic Tea",
    excerpt: "Research shows 25% annual growth in organic tea segment...",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-04-10",
    author: "Amit Patel",
    category: "Market Insight",
    readTime: "6 min read",
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge className="bg-tea-green text-white">
                {post.category}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-serif font-bold text-tea-brown mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
              <span>{post.readTime}</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

const FeaturedBlogs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-bold text-tea-brown mb-4">
              Success Stories & Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover inspiring success stories, market insights, and case studies from the tea industry.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-tea-green hover:text-tea-brown transition-colors"
          >
            <span className="font-medium">View All Stories</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
