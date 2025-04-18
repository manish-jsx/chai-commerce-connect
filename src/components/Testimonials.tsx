
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

type TestimonialProps = {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
};

const testimonials: TestimonialProps[] = [
  {
    quote: "ChaiPort has transformed our tea business by connecting us with high-quality suppliers from across India. Our sales have increased by 40% since joining the platform.",
    name: "Rajesh Kumar",
    position: "CEO",
    company: "TeaTreasures Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "As a small tea garden owner, ChaiPort has helped me reach a much wider market. The verification process ensures that buyers trust our quality products.",
    name: "Priya Sharma",
    position: "Owner",
    company: "Highland Tea Gardens",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "The business insights and analytics provided by ChaiPort have been invaluable for our strategic planning. We've established partnerships with sellers we would never have discovered otherwise.",
    name: "Amit Patel",
    position: "Procurement Manager",
    company: "Chai Exports International",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialCard = ({ quote, name, position, company, image }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <Quote className="h-10 w-10 text-tea-green opacity-20 mb-4" />
        <p className="text-gray-700 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-medium text-tea-brown">{name}</h4>
            <p className="text-sm text-gray-500">
              {position}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-tea-brown mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the businesses that have found success on ChaiPort.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
