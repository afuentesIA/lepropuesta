// components/categories/CategoryCard.tsx
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Category } from '../../types/category.types';
import { Language } from '../../hooks/useLanguage';
import { ChevronRight, Sparkles, Zap, Shield, Scissors } from 'lucide-react';

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
      if (!hovered && category.images.length > 1) {
        setCurrentImageIndex((prev) => (prev + 1) % category.images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [category.images.length, hovered]);

  const getCategoryIcon = () => {
    switch(category.id) {
      case 'mobile-welding':
        return <Zap className="w-5 h-5" />;
      case 'jasper-x':
        return <Scissors className="w-5 h-5" />;
      case 'robotic-stations':
        return <Shield className="w-5 h-5" />;
      case 'custom-cells':
        return <Sparkles className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getCategoryBadge = () => {
    switch(category.id) {
      case 'mobile-welding':
        return 'MOBILE';
      case 'jasper-x':
        return 'CUTTER';
      case 'robotic-stations':
        return 'STATION';
      case 'custom-cells':
        return 'CUSTOM';
      default:
        return '';
    }
  };

  const getCategoryFeatures = () => {
    switch(category.id) {
      case 'mobile-welding':
        return ['AI-POWERED', 'MOBILE', 'AUTOMATION'];
      case 'jasper-x':
        return ['AI CUTTING', '3D VISION', 'NO PROGRAMMING', 'WIRELESS CONTROL'];
      case 'robotic-stations':
        return ['TURN-KEY', 'PRECISION', 'INDUSTRIAL'];
      case 'custom-cells':
        return ['BESPOKE', 'FLEXIBLE', 'CUSTOM'];
      default:
        return [];
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative h-[620px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ${
        isActive 
          ? 'ring-4 ring-red-500 ring-offset-4 ring-offset-white scale-[1.02] shadow-2xl shadow-red-500/20' 
          : 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/10'
      }`}
    >
      {/* Fondo hueso para las tarjetas */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-100">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Imagen con contenedor - posición ajustada */}
      <div className="absolute inset-0 flex items-start justify-center pt-24">
        {category.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-start justify-center pt-24 transition-all duration-1000 ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {imagesLoaded[index] && (
              <>
                <img
                  src={image}
                  alt={`${category.title[language]} ${index + 1}`}
                  className={`max-w-[75%] max-h-[45%] w-auto h-auto object-contain mt-2 ${
                    category.id === 'jasper-x' ? 'max-w-[85%] max-h-[55%]' : ''
                  }`}
                  style={{
                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.15))'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-stone-100 via-stone-100/70 to-transparent pointer-events-none" />
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Efectos visuales modernos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent -skew-x-12 transition-transform duration-700 ${
          hovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
      </div>

      {/* Badge superior con icono - estilo rojo */}
      <div className="absolute top-5 left-5 z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-full shadow-md shadow-red-500/20">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <span className="text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            {getCategoryIcon()}
            {getCategoryBadge()} SERIES
          </span>
        </div>
      </div>

      {/* Image Counter - solo si hay más de una imagen */}
      {category.images.length > 1 && (
        <div className="absolute top-5 right-5 z-10 px-2.5 py-1 bg-stone-200/80 backdrop-blur-sm rounded-full border border-stone-300 shadow-sm">
          <span className="text-stone-700 text-xs font-medium">
            <span className="text-red-600 font-semibold">{currentImageIndex + 1}</span> / {category.images.length}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 z-10 bg-gradient-to-t from-stone-100 via-stone-100/95 to-transparent pt-12">
        <h3 className="text-4xl font-bold tracking-tight leading-tight mb-2">
          <span className="text-black">{category.title[language]}</span>
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed mb-5 max-w-md font-light">
          {category.description[language]}
        </p>

        {/* Features tags - estilo rojo sutil */}
        <div className="flex flex-wrap gap-2 mb-6">
          {getCategoryFeatures().map((feature, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-red-50 rounded-full text-red-700 text-[11px] font-medium border border-red-200"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex items-center gap-2 group/btn">
          <div className={`w-8 h-8 rounded-full bg-red-600 flex items-center justify-center transition-all duration-300 ${
            hovered ? 'scale-110 bg-red-500 shadow-lg shadow-red-500/30' : ''
          }`}>
            <ChevronRight className={`w-4 h-4 text-white transition-transform duration-300 ${
              hovered ? 'translate-x-0.5' : ''
            }`} />
          </div>
          <span className="text-stone-500 text-xs font-medium tracking-wide uppercase group-hover/btn:text-red-600 transition-colors">
            EXPLORE SOLUTION
          </span>
        </div>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute top-5 right-20 z-10">
          <div className="flex items-center gap-1.5 bg-red-600 text-white px-3 py-1.5 rounded-full shadow-lg shadow-red-500/30">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider">ACTIVE</span>
          </div>
        </div>
      )}

      {/* Borde inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 via-red-500 to-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
