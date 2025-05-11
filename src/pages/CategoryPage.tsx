
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CategoryProducts from '../components/category/CategoryProducts';
import FooterSection from '../components/FooterSection';
import ScrollToTop from '../components/ScrollToTop';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const CategoryPage = () => {
  // Get category from URL params
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Initialize scroll animations
  useScrollAnimation();
  const { t, language } = useLanguage();

  // Update document title based on language and category
  useEffect(() => {
    const categoryKey = `categories.${categorySlug}`;
    const categoryName = t(categoryKey);
    
    document.title = language === "en" 
      ? `${categoryName} - FastenerCo Fisher Products` 
      : `${categoryName} - FastenerCo Fisher производи`;
  }, [language, categorySlug, t]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 md:pt-28 pb-16">
        <CategoryProducts categorySlug={categorySlug || ""} />
      </div>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default CategoryPage;
