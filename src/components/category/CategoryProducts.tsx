
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '../../contexts/LanguageContext';
import { getProductsByCategory } from '../../utils/productUtils';

interface CategoryProductsProps {
  categorySlug: string;
}

const CategoryProducts: React.FC<CategoryProductsProps> = ({ categorySlug }) => {
  const { t } = useLanguage();
  const products = getProductsByCategory(categorySlug);
  
  // Get title case category name
  const getCategoryTitle = () => {
    return t(`categories.${categorySlug}`);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{getCategoryTitle()}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(`categoryDescriptions.${categorySlug}`)}
          </p>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="product-card reveal overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                  <p className="font-bold text-lg">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-bolt-600 hover:bg-bolt-700">
                    {t("products.viewDetails")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">{t("products.noProductsFound")}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryProducts;
