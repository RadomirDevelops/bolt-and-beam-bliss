
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Building, Package, Boxes, Hammer, Glue } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../../contexts/LanguageContext';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  slug: string;
  delay: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, icon, color, slug, delay }) => {
  const { t } = useLanguage();
  
  return (
    <Card className={`product-card reveal overflow-hidden`} style={{ transitionDelay: delay }}>
      <div className={`absolute -right-6 -top-6 w-20 h-20 rounded-full ${color} opacity-10`}></div>
      <CardHeader>
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-2`}>
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">
          {t("categories.viewDescription")}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/category/${slug}`} className="w-full">
          <Button variant="outline" className="w-full border-gray-300 hover:border-bolt-600 hover:text-bolt-600">
            {t("categories.viewProducts")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const CategoryGrid: React.FC = () => {
  const { t } = useLanguage();
  
  const categories = [
    {
      title: t("categories.bolts"),
      description: t("categoryDescriptions.bolts"),
      icon: <Wrench className="text-white" size={24} />,
      color: "bg-bolt-600",
      slug: "bolts",
      delay: "0.1s"
    },
    {
      title: t("categories.screws"),
      description: t("categoryDescriptions.screws"),
      icon: <Hammer className="text-white" size={24} />,
      color: "bg-amber-600",
      slug: "screws",
      delay: "0.2s"
    },
    {
      title: t("categories.anchors"),
      description: t("categoryDescriptions.anchors"),
      icon: <Building className="text-white" size={24} />,
      color: "bg-emerald-600",
      slug: "anchors",
      delay: "0.3s"
    },
    {
      title: t("categories.tools"),
      description: t("categoryDescriptions.tools"),
      icon: <Package className="text-white" size={24} />,
      color: "bg-purple-600",
      slug: "tools",
      delay: "0.4s"
    },
    {
      title: t("categories.accessories"),
      description: t("categoryDescriptions.accessories"),
      icon: <Boxes className="text-white" size={24} />,
      color: "bg-sky-600",
      slug: "accessories",
      delay: "0.5s"
    },
    {
      title: t("categories.adhesives"),
      description: t("categoryDescriptions.adhesives"),
      icon: <Glue className="text-white" size={24} />,
      color: "bg-orange-600",
      slug: "adhesives",
      delay: "0.6s"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("categories.title")}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("categories.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
