
import React from 'react';
import { Star } from "lucide-react";

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  rating: number;
  delay: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ text, author, role, rating, delay }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md reveal" style={{ transitionDelay: delay }}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            size={16}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4">{text}</p>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "The quality of the fasteners from this company is unmatched. We've been using them for our construction projects for years, and they never disappoint.",
      author: "Michael Johnson",
      role: "Construction Manager",
      rating: 5,
      delay: "0.1s"
    },
    {
      text: "Fast delivery and exceptional customer service. The team was able to rush an order for a critical project, and the materials were perfect.",
      author: "Sarah Williams",
      role: "Project Engineer",
      rating: 5,
      delay: "0.2s"
    },
    {
      text: "The bulk discount pricing has saved our company thousands over the years. Quality has always been consistent, even with large orders.",
      author: "Robert Chen",
      role: "Purchasing Director",
      rating: 4,
      delay: "0.3s"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what professionals in the industry have to say about our products and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
