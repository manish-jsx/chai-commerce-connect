
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, User, Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "From Garden to Global: Success Story of Darjeeling Tea Exports",
    excerpt: "How a small tea garden transformed into a major international supplier, showcasing the power of quality and perseverance in the tea industry...",
    image: "https://images.unsplash.com/photo-1582796723450-94d4c0c50937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-04-15",
    author: "Rajesh Kumar",
    category: "Success Story",
    readTime: "5 min read",
    tags: ["exports", "darjeeling", "success"],
  },
  // Add more blog posts...
];

const categories = [
  "All",
  "Success Stories",
  "Case Studies",
  "Market Insights",
  "Industry News",
  "Tips & Guides",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-serif font-bold text-tea-brown mb-4">
                Tea Industry Insights
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover success stories, market insights, and expert knowledge from the tea industry.
              </p>
            </motion.div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={`whitespace-nowrap ${
                        selectedCategory === category 
                          ? "bg-tea-green hover:bg-tea-green/90" 
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-2 right-2 bg-tea-green text-white">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h2 className="text-xl font-serif font-bold text-tea-brown mb-2 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="bg-gray-50 text-tea-brown border-tea-brown/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Blog;
