
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sr";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.features": "Features",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.shop": "Shop",
    "nav.getQuote": "Get Quote",
    
    // Hero Section
    "hero.title": "Premium Construction Materials & Fasteners",
    "hero.subtitle": "Official Importer of Fisher Brand Products",
    "hero.description": "We provide high-quality fasteners, tools, and construction supplies for professionals and DIY enthusiasts. As the official importer of Fisher brand products, we guarantee authentic, durable, and reliable solutions for all your construction needs.",
    "hero.button1": "Browse Products",
    "hero.button2": "Request Quote",
    
    // Categories Section
    "categories.title": "Product Categories",
    "categories.subtitle": "PREMIUM FISHER PRODUCTS",
    "categories.description": "Explore our extensive range of authentic Fisher fasteners and construction materials, directly imported to ensure the highest quality for your projects.",
    "categories.bolts": "Bolts",
    "categories.screws": "Screws",
    "categories.anchors": "Anchors",
    "categories.tools": "Tools",
    "categories.accessories": "Accessories",
    "categories.adhesives": "Adhesives",
    "categories.viewAll": "View All Products",
    
    // Features Section
    "features.title": "Why Choose Our Fisher Products",
    "features.subtitle": "QUALITY ASSURED",
    "features.description": "As the official Fisher brand importer, we provide superior quality products with exceptional service and technical support.",
    
    // Testimonials Section
    "testimonials.title": "Why Industry Leaders Choose Us",
    "testimonials.subtitle": "TRUSTED BY PROFESSIONALS",
    "testimonials.description": "Don't just take our word for it. See how our premium Fisher fasteners and construction materials have transformed businesses and projects across the industry.",
    "testimonials.footer": "Join over 500+ construction companies that trust our authentic Fisher products for their most critical projects.",
    "testimonials.cta": "Browse Our Products",
    
    // Contact Section
    "contact.title": "Ready to Start Your Project?",
    "contact.subtitle": "GET IN TOUCH",
    "contact.description": "Contact our team of Fisher product experts for personalized advice and quotes for your construction needs.",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Your Message",
    "contact.submit": "Send Message",
    
    // Footer
    "footer.about": "About FastenerCo",
    "footer.aboutDescription": "Official importer and distributor of premium Fisher brand fasteners and construction materials in the region.",
    "footer.products": "Products",
    "footer.resources": "Resources",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.copyright": "© 2023 FastenerCo. Official Fisher Brand Importer. All rights reserved."
  },
  sr: {
    // Navigation
    "nav.home": "Почетна",
    "nav.products": "Производи",
    "nav.features": "Карактеристике",
    "nav.testimonials": "Препоруке",
    "nav.contact": "Контакт",
    "nav.shop": "Продавница",
    "nav.getQuote": "Затражи понуду",
    
    // Hero Section
    "hero.title": "Премијум грађевински материјали и причвршћивачи",
    "hero.subtitle": "Званични увозник Fisher производа",
    "hero.description": "Обезбеђујемо висококвалитетне причвршћиваче, алате и грађевински материјал за професионалце и ДИY ентузијасте. Као званични увозник Fisher производа, гарантујемо аутентична, издржљива и поуздана решења за све ваше грађевинске потребе.",
    "hero.button1": "Прегледај производе",
    "hero.button2": "Тражи понуду",
    
    // Categories Section
    "categories.title": "Категорије производа",
    "categories.subtitle": "ПРЕМИЈУМ FISHER ПРОИЗВОДИ",
    "categories.description": "Истражите наш широк асортиман аутентичних Fisher причвршћивача и грађевинских материјала, директно увезених да обезбеде највиши квалитет за ваше пројекте.",
    "categories.bolts": "Вијци",
    "categories.screws": "Шрафови",
    "categories.anchors": "Типлови",
    "categories.tools": "Алати",
    "categories.accessories": "Додатна опрема",
    "categories.adhesives": "Лепкови",
    "categories.viewAll": "Погледај све производе",
    
    // Features Section
    "features.title": "Зашто изабрати наше Fisher производе",
    "features.subtitle": "ГАРАНТОВАНИ КВАЛИТЕТ",
    "features.description": "Као званични увозник Fisher бренда, обезбеђујемо производе супериорног квалитета уз изузетну услугу и техничку подршку.",
    
    // Testimonials Section
    "testimonials.title": "Зашто нас индустријски лидери бирају",
    "testimonials.subtitle": "ВЕРУЈУ НАМ ПРОФЕСИОНАЛЦИ",
    "testimonials.description": "Не верујте само нашим речима. Погледајте како су наши премијум Fisher причвршћивачи и грађевински материјали трансформисали бизнисе и пројекте широм индустрије.",
    "testimonials.footer": "Придружите се преко 500+ грађевинских компанија које верују нашим аутентичним Fisher производима за њихове најкритичније пројекте.",
    "testimonials.cta": "Прегледај наше производе",
    
    // Contact Section
    "contact.title": "Спремни да започнете свој пројекат?",
    "contact.subtitle": "КОНТАКТИРАЈТЕ НАС",
    "contact.description": "Контактирајте наш тим Fisher експерата за персонализоване савете и понуде за ваше грађевинске потребе.",
    "contact.name": "Пуно име",
    "contact.email": "Имејл адреса",
    "contact.phone": "Број телефона",
    "contact.message": "Ваша порука",
    "contact.submit": "Пошаљи поруку",
    
    // Footer
    "footer.about": "О FastenerCo",
    "footer.aboutDescription": "Званични увозник и дистрибутер премијум Fisher производа и грађевинских материјала у региону.",
    "footer.products": "Производи",
    "footer.resources": "Ресурси",
    "footer.support": "Подршка",
    "footer.legal": "Правно",
    "footer.copyright": "© 2023 FastenerCo. Званични увозник Fisher производа. Сва права задржана."
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const translate = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
