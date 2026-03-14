// components/customCells/CustomCellsSection.tsx
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomCellCard } from './CustomCellCard';
import { CustomCellDetail } from './CustomCellDetail';
import { CustomCellModel } from '../../types/customCell.types';
import { Language } from '../../hooks/useLanguage';
import { customCellModels } from '../../data/customCellModels';

// Registrar el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface CustomCellsSectionProps {
  language: Language;
}

export const CustomCellsSection = ({ language }: CustomCellsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState<CustomCellModel | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Obtener categorías únicas para el filtro
  const categories = ['all', ...new Set(customCellModels.map(model => {
    if (model.id.includes('cobot')) return 'collaborative';
    if (model.id.includes('c01')) return 'compact';
    if (model.id.includes('c02')) return 'rotary';
    if (model.id.includes('c03')) return 'double-rotary';
    if (model.id.includes('c04')) return 'large-scale';
    if (model.id.includes('c05') || model.id.includes('c06')) return 'positioner';
    return 'other';
  }))];

  const filteredModels = filter === 'all' 
    ? customCellModels 
    : customCellModels.filter(model => {
        if (filter === 'collaborative') return model.id.includes('cobot');
        if (filter === 'compact') return model.id.includes('c01');
        if (filter === 'rotary') return model.id.includes('c02');
        if (filter === 'double-rotary') return model.id.includes('c03');
        if (filter === 'large-scale') return model.id.includes('c04');
        if (filter === 'positioner') return model.id.includes('c05') || model.id.includes('c06');
        return true;
      });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation - solo una vez al hacer scroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.5
        },
        y: 60,
        opacity: 0
      });

      // Grid stagger animation - solo una vez al hacer scroll
      gsap.from('.model-card-wrapper', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          end: 'top 45%',
          scrub: 0.5
        },
        y: 50,
        opacity: 0,
        stagger: 0.1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []); // Sin dependencias para que solo se ejecute una vez

  // No animar los filtros, solo mostrarlos normalmente
  // No refrescar ScrollTrigger al cambiar filtro para evitar problemas

  const getCategoryLabel = (cat: string) => {
    switch(cat) {
      case 'all':
        return language === 'en' ? 'All Solutions' : language === 'es' ? 'Todas las Soluciones' : 'Todas as Soluções';
      case 'collaborative':
        return language === 'en' ? 'Collaborative' : language === 'es' ? 'Colaborativos' : 'Colaborativos';
      case 'compact':
        return language === 'en' ? 'Compact' : language === 'es' ? 'Compactas' : 'Compactas';
      case 'rotary':
        return language === 'en' ? 'Rotary' : language === 'es' ? 'Rotativas' : 'Rotativas';
      case 'double-rotary':
        return language === 'en' ? 'Double Rotary' : language === 'es' ? 'Doble Rotación' : 'Dupla Rotação';
      case 'large-scale':
        return language === 'en' ? 'Large Scale' : language === 'es' ? 'Gran Escala' : 'Grande Escala';
      case 'positioner':
        return language === 'en' ? 'Positioners' : language === 'es' ? 'Posicionadores' : 'Posicionadores';
      default:
        return cat;
    }
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Fondo con efectos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Título */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-red-400 text-xl font-semibold tracking-wide uppercase px-6 py-2 border border-red-500/20 rounded-full bg-red-500/5 backdrop-blur-sm">
              {language === 'en' ? 'Custom Solutions' : language === 'es' ? 'Soluciones Personalizadas' : 'Soluções Personalizadas'}
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-10 tracking-tight">
            {language === 'en' ? 'Welding Cells' : language === 'es' ? 'Celdas de Soldadura' : 'Células de Soldagem'}
          </h2>
          <p className="text-2xl sm:text-3xl text-white/80 leading-relaxed font-light max-w-4xl mx-auto">
            {language === 'en'
              ? 'Fully customized welding solutions designed and engineered for your specific production requirements'
              : language === 'es'
              ? 'Soluciones de soldadura completamente personalizadas diseñadas y fabricadas para sus requisitos de producción específicos'
              : 'Soluções de soldagem completamente personalizadas projetadas e fabricadas para seus requisitos específicos de produção'}
          </p>
        </div>

        {/* Filtros - Sin animación para que se vean siempre visibles */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-500 ${
                filter === cat
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30 scale-105'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Grid de modelos */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredModels.map((model, index) => (
            <div key={model.id} className="model-card-wrapper">
              <CustomCellCard
                model={model}
                language={language}
                index={index}
                onViewDetails={() => setSelectedModel(model)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalles */}
      {selectedModel && (
        <CustomCellDetail
          model={selectedModel}
          language={language}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </section>
  );
};