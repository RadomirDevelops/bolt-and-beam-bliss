
import React from 'react';
import { CheckSquare, Clock, TrendingUp, ShieldCheck } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <div className="flex gap-4 reveal" style={{ transitionDelay: delay }}>
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <CheckSquare className="text-bolt-600" size={24} />,
      title: "Premium Quality",
      description: "Our fasteners are manufactured to strict standards, ensuring durability and reliability for all your projects.",
      delay: "0.1s"
    },
    {
      icon: <Clock className="text-bolt-600" size={24} />,
      title: "Fast Delivery",
      description: "Same-day shipping on orders placed before 2 PM, with real-time tracking and delivery updates.",
      delay: "0.2s"
    },
    {
      icon: <TrendingUp className="text-bolt-600" size={24} />,
      title: "Bulk Discounts",
      description: "Scale your savings with our volume-based pricing, perfect for contractors and large projects.",
      delay: "0.3s"
    },
    {
      icon: <ShieldCheck className="text-bolt-600" size={24} />,
      title: "Lifetime Warranty",
      description: "We stand behind our products with industry-leading warranties and hassle-free returns.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 reveal">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-bolt-600 to-bolt-400 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-gradient-to-br from-metal-700 via-metal-800 to-metal-900 rounded-2xl p-8 overflow-hidden shadow-xl">
                <div className="mb-6 text-center">
                  <h2 className="text-3xl font-bold text-white mb-3">Why Choose Us</h2>
                  <p className="text-gray-300">
                    We've been supplying quality fasteners and construction materials for over 25 years.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-bolt-400 mb-1">10k+</div>
                    <div className="text-sm text-gray-300">Products</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-bolt-400 mb-1">24h</div>
                    <div className="text-sm text-gray-300">Shipping</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-bolt-400 mb-1">98%</div>
                    <div className="text-sm text-gray-300">Satisfaction</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl font-bold text-bolt-400 mb-1">25+</div>
                    <div className="text-sm text-gray-300">Years</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-bolt-600/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
