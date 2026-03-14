// components/customCells/CustomCellCard.tsx
import { useRef, useState, useEffect } from 'react';
import { ChevronRight, Maximize2, ArrowRight, Cpu, Zap, Shield, Move3d, Eye } from 'lucide-react';
import { CustomCellModel } from '../../types/customCell.types';
import { Language } from '../../hooks/useLanguage';

interface CustomCellCardProps {
  model: CustomCellModel;
  language: Language;
  index: number;
  onViewDetails: () => void;
}

export const CustomCellCard = ({ model, language, index, onViewDetails }: CustomCellCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current || !isHovered) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % model.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [model.images.length, isHovered]);

  const getModelIcon = () => {
    if (model.id.includes('cobot')) return <Cpu className="w-6 h-6" />;
    if (model.id.includes('c01')) return <Move3d className="w-6 h-6" />;
    if (model.id.includes('c02')) return <Zap className="w-6 h-6" />;
    if (model.id.includes('c03')) return <Shield className="w-6 h-6" />;
    if (model.id.includes('c04')) return <Eye className="w-6 h-6" />;
    if (model.id.includes('c05') || model.id.includes('c06')) return <Maximize2 className="w-6 h-6" />;
    return <Cpu className="w-6 h-6" />;
  };

  // Función para manejar el clic y abrir el modal
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Abriendo detalles para:', model.name); // Para debugging
    onViewDetails();
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/20"
    >
      {/* Imágenes con efecto de cambio */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        {model.images.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ${
              idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt[language]}
              className="w-full h-full object-contain p-6"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
                  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                    <rect width="400" height="400" fill="#1a1a1a"/>
                    <rect x="50" y="50" width="300" height="300" fill="#333" rx="20"/>
                    <text x="200" y="200" font-family="Arial" font-size="20" fill="#fff" text-anchor="middle">${model.name}</text>
                    <text x="200" y="240" font-family="Arial" font-size="14" fill="#999" text-anchor="middle">Image not available</text>
                  </svg>`
                );
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Efectos visuales */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transition-transform duration-1000 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`} />
      </div>

      {/* Badge superior */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
            {getModelIcon()}
            {model.id.includes('cobot') && 'COBOT'}
            {model.id.includes('c01') && 'COMPACT'}
            {model.id.includes('c02') && 'ROTARY'}
            {model.id.includes('c03') && 'DUAL ROTARY'}
            {model.id.includes('c04') && 'LARGE SCALE'}
            {model.id.includes('c05') && 'H-POSITIONER'}
            {model.id.includes('c06') && 'V-POSITIONER'}
          </span>
        </div>
      </div>

      {/* Contador de imágenes */}
      <div className="absolute top-6 right-6 z-10 px-3 py-1.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 text-white/80 text-sm font-medium">
        <span className="text-red-400">{currentImage + 1}</span> / {model.images.length}
      </div>

      {/* Contenido */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transform transition-all duration-700">
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
          {model.name}
        </h3>
        
        {model.subtitle && (
          <p className="text-lg text-white/80 mb-4 font-light">
            {model.subtitle[language]}
          </p>
        )}

        {/* Especificaciones rápidas */}
        <div className="flex flex-wrap gap-2 mb-6">
          {model.technicalSpecs.slice(0, 2).map((spec, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs border border-white/10"
            >
              {spec.value}
            </span>
          ))}
        </div>

        {/* Botón de acción */}
        <div className="flex items-center gap-3 group/btn">
          <div className={`w-12 h-12 rounded-full bg-red-600 flex items-center justify-center transition-all duration-500 ${
            isHovered ? 'scale-110 bg-red-500' : ''
          }`}>
            <ArrowRight className={`w-6 h-6 text-white transition-transform duration-500 ${
              isHovered ? 'translate-x-1' : ''
            }`} />
          </div>
          <span className="text-white/80 font-semibold tracking-wider text-sm uppercase group-hover/btn:text-red-400 transition-colors">
            {language === 'en' ? 'View Details' : language === 'es' ? 'Ver Detalles' : 'Ver Detalhes'}
          </span>
        </div>
      </div>
    </div>
  );
};