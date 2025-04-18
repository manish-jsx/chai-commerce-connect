
import { 
  ShieldCheck, 
  Users, 
  Globe, 
  TrendingUp, 
  BarChart, 
  Truck 
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-tea-green" />,
    title: "Verified Sellers",
    description: "All sellers on ChaiPort are verified to ensure quality products and reliable business transactions."
  },
  {
    icon: <Globe className="h-10 w-10 text-tea-green" />,
    title: "Nationwide Network",
    description: "Connect with tea businesses from all major tea-producing regions across India."
  },
  {
    icon: <Users className="h-10 w-10 text-tea-green" />,
    title: "Direct Communication",
    description: "Communicate directly with suppliers and buyers to negotiate terms and build relationships."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-tea-green" />,
    title: "Market Insights",
    description: "Access market trends, pricing data, and industry insights to make informed business decisions."
  },
  {
    icon: <BarChart className="h-10 w-10 text-tea-green" />,
    title: "Business Growth",
    description: "Expand your customer base and discover new business opportunities within the tea industry."
  },
  {
    icon: <Truck className="h-10 w-10 text-tea-green" />,
    title: "Logistics Support",
    description: "Get assistance with shipping, packaging, and other logistics to streamline your supply chain."
  }
];

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-semibold text-tea-brown mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const MarketplaceFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-tea-brown mb-4">Why Choose ChaiPort</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ChaiPort offers a comprehensive platform for tea businesses to connect, trade, and grow together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceFeatures;
