
import React from 'react';
import { Wrench, Building, Package, Boxes } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface CategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  slug: string;
  delay: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ title, description, icon, color, slug, delay }) => {
  const { t } = useLanguage();
  
  return (
    <div className={`p-6 rounded-lg shadow-md bg-white relative overflow-hidden product-card reveal`} style={{ transitionDelay: delay }}>
      <div className={`absolute -right-6 -top-6 w-20 h-20 rounded-full ${color} opacity-10`}></div>
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/category/${slug}`}>
        <Button variant="outline" className="border-gray-300 hover:border-bolt-600 hover:text-bolt-600">
          {t("categories.viewProducts")}
        </Button>
      </Link>
    </div>
  );
};

const ProductCategories: React.FC = () => {
  const { t } = useLanguage();
  
  const categories = [
    {
      title: t("categories.fasteners"),
      description: t("categoryDescriptions.fasteners"),
      icon: <Wrench className="text-white" size={24} />,
      color: "bg-bolt-600",
      slug: "bolts",
      delay: "0.1s"
    },
    {
      title: t("categories.buildingMaterials"),
      description: t("categoryDescriptions.buildingMaterials"),
      icon: <Building className="text-white" size={24} />,
      color: "bg-amber-600",
      slug: "anchors",
      delay: "0.2s"
    },
    {
      title: t("categories.specialtyHardware"),
      description: t("categoryDescriptions.specialtyHardware"),
      icon: <Package className="text-white" size={24} />,
      color: "bg-emerald-600",
      slug: "tools",
      delay: "0.3s"
    },
    {
      title: t("categories.bulkSupplies"),
      description: t("categoryDescriptions.bulkSupplies"),
      icon: <Boxes className="text-white" size={24} />,
      color: "bg-purple-600",
      slug: "accessories",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("categories.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("categories.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/categories">
            <Button className="bg-bolt-600 hover:bg-bolt-700">
              {t("categories.viewAllCategories")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
