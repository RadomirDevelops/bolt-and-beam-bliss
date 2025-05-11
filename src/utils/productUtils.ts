
import { products } from '../components/e-commerce/products-data';

export const getProductsByCategory = (categorySlug: string) => {
  // Map category slugs to the category types used in the data
  const categoryMap: Record<string, string> = {
    bolts: 'fasteners',
    screws: 'fasteners',
    anchors: 'anchors',
    tools: 'tools',
    accessories: 'accessories',
    adhesives: 'adhesives'
  };
  
  const category = categoryMap[categorySlug] || categorySlug;
  
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};
