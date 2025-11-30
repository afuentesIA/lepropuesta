import { useEffect, useRef } from 'react';
import { Book, Video, FileText, Code, Download, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Language } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

gsap.registerPlugin(ScrollTrigger);

interface ResourcesPageProps {
  language: Language;
}

export const ResourcesPage = ({ language }: ResourcesPageProps) => {
  const t = translations[language];
  const pageRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: t.resources.documentation, icon: <Book className="w-6 h-6" />, count: 45, color: 'bg-blue-500' },
    { name: t.resources.videos, icon: <Video className="w-6 h-6" />, count: 28, color: 'bg-red-500' },
    { name: t.resources.guides, icon: <FileText className="w-6 h-6" />, count: 32, color: 'bg-green-500' },
    { name: t.resources.tutorials, icon: <Code className="w-6 h-6" />, count: 56, color: 'bg-purple-500' },
  ];

  const resources = [
    {
      title: language === 'en' ? 'Quick Start Guide' : language === 'es' ? 'Guía Inicio Rápido' : 'Guia Início Rápido',
      description:
        language === 'en'
          ? 'Get your AI camera up and running in minutes with our comprehensive quick start guide'
          : language === 'es'
          ? 'Pon tu cámara IA en funcionamiento en minutos con nuestra guía completa de inicio rápido'
          : 'Coloque sua câmera IA em funcionamento em minutos com nosso guia completo de início rápido',
      category: 'documentation',
      type: 'PDF',
      size: '2.4 MB',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: language === 'en' ? 'API Reference' : language === 'es' ? 'Referencia API' : 'Referência API',
      description:
        language === 'en'
          ? 'Complete API documentation with code examples and best practices for integration'
          : language === 'es'
          ? 'Documentación API completa con ejemplos de código y mejores prácticas de integración'
          : 'Documentação API completa com exemplos de código e melhores práticas de integração',
      category: 'documentation',
      type: 'Web',
      size: '-',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title:
        language === 'en' ? 'Installation Tutorial' : language === 'es' ? 'Tutorial de Instalación' : 'Tutorial de Instalação',
      description:
        language === 'en'
          ? 'Step-by-step video guide for hardware installation and initial setup'
          : language === 'es'
          ? 'Guía en video paso a paso para instalación de hardware y configuración inicial'
          : 'Guia em vídeo passo a passo para instalação de hardware e configuração inicial',
      category: 'videos',
      type: 'Video',
      size: '45 min',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title:
        language === 'en'
          ? 'Machine Learning Integration'
          : language === 'es'
          ? 'Integración Machine Learning'
          : 'Integração Machine Learning',
      description:
        language === 'en'
          ? 'Learn how to integrate custom ML models with our AI camera platform'
          : language === 'es'
          ? 'Aprende cómo integrar modelos ML personalizados con nuestra plataforma de cámara IA'
          : 'Aprenda como integrar modelos ML personalizados com nossa plataforma de câmera IA',
      category: 'tutorials',
      type: 'Interactive',
      size: '2 hours',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title:
        language === 'en'
          ? 'Production Deployment'
          : language === 'es'
          ? 'Despliegue en Producción'
          : 'Implantação em Produção',
      description:
        language === 'en'
          ? 'Best practices for deploying and scaling AI camera systems in production environments'
          : language === 'es'
          ? 'Mejores prácticas para desplegar y escalar sistemas de cámara IA en entornos de producción'
          : 'Melhores práticas para implantar e escalar sistemas de câmera IA em ambientes de produção',
      category: 'guides',
      type: 'Guide',
      size: '15 pages',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title:
        language === 'en'
          ? 'Troubleshooting Guide'
          : language === 'es'
          ? 'Guía de Solución de Problemas'
          : 'Guia de Solução de Problemas',
      description:
        language === 'en'
          ? 'Common issues and their solutions for quick problem resolution'
          : language === 'es'
          ? 'Problemas comunes y sus soluciones para resolución rápida de problemas'
          : 'Problemas comuns e suas soluções para resolução rápida de problemas',
      category: 'guides',
      type: 'PDF',
      size: '3.1 MB',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.utils.toArray('.category-card').forEach((card, index) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
          y: 60,
          opacity: 0,
          scale: 0.9,
        });
      });

      gsap.utils.toArray('.resource-item').forEach((item) => {
        gsap.from(item as Element, {
          scrollTrigger: {
            trigger: item as Element,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1,
          },
          y: 80,
          opacity: 0,
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="page-title text-center mb-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-black mb-6 tracking-tight">
            {t.resources.title}
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600 max-w-3xl mx-auto font-light">
            {t.resources.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => (
            <div key={index} className="category-card group cursor-pointer">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${category.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{category.name}</h3>
                <p className="text-3xl font-bold text-black">{category.count}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {resources.map((resource, index) => (
            <div key={index} className="resource-item group">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:border-black">
                <div className="grid md:grid-cols-[300px,1fr] gap-0">
                  <div className="relative aspect-video md:aspect-square overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full">
                        {resource.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">{resource.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="font-medium">{resource.category}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6">
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all hover:scale-105">
                        <Download className="w-4 h-4" />
                        <span>{language === 'en' ? 'Download' : language === 'es' ? 'Descargar' : 'Baixar'}</span>
                      </button>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all hover:scale-105">
                        <ExternalLink className="w-4 h-4" />
                        <span>{language === 'en' ? 'View' : language === 'es' ? 'Ver' : 'Ver'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
