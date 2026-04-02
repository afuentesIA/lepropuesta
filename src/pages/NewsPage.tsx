import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, Play, ChevronRight, ExternalLink, Clock, ChevronLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Language } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

gsap.registerPlugin(ScrollTrigger);

interface NewsPageProps {
  language: Language;
}

export const NewsPage = ({ language }: NewsPageProps) => {
  const t = translations[language];
  const pageRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Detectar si es iOS y desktop
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Hero Data
  const heroData = {
    title: language === 'en' ? 'News' : language === 'es' ? 'Noticias' : 'Notícias',
    subtitle: language === 'en' ? 'Latest Updates & Events' : language === 'es' ? 'Últimas Actualizaciones y Eventos' : 'Últimas Atualizações e Eventos',
    description: language === 'en' 
      ? "Stay informed about our latest achievements, upcoming events, and groundbreaking innovations in AI vision technology."
      : language === 'es'
      ? "Manténgase informado sobre nuestros últimos logros, próximos eventos e innovaciones revolucionarias en tecnología de visión IA."
      : "Mantenha-se informado sobre nossas últimas conquistas, próximos eventos e inovações revolucionárias em tecnologia de visão IA.",
    backgroundImage: './img/hero2.png'
  };

  // Precargar la imagen del hero
  useEffect(() => {
    const img = new Image();
    img.src = heroData.backgroundImage;
    img.onload = () => setHeroImageLoaded(true);
    img.onerror = () => {
      console.log('Error loading hero image, usando fallback');
      setHeroImageLoaded(true);
    };
  }, []);

  // Past Events Data (Eventos en los que ya estuvimos)
  const pastEvents = [
    {
      id: 0,
      category: language === 'en' ? 'MANUFACTURING' : language === 'es' ? 'MANUFACTURA' : 'MANUFATURA',
      title: language === 'en' ? 'FABTECH 2025' : language === 'es' ? 'FABTECH 2025' : 'FABTECH 2025',
      description: language === 'en'
        ? "Successfully showcased our latest robotic vision systems to industry leaders from across North America."
        : language === 'es'
        ? "Exhibimos con éxito nuestros últimos sistemas de visión robótica a líderes de la industria de toda América del Norte."
        : "Apresentamos com sucesso nossos últimos sistemas de visão robótica para líderes do setor de toda a América do Norte.",
      location: 'Chicago, IL',
      date: 'September 2025',
      image: './img/Banner.png',
      highlights: [
        language === 'en' ? '500+ Industry Visits' : language === 'es' ? '500+ Visitas Industriales' : '500+ Visitas da Indústria',
        language === 'en' ? 'Live Demos' : language === 'es' ? 'Demostraciones en Vivo' : 'Demonstrações ao Vivo',
        language === 'en' ? 'New Partnerships' : language === 'es' ? 'Nuevas Asociaciones' : 'Novas Parcerias'
      ]
    },
    {
      id: 1,
      category: language === 'en' ? 'TECHNOLOGY' : language === 'es' ? 'TECNOLOGÍA' : 'TECNOLOGIA',
      title: language === 'en' ? 'Essen Technology Fair' : language === 'es' ? 'Feria Tecnológica Essen' : 'Feira Tecnológica Essen',
      description: language === 'en'
        ? "Successfully participated in Germany's premier industrial technology fair, showcasing our latest AI vision systems."
        : language === 'es'
        ? "Participamos con éxito en la principal feria tecnológica industrial de Alemania, mostrando nuestros últimos sistemas de visión IA."
        : "Participamos com sucesso na principal feira tecnológica industrial da Alemanha, apresentando nossos mais recentes sistemas de visão IA.",
      location: 'Essen, Germany',
      date: 'November 2024',
      image: './img/essen.jpg',
      highlights: [
        language === 'en' ? 'European Market' : language === 'es' ? 'Mercado Europeo' : 'Mercado Europeu',
        language === 'en' ? 'Tech Innovation' : language === 'es' ? 'Innovación Tecnológica' : 'Inovação Tecnológica'
      ]
    },
    {
      id: 2,
      category: language === 'en' ? 'ENERGY INDUSTRY' : language === 'es' ? 'INDUSTRIA ENERGÉTICA' : 'INDÚSTRIA DE ENERGIA',
      title: language === 'en' ? 'Energy Show Calgary' : language === 'es' ? 'Exposición Energía Calgary' : 'Show de Energia Calgary',
      description: language === 'en'
        ? "Demonstrated AI vision solutions for energy sector applications including pipeline inspection and safety monitoring."
        : language === 'es'
        ? "Demostramos soluciones de visión IA para aplicaciones del sector energético incluyendo inspección de tuberías y monitoreo de seguridad."
        : "Demonstramos soluções de visão IA para aplicações do setor de energia incluindo inspeção de dutos e monitoramento de segurança.",
      location: 'Calgary, Canada',
      date: 'June 2024',
      image: './img/energy.jpg',
      highlights: [
        language === 'en' ? 'Safety Innovations' : language === 'es' ? 'Innovaciones en Seguridad' : 'Inovações em Segurança',
        language === 'en' ? 'Industry Recognition' : language === 'es' ? 'Reconocimiento de la Industria' : 'Reconhecimento da Indústria'
      ]
    },
    {
      id: 3,
      category: language === 'en' ? 'INDUSTRIAL' : language === 'es' ? 'INDUSTRIAL' : 'INDUSTRIAL',
      title: language === 'en' ? 'Abu Dhabi Industrial' : language === 'es' ? 'Industrial Abu Dhabi' : 'Industrial Abu Dhabi',
      description: language === 'en'
        ? "Expanded our presence in Middle Eastern markets with cutting-edge vision systems for industrial automation."
        : language === 'es'
        ? "Expandimos nuestra presencia en mercados de Medio Oriente con sistemas de visión de vanguardia para automatización industrial."
        : "Expandimos nossa presença nos mercados do Oriente Médio com sistemas de visão de ponta para automação industrial.",
      location: 'Abu Dhabi, UAE',
      date: 'March 2024',
      image: './img/abudabi.jpg',
      highlights: [
        language === 'en' ? 'Market Expansion' : language === 'es' ? 'Expansión de Mercado' : 'Expansão de Mercado',
        language === 'en' ? 'Regional Partners' : language === 'es' ? 'Socios Regionales' : 'Parceiros Regionais'
      ]
    }
  ];

  // Crear un array infinito para el carrusel (duplicamos muchas veces)
  // Cada elemento es un objeto con el evento y un ID único para evitar problemas de key
  const createInfiniteArray = () => {
    const infiniteArray = [];
    // Duplicamos 20 veces para tener un carrusel realmente infinito
    for (let i = 0; i < 20; i++) {
      pastEvents.forEach(event => {
        infiniteArray.push({
          ...event,
          uniqueId: `${event.id}-${i}`
        });
      });
    }
    return infiniteArray;
  };

  const infiniteEvents = createInfiniteArray();
  const eventsPerView = 3;
  
  // Obtener los eventos visibles actualmente
  const getVisibleEvents = () => {
    const start = currentIndex;
    return infiniteEvents.slice(start, start + eventsPerView);
  };

  const visibleEvents = getVisibleEvents();

  // Función para ir al siguiente grupo
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  // Función para ir al grupo anterior
  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  // Auto-play
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (!isDesktop) return;
    
    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, 5000);
  };

  useEffect(() => {
    if (isDesktop) {
      // Comenzamos desde el índice 0
      setCurrentIndex(0);
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isDesktop]);

  // Calcular qué eventos originales se están mostrando para los indicadores
  const getOriginalIndices = () => {
    const visibleOriginalIds = visibleEvents.map(event => event.id);
    return visibleOriginalIds;
  };

  // Upcoming Events Data (Donde estaremos)
  const upcomingEvents = [
    {
      category: language === 'en' ? 'MANUFACTURING' : language === 'es' ? 'MANUFACTURA' : 'MANUFATURA',
      title: language === 'en' ? 'FABTECH Vegas 2026' : language === 'es' ? 'FABTECH Vegas 2026' : 'FABTECH Vegas 2026',
      description: language === 'en'
        ? "Join us in Las Vegas for North America's largest manufacturing event featuring groundbreaking AI vision solutions."
        : language === 'es'
        ? "Únase a nosotros en Las Vegas para el evento de manufactura más grande de América del Norte con soluciones de visión IA revolucionarias."
        : "Junte-se a nós em Las Vegas para o maior evento de manufatura da América do Norte com soluções revolucionárias de visão IA.",
      location: 'Las Vegas, NV',
      date: 'December 2026',
      image: './img/vegas.png',
      status: 'confirmed',
      booth: 'A205',
      registerLink: '#'
    },
    {
      category: language === 'en' ? 'MANUFACTURING' : language === 'es' ? 'MANUFACTURA' : 'MANUFATURA',
      title: language === 'en' ? 'FABTECH Canada 2026' : language === 'es' ? 'FABTECH Canadá 2026' : 'FABTECH Canadá 2026',
      description: language === 'en'
        ? "Join us in Toronto for Canada's premier manufacturing exhibition featuring advanced welding automation."
        : language === 'es'
        ? "Únase a nosotros en Toronto para la principal exposición de manufactura de Canadá con automatización de soldadura avanzada."
        : "Junte-se a nós em Toronto para a principal exposição de manufatura do Canadá com automação de soldagem avançada.",
      location: 'Canada',
      date: 'Coming Soon',
      image: './img/canada.webp',
      status: 'planned',
      booth: 'B15063',
      registerLink: '#'
    },
    {
      category: language === 'en' ? 'VIRTUAL' : language === 'es' ? 'VIRTUAL' : 'VIRTUAL',
      title: language === 'en' ? 'AI Vision Summit' : language === 'es' ? 'Cumbre de Visión IA' : 'Cúpula de Visão IA',
      description: language === 'en'
        ? "Participate in our virtual summit featuring live demonstrations and expert panels on AI vision technology."
        : language === 'es'
        ? "Participe en nuestra cumbre virtual con demostraciones en vivo y paneles de expertos sobre tecnología de visión IA."
        : "Participe da nossa cúpula virtual com demonstrações ao vivo e painéis de especialistas sobre tecnologia de visão IA.",
      location: 'Online',
      date: 'December 2024',
      image: './img/live.png',
      status: 'confirmed',
      registerLink: '#'
    }
  ];

  // Live Stream Data
  const liveStreamData = {
    title: language === 'en' ? 'Live From Our Lab' : language === 'es' ? 'En Vivo Desde Nuestro Laboratorio' : 'Ao Vivo do Nosso Laboratório',
    description: language === 'en'
      ? "Watch real-time demonstrations of our latest AI vision technology and interact with our engineering team."
      : language === 'es'
      ? "Vea demostraciones en tiempo real de nuestra última tecnología de visión IA e interactúe con nuestro equipo de ingeniería."
      : "Assista a demonstrações em tempo real de nossa mais recente tecnologia de visão IA e interaja com nossa equipe de engenharia.",
    currentStream: {
      title: language === 'en' ? 'AI Vision Technology Demo' : language === 'es' ? 'Demostración de Tecnología de Visión IA' : 'Demonstração de Tecnologia de Visão IA',
      description: language === 'en'
        ? "Live demonstration of our latest object detection and recognition systems in real-world scenarios."
        : language === 'es'
        ? "Demostración en vivo de nuestros últimos sistemas de detección y reconocimiento de objetos en escenarios del mundo real."
        : "Demonstração ao vivo de nossos últimos sistemas de detecção e reconhecimento de objetos em cenários do mundo real.",
      viewers: '1,247',
      duration: language === 'en' ? 'Live since 2:00 PM EST' : language === 'es' ? 'En vivo desde 2:00 PM EST' : 'Ao vivo desde 14:00 EST'
    },
    upcomingStreams: [
      {
        time: '10:00 AM',
        title: language === 'en' ? 'Robotics Integration' : language === 'es' ? 'Integración Robótica' : 'Integração Robótica',
        description: language === 'en' ? 'Live from R&D Lab' : language === 'es' ? 'En vivo desde Laboratorio I+D' : 'Ao vivo do Laboratório P&D'
      },
      {
        time: '2:00 PM',
        title: language === 'en' ? 'Case Study: Manufacturing' : language === 'es' ? 'Caso de Estudio: Manufactura' : 'Estudo de Caso: Manufatura',
        description: language === 'en' ? 'Success stories presentation' : language === 'es' ? 'Presentación de casos de éxito' : 'Apresentação de casos de sucesso'
      },
      {
        time: '4:30 PM',
        title: language === 'en' ? 'Q&A with Engineers' : language === 'es' ? 'Preguntas y Respuestas' : 'Perguntas e Respostas',
        description: language === 'en' ? 'Live technical session' : language === 'es' ? 'Sesión técnica en vivo' : 'Sessão técnica ao vivo'
      }
    ]
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.2,
      });

      gsap.from('.hero-subtitle', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.4,
      });

      gsap.from('.hero-description', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.6,
      });

      // Animación para las tarjetas
      gsap.utils.toArray('.event-card, .live-card, .upcoming-card').forEach((card) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 90%',
            end: 'top 70%',
            scrub: 0.2,
            once: true
          },
          y: 30,
          opacity: 0,
          duration: 0.5
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: '#1a1a1a',
          }}
        >
          <img
            src={heroData.backgroundImage}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              heroImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              objectPosition: 'center',
              filter: 'brightness(0.7)'
            }}
            onLoad={() => setHeroImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="hero-title">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none mb-8">
              {heroData.title}
            </h1>
          </div>
          
          <div className="hero-subtitle">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white/90 mb-8 leading-tight">
              {heroData.subtitle}
            </h2>
          </div>

          <div className="hero-description">
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {heroData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Section - Carrusel infinito REAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-5xl sm:text-6xl font-bold text-black text-center mb-16">
            {language === 'en' ? 'Where We\'ve Been' : language === 'es' ? 'Donde Hemos Estado' : 'Onde Estivemos'}
          </h2>
          
          {isDesktop ? (
            // Carrusel infinito real para desktop
            <div className="relative px-12">
              <div className="overflow-hidden">
                <div 
                  ref={carouselInnerRef}
                  className="flex transition-transform duration-700 ease-out gap-8"
                >
                  {visibleEvents.map((event) => (
                    <div key={event.uniqueId} className="w-1/3 flex-shrink-0 event-card group cursor-pointer">
                      <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-stone-200 h-full">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-black/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                              {event.category}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full shadow-md">
                              {language === 'en' ? 'COMPLETED' : language === 'es' ? 'COMPLETADO' : 'CONCLUÍDO'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
                          <p className="text-stone-600 mb-4 leading-relaxed line-clamp-2">{event.description}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-red-600 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.highlights.map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          <button className="w-full py-3 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300">
                            {language === 'en' ? 'View Recap' : language === 'es' ? 'Ver Resumen' : 'Ver Resumo'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botones de navegación */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-stone-200 flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-stone-600" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-stone-200 flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6 text-stone-600" />
              </button>

              {/* Indicadores - muestran qué combinación de eventos se está viendo */}
              <div className="flex justify-center gap-2 mt-8">
                {pastEvents.map((_, index) => {
                  const visibleIds = getOriginalIndices();
                  const isActive = visibleIds.includes(index);
                  return (
                    <button
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-8 bg-red-600'
                          : 'w-2 bg-stone-300 hover:bg-stone-400'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            // Grid normal para móvil
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <div key={index} className="event-card group cursor-pointer">
                  <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-stone-200">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full shadow-md">
                          {language === 'en' ? 'COMPLETED' : language === 'es' ? 'COMPLETADO' : 'CONCLUÍDO'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
                      <p className="text-stone-600 mb-4 leading-relaxed">{event.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-red-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <button className="w-full py-3 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300">
                        {language === 'en' ? 'View Recap' : language === 'es' ? 'Ver Resumen' : 'Ver Resumo'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-5xl sm:text-6xl font-bold text-black text-center mb-16">
            {language === 'en' ? 'Where We\'ll Be' : language === 'es' ? 'Donde Estaremos' : 'Onde Estaremos'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-2 border-stone-200 hover:border-red-500">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
                          `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
                            <rect width="400" height="300" fill="#f5f5f4"/>
                            <rect x="50" y="50" width="300" height="200" fill="#e7e5e4" rx="10"/>
                            <text x="200" y="170" font-family="Arial" font-size="20" fill="#444" text-anchor="middle">${event.title}</text>
                          </svg>`
                        );
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full shadow-md">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-md ${
                        event.status === 'confirmed' 
                          ? 'bg-red-600 text-white' 
                          : 'bg-amber-500 text-white'
                      }`}>
                        {event.status === 'confirmed' 
                          ? (language === 'en' ? 'CONFIRMED' : language === 'es' ? 'CONFIRMADO' : 'CONFIRMADO')
                          : (language === 'en' ? 'PLANNED' : language === 'es' ? 'PLANEADO' : 'PLANEJADO')
                        }
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
                    <p className="text-stone-600 mb-4 leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-red-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-red-600">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      {event.booth && (
                        <div className="flex items-center gap-2 text-sm text-red-600 font-semibold">
                          <span>{language === 'en' ? 'Booth' : language === 'es' ? 'Stand' : 'Estande'}: {event.booth}</span>
                        </div>
                      )}
                    </div>

                    <a
                      href={event.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-all duration-300 text-center"
                    >
                      {language === 'en' ? 'Register Now' : language === 'es' ? 'Registrarse' : 'Registrar-se'}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-5xl sm:text-6xl font-bold text-black text-center mb-16">
            {liveStreamData.title}
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Stream con carátula */}
            <div className="lg:col-span-2">
              <div className="live-card rounded-3xl overflow-hidden bg-stone-50 border border-stone-200 shadow-md">
                <div className="relative aspect-video">
                  <img
                    src="./img/livesoon.jpg"
                    alt="Live Stream Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full shadow-md">
                      {language === 'en' ? 'LIVE NOW' : language === 'es' ? 'EN VIVO' : 'AO VIVO'}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{liveStreamData.currentStream.viewers} {language === 'en' ? 'watching' : language === 'es' ? 'viendo' : 'assistindo'}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{liveStreamData.currentStream.title}</h3>
                  <p className="text-stone-600 mb-6">{liveStreamData.currentStream.description}</p>
                  <div className="flex items-center gap-6 text-red-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{liveStreamData.currentStream.viewers} {language === 'en' ? 'viewers' : language === 'es' ? 'espectadores' : 'espectadores'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{liveStreamData.currentStream.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Upcoming Streams */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black mb-6">
                {language === 'en' ? 'Upcoming Streams' : language === 'es' ? 'Próximas Transmisiones' : 'Próximas Transmissões'}
              </h3>
              
              {liveStreamData.upcomingStreams.map((stream, index) => (
                <div key={index} className="bg-stone-50 rounded-2xl p-6 hover:bg-stone-100 transition-all duration-300 group cursor-pointer border border-stone-200">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                        <div className="text-red-600 font-semibold text-sm text-center">
                          {stream.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black mb-2 group-hover:text-red-600 transition-colors duration-300">
                        {stream.title}
                      </h4>
                      <p className="text-stone-500 text-sm">{stream.description}</p>
                      <button className="mt-3 text-red-600 text-sm font-semibold hover:text-red-700 transition-colors flex items-center gap-1">
                        {language === 'en' ? 'Set reminder' : language === 'es' ? 'Recordatorio' : 'Lembrete'}
                        <Clock className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-stone-600 mb-6">
              {liveStreamData.description}
            </p>
            <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-2xl hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30">
              {language === 'en' ? 'View All Streams' : language === 'es' ? 'Ver Todas las Transmisiones' : 'Ver Todas as Transmissões'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
