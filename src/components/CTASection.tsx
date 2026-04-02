// components/CTASection.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight } from 'lucide-react';
import { Language } from '../hooks/useLanguage';

// Asegúrate de registrar el plugin antes de usarlo
gsap.registerPlugin(ScrollTrigger);

interface CTASectionProps {
  language: Language;
}

export const CTASection = ({ language }: CTASectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.5
        },
        y: 60,
        opacity: 0
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-black mb-10 tracking-tight">
          {language === 'en'
            ? 'Hitting production limits?'
            : language === 'es'
            ? '¿Alcanzando los límites de producción?'
            : 'Atingindo limites de produção?'}
        </h2>
        <p className="text-2xl sm:text-3xl text-gray-600 max-w-4xl mx-auto mb-16 font-light leading-relaxed">
          {language === 'en'
            ? "More labor doesn't guarantee more output. Scale efficiently with automation designed for high-performance welding."
            : language === 'es'
            ? "Más mano de obra no garantiza mayor producción. Escale eficientemente con automatización diseñada para soldadura de alto rendimiento."
            : "Mais mão de obra não garante mais produção. Escale eficientemente com automação projetada para soldagem de alto desempenho."}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-red-500 text-white text-xl font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_80px_rgba(220,38,38,0.4)] group"
          >
            <span>
              {language === 'en' ? 'Contact Sales' : language === 'es' ? 'Contactar Ventas' : 'Contatar Vendas'}
            </span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center px-12 py-6 border-2 border-black text-black text-xl font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-500 hover:scale-105"
          >
            {language === 'en' ? 'Learn More' : language === 'es' ? 'Más Información' : 'Saiba Mais'}
          </a>
        </div>
      </div>
    </section>
  );
};
