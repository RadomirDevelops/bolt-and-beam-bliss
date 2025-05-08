
import React from 'react';
import { Wrench, Building, Package, Boxes } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface CategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ title, description, icon, color, delay }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md bg-white relative overflow-hidden product-card reveal`} style={{ transitionDelay: delay }}>
      <div className={`absolute -right-6 -top-6 w-20 h-20 rounded-full ${color} opacity-10`}></div>
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to="/shop">
        <Button variant="outline" className="border-gray-300 hover:border-bolt-600 hover:text-bolt-600">
          View Products
        </Button>
      </Link>
    </div>
  );
};

const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: "Fasteners",
      description: "Bolts, nuts, screws, washers, and anchors designed for durability.",
      icon: <Wrench className="text-white" size={24} />,
      color: "bg-bolt-600",
      delay: "0.1s"
    },
    {
      title: "Building Materials",
      description: "Quality materials for construction of all sizes.",
      icon: <Building className="text-white" size={24} />,
      color: "bg-amber-600",
      delay: "0.2s"
    },
    {
      title: "Specialty Hardware",
      description: "Specialized hardware for unique projects and challenges.",
      icon: <Package className="text-white" size={24} />,
      color: "bg-emerald-600",
      delay: "0.3s"
    },
    {
      title: "Bulk Supplies",
      description: "Cost-effective solutions for large-scale projects.",
      icon: <Boxes className="text-white" size={24} />,
      color: "bg-purple-600",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality fasteners and construction materials to meet all your project needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
