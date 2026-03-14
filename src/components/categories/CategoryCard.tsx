// components/categories/CategoryCard.tsx
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Category } from '../../types/category.types';
import { Language } from '../../hooks/useLanguage';
import { ChevronRight, Sparkles, Zap, Shield } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  language: Language;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryCard = ({ category, language, isActive, onClick }: CategoryCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Preload images
    const loadedStates = category.images.map(() => false);
    setImagesLoaded(loadedStates);

    category.images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.src = src;
    });
  }, [category.images]);

  useEffect(() => {
    if (!cardRef.current) return;

    const interval = setInterval(() => {
      if (!hovered) {
        setCurrentImageIndex((prev) => (prev + 1) % category.images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [category.images.length, hovered]);

  const getCategoryIcon = () => {
    switch(category.id) {
      case 'mobile-welding':
        return <Zap className="w-6 h-6" />;
      case 'robotic-stations':
        return <Shield className="w-6 h-6" />;
      case 'custom-cells':
        return <Sparkles className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative h-[650px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isActive 
          ? 'ring-4 ring-red-500 ring-offset-4 ring-offset-black scale-[1.02] shadow-2xl shadow-red-500/20' 
          : 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10'
      }`}
    >
      {/* Background Image Container - AJUSTADO: imágenes más grandes y más arriba */}
      <div className="absolute inset-0 flex items-start justify-center pt-24 bg-gradient-to-br from-gray-900 to-black">
        {category.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-start justify-center pt-24 transition-all duration-1500 ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            {imagesLoaded[index] && (
              <>
                <img
                  src={image}
                  alt={`${category.title[language]} ${index + 1}`}
                  className="max-w-[92%] max-h-[75%] w-auto h-auto object-contain"
                  style={{
                    filter: 'drop-shadow(0 25px 35px rgba(0, 0, 0, 0.6))'
                  }}
                />
                {/* Overlay de color para mejorar contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Efectos visuales modernos */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
        
        {/* Efecto de brillo en los bordes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        {/* Efecto de deslumbramiento en hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transition-transform duration-1000 ${
          hovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
      </div>

      {/* Badge superior con icono */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
            {getCategoryIcon()}
            {category.id === 'mobile-welding' && (language === 'en' ? 'MOBILE SERIES' : language === 'es' ? 'SERIE MÓVIL' : 'SÉRIE MÓVEL')}
            {category.id === 'robotic-stations' && (language === 'en' ? 'STATION SERIES' : language === 'es' ? 'SERIE ESTACIONES' : 'SÉRIE ESTAÇÕES')}
            {category.id === 'custom-cells' && (language === 'en' ? 'CUSTOM SERIES' : language === 'es' ? 'SERIE PERSONALIZADA' : 'SÉRIE PERSONALIZADA')}
          </span>
        </div>
      </div>

      {/* Image Counter - Modernizado */}
      <div className="absolute top-6 right-6 z-10 px-3 py-1.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-white/80 text-sm font-medium">
        <span className="text-red-400">{currentImageIndex + 1}</span> / {category.images.length}
      </div>

      {/* Content - Rediseñado */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transform transition-all duration-700">
        {/* Título principal */}
        <h3 className="text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
          {category.title[language]}
        </h3>

        {/* Descripción con efecto de gradiente */}
        <p className="text-lg text-white/90 leading-relaxed mb-6 max-w-md font-light">
          {category.description[language]}
        </p>

        {/* Features tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {category.id === 'mobile-welding' && (
            <>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">AI-POWERED</span>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">MOBILE</span>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">AUTOMATION</span>
            </>
          )}
          {category.id === 'robotic-stations' && (
            <>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">TURN-KEY</span>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">PRECISION</span>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">INDUSTRIAL</span>
            </>
          )}
          {category.id === 'custom-cells' && (
            <>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">BESPOKE</span>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">FLEXIBLE</span>
              <span className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-red-400 text-xs font-semibold border border-red-500/20">CUSTOM</span>
            </>
          )}
        </div>

        {/* Explore Button - Rediseñado */}
        <div className="flex items-center gap-3 group/btn">
          <div className={`w-12 h-12 rounded-full bg-red-600 flex items-center justify-center transition-all duration-500 ${
            hovered ? 'scale-110 bg-red-500' : ''
          }`}>
            <ChevronRight className={`w-6 h-6 text-white transition-transform duration-500 ${
              hovered ? 'translate-x-1' : ''
            }`} />
          </div>
          <span className="text-white/80 font-semibold tracking-wider text-sm uppercase group-hover/btn:text-red-400 transition-colors">
            {language === 'en' ? 'Explore Solution' : language === 'es' ? 'Explorar Solución' : 'Explorar Solução'}
          </span>
        </div>
      </div>

      {/* Active Indicator - Modernizado */}
      {isActive && (
        <div className="absolute top-6 right-24 z-10">
          <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full shadow-lg shadow-red-600/30 border border-red-400/20">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            <div className="w-2 h-2 bg-white rounded-full absolute" />
            <span className="text-sm font-semibold ml-2">
              {language === 'en' ? 'ACTIVE' : language === 'es' ? 'ACTIVA' : 'ATIVA'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};