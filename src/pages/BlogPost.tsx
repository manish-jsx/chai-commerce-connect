
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data - In a real app, this would come from an API
const getBlogPost = (id: string) => {
  return {
    id,
    title: "From Garden to Global: Success Story of Darjeeling Tea Exports",
    content: `
      <p>In the misty hills of Darjeeling, a remarkable transformation was taking place. What started as a modest tea garden has now become one of India's most successful tea exporters, shipping premium quality tea to over 30 countries worldwide.</p>
      
      <h2>The Beginning</h2>
      <p>The journey began in 2010 when Rajesh Kumar inherited his family's 5-acre tea garden. Instead of following traditional methods, Rajesh decided to innovate and implement modern farming techniques while preserving the authentic taste of Darjeeling tea.</p>
      
      <h2>Challenges Faced</h2>
      <p>The initial years were challenging. Competition from larger estates, climate uncertainties, and limited access to international markets posed significant hurdles. However, Rajesh's commitment to quality and sustainable farming practices started gaining attention.</p>
      
      <h2>The Breakthrough</h2>
      <p>The turning point came in 2015 when the garden received organic certification. This opened doors to premium markets in Europe and North America, where demand for organic Darjeeling tea was soaring.</p>
      
      <h2>Impact and Growth</h2>
      <p>Today, the garden has expanded to 15 acres and employs over 50 local workers. The success has inspired other small tea growers in the region to adopt similar sustainable practices.</p>
    `,
    image: "https://images.unsplash.com/photo-1582796723450-94d4c0c50937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "2024-04-15",
    author: "Rajesh Kumar",
    category: "Success Story",
    readTime: "5 min read",
    tags: ["exports", "darjeeling", "success", "organic"],
  };
};

const BlogPost = () => {
  const { id } = useParams();
  const post = getBlogPost(id || "");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <article className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-tea-green text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <h1 className="text-4xl font-serif font-bold text-tea-brown mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
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

              <Card className="p-8">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-tea-brown prose-headings:font-serif prose-p:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Card>

              <div className="mt-8 flex justify-between items-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Story
                </Button>
              </div>
            </motion.div>
          </div>
        </article>
      </motion.main>
      <Footer />
    </div>
  );
};

export default BlogPost;
