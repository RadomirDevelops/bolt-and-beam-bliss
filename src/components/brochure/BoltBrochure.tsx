import React from 'react';
import { getProductsByCategory } from '../../utils/productUtils';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Wrench, Info, Share2 } from 'lucide-react';

const BoltBrochure = () => {
  const { t, language } = useLanguage();
  const boltProducts = getProductsByCategory('bolts');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="text-center mb-8 reveal">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 bg-bolt-600 w-16 mr-4"></div>
            <Wrench className="text-bolt-600" size={32} />
            <div className="h-1 bg-bolt-600 w-16 ml-4"></div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            {language === "en" ? "Professional Bolt Collection" : "Професионална Колекција Вијака"}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "en" 
              ? "Explore our premium range of high-quality Fisher bolts, designed for professional and industrial applications."
              : "Истражите наш премиум асортиман висококвалитетних Fisher вијака, дизајнираних за професионалне и индустријске примене."}
          </p>
        </div>

        {/* Bolt Types Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 reveal">
          <a 
            href="#hex-bolts"
            onClick={(e) => { e.preventDefault(); scrollToSection('hex-bolts'); }}
            className="text-bolt-600 hover:text-bolt-700 font-medium underline decoration-2 underline-offset-4 hover:decoration-bolt-700 transition-colors"
          >
            {language === "en" ? "Hex Bolts" : "Шестоугаони Вијци"}
          </a>
          <a 
            href="#carriage-bolts"
            onClick={(e) => { e.preventDefault(); scrollToSection('carriage-bolts'); }}
            className="text-bolt-600 hover:text-bolt-700 font-medium underline decoration-2 underline-offset-4 hover:decoration-bolt-700 transition-colors"
          >
            {language === "en" ? "Carriage Bolts" : "Каријеџ Вијци"}
          </a>
          <a 
            href="#anchor-bolts"
            onClick={(e) => { e.preventDefault(); scrollToSection('anchor-bolts'); }}
            className="text-bolt-600 hover:text-bolt-700 font-medium underline decoration-2 underline-offset-4 hover:decoration-bolt-700 transition-colors"
          >
            {language === "en" ? "Anchor Bolts" : "Анкер Вијци"}
          </a>
          <a 
            href="#socket-bolts"
            onClick={(e) => { e.preventDefault(); scrollToSection('socket-bolts'); }}
            className="text-bolt-600 hover:text-bolt-700 font-medium underline decoration-2 underline-offset-4 hover:decoration-bolt-700 transition-colors"
          >
            {language === "en" ? "Socket Head Bolts" : "Унутрашњи Шестоугао"}
          </a>
        </div>

        {/* Introduction section */}
        <div id="introduction" className="bg-white p-6 md:p-10 rounded-lg shadow-md mb-16 reveal">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=800" 
                alt={language === "en" ? "Premium bolts collection" : "Премиум колекција вијака"} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-bolt-600">
                {language === "en" ? "Fisher Quality Guarantee" : "Fisher Гаранција Квалитета"}
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                {language === "en" 
                  ? "Our bolts are manufactured to the highest standards, ensuring reliability and durability in the most demanding conditions."
                  : "Наши вијци се производе по највишим стандардима, осигуравајући поузданост и трајност у најзахтевнијим условима."}
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                {language === "en"
                  ? "The Fisher brand is recognized worldwide for precision engineering and superior metallurgical properties."
                  : "Бренд Fisher је препознат широм света по прецизном инжењерингу и супериорним металуршким својствима."}
              </p>
              <div className="flex items-center space-x-2 text-bolt-600">
                <Info size={20} />
                <span className="text-sm font-medium">
                  {language === "en" ? "All products certified to ISO standards" : "Сви производи сертификовани према ISO стандардима"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bolt Categories */}
        <div id="hex-bolts" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-bolt-600 reveal">
            {language === "en" ? "Hex Bolts" : "Шестоугаони Вијци"}
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {boltProducts.slice(0, 4).map((product, index) => (
                <div key={product.id} className="text-center reveal" style={{ transitionDelay: `${0.1 * index}s` }}>
                  <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden bg-white shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{product.size}</p>
                  <span className="text-sm font-bold text-bolt-600">${product.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="carriage-bolts" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-bolt-600 reveal">
            {language === "en" ? "Carriage Bolts" : "Каријеџ Вијци"}
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {boltProducts.slice(4, 8).map((product, index) => (
                <div key={product.id} className="text-center reveal" style={{ transitionDelay: `${0.1 * index}s` }}>
                  <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden bg-white shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{product.size}</p>
                  <span className="text-sm font-bold text-bolt-600">${product.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="anchor-bolts" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-bolt-600 reveal">
            {language === "en" ? "Anchor Bolts" : "Анкер Вијци"}
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {boltProducts.slice(8, 12).map((product, index) => (
                <div key={product.id} className="text-center reveal" style={{ transitionDelay: `${0.1 * index}s` }}>
                  <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden bg-white shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{product.size}</p>
                  <span className="text-sm font-bold text-bolt-600">${product.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="socket-bolts" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-bolt-600 reveal">
            {language === "en" ? "Socket Head Bolts" : "Унутрашњи Шестоугао"}
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              {boltProducts.slice(12, 16).map((product, index) => (
                <div key={product.id} className="text-center reveal" style={{ transitionDelay: `${0.1 * index}s` }}>
                  <div className="w-24 h-24 mx-auto mb-3 rounded-lg overflow-hidden bg-white shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{product.size}</p>
                  <span className="text-sm font-bold text-bolt-600">${product.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical specifications section */}
        <div id="specifications" className="bg-white p-6 md:p-10 rounded-lg shadow-md mb-16 reveal">
          <h2 className="text-2xl font-bold mb-6 text-center text-bolt-600">
            {language === "en" ? "Technical Specifications" : "Техничке Спецификације"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3 text-lg">
                {language === "en" ? "Material Properties" : "Својства Материјала"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>{language === "en" ? "Tensile Strength" : "Затезна Чврстоћа"}</span>
                  <span className="font-medium">800-1200 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Yield Strength" : "Граница Течења"}</span>
                  <span className="font-medium">640-940 MPa</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Hardness" : "Тврдоћа"}</span>
                  <span className="font-medium">22-32 HRC</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Corrosion Resistance" : "Отпорност На Корозију"}</span>
                  <span className="font-medium">{language === "en" ? "High" : "Висока"}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-3 text-lg">
                {language === "en" ? "Available Finishes" : "Доступне Завршне Обраде"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>{language === "en" ? "Zinc Plated" : "Поцинковани"}</span>
                  <span className="font-medium">ASTM B633</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Hot-Dip Galvanized" : "Топло Поцинковани"}</span>
                  <span className="font-medium">ASTM A153</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Stainless Steel" : "Нерђајући Челик"}</span>
                  <span className="font-medium">304, 316</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === "en" ? "Black Oxide" : "Црни Оксид"}</span>
                  <span className="font-medium">MIL-DTL-13924</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div id="contact" className="text-center reveal">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === "en" 
              ? "Need More Information?" 
              : "Потребно Више Информација?"}
          </h2>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Contact our product specialists for detailed information about our bolt products, custom specifications, or bulk orders."
              : "Контактирајте наше специјалисте за производе за детаљне информације о нашим вијцима, прилагођеним спецификацијама или великим наруџбинама."}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-bolt-600 hover:bg-bolt-700 text-white px-6 py-3 rounded-lg font-medium flex items-center">
              <Info size={20} className="mr-2" />
              {language === "en" ? "Request Catalog" : "Затражи Каталог"}
            </button>
            <button className="bg-white border border-bolt-600 text-bolt-600 hover:bg-bolt-600 hover:text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
              <Share2 size={20} className="mr-2" />
              {language === "en" ? "Share Brochure" : "Подели Брошуру"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoltBrochure;
