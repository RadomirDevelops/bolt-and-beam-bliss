
import React from 'react';
import { getProductsByCategory } from '../../utils/productUtils';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Wrench, Info, Share2 } from 'lucide-react';

const BoltBrochure = () => {
  const { t, language } = useLanguage();
  const boltProducts = getProductsByCategory('bolts');

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 reveal">
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

        {/* Introduction section */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mb-16 reveal">
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

        {/* Product showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {boltProducts.map((product, index) => (
            <Card key={product.id} className="overflow-hidden product-card reveal border-0 shadow-lg" style={{ transitionDelay: `${0.1 * index}s` }}>
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {product.tag && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-bold ${
                    product.tag === 'New' ? 'bg-emerald-600' : 
                    product.tag === 'Sale' ? 'bg-red-600' : 
                    'bg-amber-500'
                  }`}>
                    {language === "en" ? product.tag : 
                      product.tag === 'New' ? 'Ново' : 
                      product.tag === 'Sale' ? 'Попуст' : 
                      'Бестселер'}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? 'text-amber-500' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500">({product.reviewCount})</span>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex justify-between items-center border-t pt-4 border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500">{language === "en" ? "Material" : "Материјал"}</div>
                    <div className="font-medium">{product.material}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{language === "en" ? "Size" : "Величина"}</div>
                    <div className="font-medium">{product.size}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{language === "en" ? "Price" : "Цена"}</div>
                    <div className="font-bold text-bolt-600">${product.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical specifications section */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md mb-16 reveal">
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
        <div className="text-center reveal">
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
