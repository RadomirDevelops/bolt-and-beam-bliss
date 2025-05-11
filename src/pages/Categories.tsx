
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import CategoryGrid from '../components/category/CategoryGrid';
import FooterSection from '../components/FooterSection';
import ScrollToTop from '../components/ScrollToTop';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const Categories = () => {
  // Initialize scroll animations
  useScrollAnimation();
  const { language } = useLanguage();

  // Update document title based on language
  useEffect(() => {
    document.title = language === "en" 
      ? "Product Categories - FastenerCo Fisher Products" 
      : "Категорије производа - FastenerCo Fisher производи";
  }, [language]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 md:pt-28 pb-16">
        <CategoryGrid />
      </div>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Categories;
