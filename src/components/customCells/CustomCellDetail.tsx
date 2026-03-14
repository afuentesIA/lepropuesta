// components/customCells/CustomCellDetail.tsx
import { useRef, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Check, Cpu, Zap, Shield, Move3d, Eye, ArrowRight, Maximize2, Target, Layers } from 'lucide-react';
import { CustomCellModel } from '../../types/customCell.types';
import { Language } from '../../hooks/useLanguage';

interface CustomCellDetailProps {
  model: CustomCellModel;
  language: Language;
  onClose: () => void;
}

export const CustomCellDetail = ({ model, language, onClose }: CustomCellDetailProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'specs' | 'components' | 'applications'>('specs');
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % model.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + model.images.length) % model.images.length);
  };

  const getIconForSpec = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('power') || lowerLabel.includes('potencia')) return <Zap className="w-5 h-5" />;
    if (lowerLabel.includes('dimension') || lowerLabel.includes('dimensión') || lowerLabel.includes('área')) return <Move3d className="w-5 h-5" />;
    if (lowerLabel.includes('weight') || lowerLabel.includes('peso')) return <Shield className="w-5 h-5" />;
    if (lowerLabel.includes('robot')) return <Cpu className="w-5 h-5" />;
    if (lowerLabel.includes('capacity') || lowerLabel.includes('capacidad') || lowerLabel.includes('carga')) return <Maximize2 className="w-5 h-5" />;
    if (lowerLabel.includes('number') || lowerLabel.includes('cantidad')) return <Layers className="w-5 h-5" />;
    return <Eye className="w-5 h-5" />;
  };

  // Manejar clic en el fondo para cerrar
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-24 bg-black/95 backdrop-blur-lg overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-6xl bg-gradient-to-b from-gray-900 to-black rounded-[2rem] border border-white/10 shadow-2xl my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 border border-white/10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Gallery */}
        <div className="relative h-[500px] bg-gradient-to-b from-gray-900 to-black overflow-hidden rounded-t-[2rem]">
          <div className="relative w-full h-full">
            {model.images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt[language]}
                  className="w-full h-full object-contain p-12"
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
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 border border-white/10 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 border border-white/10 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/10 text-white z-10">
            <span className="text-red-400">{currentImage + 1}</span> / {model.images.length}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Title and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white tracking-tight">
                  {model.name}
                </h2>
                {model.subtitle && (
                  <p className="text-lg text-red-400">
                    {model.subtitle[language]}
                  </p>
                )}
              </div>
            </div>
            <p className="text-xl text-white/80 leading-relaxed">
              {model.description[language]}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {(['specs', 'components', 'applications'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {tab === 'specs' && (language === 'en' ? 'Specifications' : language === 'es' ? 'Especificaciones' : 'Especificações')}
                {tab === 'components' && (language === 'en' ? 'Components' : language === 'es' ? 'Componentes' : 'Componentes')}
                {tab === 'applications' && (language === 'en' ? 'Applications' : language === 'es' ? 'Aplicaciones' : 'Aplicações')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'specs' && (
              <div className="space-y-8">
                {/* Technical Specifications */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-red-400" />
                    {language === 'en' ? 'Technical Specifications' : language === 'es' ? 'Especificaciones Técnicas' : 'Especificações Técnicas'}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {model.technicalSpecs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300"
                      >
                        <div className="text-red-400">
                          {getIconForSpec(spec.label[language])}
                        </div>
                        <div>
                          <div className="text-sm text-white/60">
                            {spec.label[language]}
                          </div>
                          <div className="text-lg font-semibold text-white">
                            {spec.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Features */}
                {model.options && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-red-400" />
                      {model.options.title[language]}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {model.options.items[language].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                          <Check className="w-5 h-5 text-red-400 flex-shrink-0" />
                          <span className="text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'components' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-red-400" />
                  {model.mainComponents.title[language]}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {model.mainComponents.components.map((component, index) => (
                    <div
                      key={index}
                      className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/30 transition-all duration-300"
                    >
                      <div className="font-semibold text-white mb-3 text-lg">
                        {component.name}
                      </div>
                      {component.specifications && component.specifications.length > 0 && (
                        <ul className="space-y-2">
                          {component.specifications.map((spec, idx) => (
                            <li key={idx} className="text-sm text-white/60 flex items-center gap-2">
                              <div className="w-1 h-1 bg-red-400 rounded-full" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-8">
                {/* Applications */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-red-400" />
                    {model.applications.title[language]}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {model.applications.items[language].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <span className="text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Target className="w-6 h-6 text-red-400" />
                    {language === 'en' ? 'Key Benefits' : language === 'es' ? 'Beneficios Clave' : 'Benefícios Principais'}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {model.benefits[language].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <Check className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-white/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(220,38,38,0.3)] group flex-1"
            >
              <span>
                {language === 'en' ? 'Request Quote' : language === 'es' ? 'Solicitar Cotización' : 'Solicitar Cotação'}
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};