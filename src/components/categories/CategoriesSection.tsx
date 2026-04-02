// components/categories/CategoriesSection.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CategoryCard } from './CategoryCard';
import { Category } from '../../types/category.types';
import { Language } from '../../hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

interface CategoriesSectionProps {
  language: Language;
  activeCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

export const CategoriesSection = ({ language, activeCategory, onCategorySelect }: CategoriesSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      id: 'mobile-welding',
      title: {
        en: 'Mobile Welding',
        es: 'Soldadura Móvil',
        pt: 'Soldagem Móvel'
      },
      description: {
        en: 'AI-powered mobile welding robots for industrial automation',
        es: 'Robots de soldadura móvil con IA para automatización industrial',
        pt: 'Robôs de soldagem móvel com IA para automação industrial'
      },
      images: [
        '/img/maverick_x/1.png',
        '/img/maverick_x/2.png',
        '/img/maverick_s/1.png',
        '/img/maverick_s/2.png'
      ]
    },
    {
      id: 'jasper-x',
      title: {
        en: 'Robotic Cutter',
        es: 'Cortadora robótica'
      },
      description: {
        en: 'AI-powered cutting robot for precision operations in narrow spaces',
        es: 'Robot de corte con IA para operaciones de precisión en espacios reducidos',
        pt: 'Robô de corte com IA para operações de precisão em espaços reduzidos'
      },
      images: [
        './img/Jasper_X.png'
      ]
    },
    {
      id: 'robotic-stations',
      title: {
        en: 'Robotic Stations',
        es: 'Estaciones Robóticas',
        pt: 'Estações Robóticas'
      },
      description: {
        en: 'Complete turn-key welding solutions for complex applications',
        es: 'Soluciones llave en mano para aplicaciones complejas de soldadura',
        pt: 'Soluções chave na mão para aplicações complexas de soldagem'
      },
      images: [
        '/img/track_type.webp',
        '/img/cantilever.png',
        '/img/gantry.png'
      ]
    },
    {
      id: 'custom-cells',
      title: {
        en: 'Custom Cells',
        es: 'Celdas Personalizadas',
        pt: 'Células Personalizadas'
      },
      description: {
        en: 'Fully customized welding cells designed for your specific needs',
        es: 'Celdas de soldadura completamente personalizadas para sus necesidades específicas',
        pt: 'Células de soldagem completamente personalizadas para suas necessidades específicas'
      },
      images: [
        '/img/cell1.png',
        '/img/cell2.png',
        '/img/cell7.png',
        '/img/cell5.png'
      ]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.5
        },
        y: 60,
        opacity: 0
      });

      gsap.from('.category-card-wrapper', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.5
        },
        y: 80,
        opacity: 0,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-50/50 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-red-600 text-xl font-semibold tracking-wide uppercase px-6 py-2 border border-red-200 rounded-full bg-red-50">
              {language === 'en' ? 'Solutions' : language === 'es' ? 'Soluciones' : 'Soluções'}
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-10 tracking-tight"
          >
            <span className="text-black">
              {language === 'en' ? 'Choose Your' : language === 'es' ? 'Elija Su' : 'Escolha Sua'}
            </span>
            <span className="block mt-4 text-red-600">
              {language === 'en' ? 'Solution' : language === 'es' ? 'Solución' : 'Solução'}
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            {language === 'en'
              ? 'Select the category that best fits your production needs'
              : language === 'es'
              ? 'Seleccione la categoría que mejor se adapte a sus necesidades de producción'
              : 'Selecione a categoria que melhor se adapta às suas necessidades de produção'}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {categories.map((category, index) => (
            <div key={category.id} className="category-card-wrapper">
              <CategoryCard
                category={category}
                language={language}
                index={index}
                isActive={activeCategory === category.id}
                onClick={() => onCategorySelect(category.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
