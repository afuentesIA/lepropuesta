import { useEffect, useRef, useState } from 'react';
import { Camera, Cpu, Eye, Zap, Shield, Move3d, ChevronRight, ChevronLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Language } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { ProductModal } from '../components/ProductModal';

gsap.registerPlugin(ScrollTrigger);

interface ProductsPageProps {
  language: Language;
}

export const ProductsPage = ({ language }: ProductsPageProps) => {
  const t = translations[language];
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlides, setCurrentSlides] = useState<number[]>([0, 0]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 'maverick-x',
      name: 'Maverick X',
      tagline: language === 'en' ? 'The future of performance' : language === 'es' ? 'El futuro del rendimiento' : 'O futuro do desempenho',
      price: language === 'en' ? 'Contact for pricing' : language === 'es' ? 'Contactar para precios' : 'Contatar para preços',
      images: [
        './img/maverick_x/1.png',
        './img/maverick_x/2.png',
        './img/maverick_x/3.png',
        './img/maverick_x/4.png',
      ],
      description: language === 'en'
        ? 'Enhanced vertical lifting capabilities combined with unmatched welding precision. The Maverick X represents the pinnacle of automated welding technology.'
        : language === 'es'
        ? 'Capacidades mejoradas de elevación vertical combinadas con precisión de soldadura inigualable. El Maverick X representa la cumbre de la tecnología de soldadura automatizada.'
        : 'Capacidades aprimoradas de elevação vertical combinadas com precisão de soldagem incomparável. O Maverick X representa o auge da tecnologia de soldagem automatizada.',
      specs: [
        {
          label: language === 'en' ? 'Total Power' : language === 'es' ? 'Potencia Total' : 'Potência Total',
          value: '37KVA',
          icon: <Zap className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Robot Arm Range' : language === 'es' ? 'Alcance del Brazo' : 'Alcance do Braço',
          value: '2010mm',
          icon: <Move3d className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Repeatability' : language === 'es' ? 'Repetibilidad' : 'Repetibilidade',
          value: '±0.05mm',
          icon: <Eye className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Power Supply' : language === 'es' ? 'Fuente de Alimentación' : 'Fonte de Alimentação',
          value: '3x380V±10%',
          icon: <Cpu className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Battery' : language === 'es' ? 'Batería' : 'Bateria',
          value: '48V / 73ah',
          icon: <Zap className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Weight' : language === 'es' ? 'Peso' : 'Peso',
          value: '2200kg',
          icon: <Shield className="w-5 h-5" />
        },
      ],
      features: [
        {
          title: language === 'en' ? 'Enhanced Vertical Lifting' : language === 'es' ? 'Elevación Vertical Mejorada' : 'Elevação Vertical Aprimorada',
          description: language === 'en'
            ? '700mm lifting range for complex welding applications at various heights'
            : language === 'es'
            ? 'Rango de elevación de 700mm para aplicaciones de soldadura complejas a diversas alturas'
            : 'Alcance de elevação de 700mm para aplicações complexas de soldagem em várias alturas'
        },
        {
          title: language === 'en' ? 'Unmatched Welding Precision' : language === 'es' ? 'Precisión de Soldadura Inigualable' : 'Precisão de Soldagem Incomparável',
          description: language === 'en'
            ? '±0.05mm repeatability ensures consistent high-quality welds in demanding industrial environments'
            : language === 'es'
            ? 'Repetibilidad de ±0.05mm garantiza soldaduras de alta calidad consistentes en entornos industriales exigentes'
            : 'Repetibilidade de ±0,05mm garante soldas de alta qualidade consistentes em ambientes industriais exigentes'
        },
        {
          title: language === 'en' ? 'Industrial Grade Power' : language === 'es' ? 'Potencia de Grado Industrial' : 'Potência de Grau Industrial',
          description: language === 'en'
            ? '37KVA total power with robust 2200kg construction for continuous 24/7 operation'
            : language === 'es'
            ? '37KVA de potencia total con construcción robusta de 2200kg para operación continua 24/7'
            : '37KVA de potência total com construção robusta de 2200kg para operação contínua 24/7'
        },
        {
          title: language === 'en' ? 'Extended Mobility' : language === 'es' ? 'Movilidad Extendida' : 'Mobilidade Estendida',
          description: language === 'en'
            ? '10km range with 2km/h travel speed for flexible operation across large workspaces'
            : language === 'es'
            ? 'Alcance de 10km con velocidad de desplazamiento de 2km/h para operación flexible en grandes espacios de trabajo'
            : 'Alcance de 10km com velocidade de deslocamento de 2km/h para operação flexível em grandes espaços de trabalho'
        }
      ],
      extendedSpecs: {
        [language === 'en' ? 'Mechanical Specifications' : language === 'es' ? 'Especificaciones Mecánicas' : 'Especificações Mecânicas']: [
          { label: language === 'en' ? 'Dimensions' : language === 'es' ? 'Dimensiones' : 'Dimensões', value: '3200×1200×2500mm' },
          { label: language === 'en' ? 'Weight' : language === 'es' ? 'Peso' : 'Peso', value: '2200kg' },
          { label: language === 'en' ? 'Lifting Range' : language === 'es' ? 'Rango de Elevación' : 'Faixa de Elevação', value: '700mm' },
          { label: language === 'en' ? 'Travel Speed' : language === 'es' ? 'Velocidad de Desplazamiento' : 'Velocidade de Deslocamento', value: '2km/h' },
          { label: language === 'en' ? 'Operating Range' : language === 'es' ? 'Rango de Operación' : 'Alcance de Operação', value: '10km' },
        ],
        [language === 'en' ? 'Electrical Specifications' : language === 'es' ? 'Especificaciones Eléctricas' : 'Especificações Elétricas']: [
          { label: language === 'en' ? 'Total Power' : language === 'es' ? 'Potencia Total' : 'Potência Total', value: '37KVA' },
          { label: language === 'en' ? 'Power Supply' : language === 'es' ? 'Fuente de Alimentación' : 'Fonte de Alimentação', value: '3x380V±10%' },
          { label: language === 'en' ? 'Battery Voltage' : language === 'es' ? 'Voltaje de Batería' : 'Voltagem da Bateria', value: '48V' },
          { label: language === 'en' ? 'Battery Capacity' : language === 'es' ? 'Capacidad de Batería' : 'Capacidade da Bateria', value: '73ah' },
        ],
        [language === 'en' ? 'Robot Arm Specifications' : language === 'es' ? 'Especificaciones del Brazo Robótico' : 'Especificações do Braço Robótico']: [
          { label: language === 'en' ? 'Arm Range' : language === 'es' ? 'Alcance del Brazo' : 'Alcance do Braço', value: '2010mm' },
          { label: language === 'en' ? 'Repeatability' : language === 'es' ? 'Repetibilidad' : 'Repetibilidade', value: '±0.05mm' },
          { label: language === 'en' ? 'Payload Capacity' : language === 'es' ? 'Capacidad de Carga' : 'Capacidade de Carga', value: '20kg' },
          { label: language === 'en' ? 'Degrees of Freedom' : language === 'es' ? 'Grados de Libertad' : 'Graus de Liberdade', value: '6' },
        ],
        [language === 'en' ? 'Environmental' : language === 'es' ? 'Ambiental' : 'Ambiental']: [
          { label: language === 'en' ? 'Operating Temperature' : language === 'es' ? 'Temperatura de Operación' : 'Temperatura de Operação', value: '0°C to +45°C' },
          { label: language === 'en' ? 'Relative Humidity' : language === 'es' ? 'Humedad Relativa' : 'Umidade Relativa', value: '≤90%' },
          { label: language === 'en' ? 'IP Rating' : language === 'es' ? 'Clasificación IP' : 'Classificação IP', value: 'IP54' },
        ]
      }
    },
    {
      id: 'maverick-s',
      name: 'Maverick S',
      tagline: language === 'en' ? 'Professional grade. Redefined.' : language === 'es' ? 'Grado profesional. Redefinido.' : 'Grau profesional. Redefinido.',
      price: language === 'en' ? 'Contact for pricing' : language === 'es' ? 'Contactar para precios' : 'Contatar para preços',
      images: [
        './img/maverick_s/1.png',
        './img/maverick_s/2.png',
        './img/maverick_s/3.png',
        './img/maverick_s/4.png',
      ],
      description: language === 'en'
        ? 'Compact, powerful, and intelligent welding robot for tight spaces. Equipped with advanced AI, 3D vision technology, and pre-installed welding programs for precise automation without programming.'
        : language === 'es'
        ? 'Robot de soldadura compacto, potente e inteligente para espacios reducidos. Equipado con IA avanzada, tecnología de visión 3D y programas de soldadura preinstalados para automatización precisa sin programación.'
        : 'Robô de soldagem compacto, potente e inteligente para espaços reduzidos. Equipado com IA avançada, tecnologia de visão 3D e programas de soldagem pré-instalados para automação precisa sem programação.',
      specs: [
        {
          label: language === 'en' ? 'Total Power' : language === 'es' ? 'Potencia Total' : 'Potência Total',
          value: '30KVA',
          icon: <Zap className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Robot Arm Range' : language === 'es' ? 'Alcance del Brazo' : 'Alcance do Braço',
          value: '2010mm',
          icon: <Move3d className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Repeatability' : language === 'es' ? 'Repetibilidad' : 'Repetibilidade',
          value: '±0.05mm',
          icon: <Eye className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Scanning Frame Rate' : language === 'es' ? 'Tasa de Escaneo' : 'Taxa de Varredura',
          value: '2000 FPS',
          icon: <Camera className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Travel Speed' : language === 'es' ? 'Velocidad de Desplazamiento' : 'Velocidade de Deslocamento',
          value: '2.5km/h',
          icon: <Move3d className="w-5 h-5" />
        },
        {
          label: language === 'en' ? 'Weight' : language === 'es' ? 'Peso' : 'Peso',
          value: '1650kg',
          icon: <Shield className="w-5 h-5" />
        },
      ],
      features: [
        {
          title: language === 'en' ? 'Compact Design for Tight Spaces' : language === 'es' ? 'Diseño Compacto para Espacios Reducidos' : 'Design Compacto para Espaços Reduzidos',
          description: language === 'en'
            ? 'Optimized 2500×900×1800mm dimensions with three-wheel drive for exceptional maneuverability in confined areas'
            : language === 'es'
            ? 'Dimensiones optimizadas de 2500×900×1800mm con tracción en tres ruedas para una maniobrabilidad excepcional en áreas confinadas'
            : 'Dimensões otimizadas de 2500×900×1800mm com tração nas três rodas para excepcional manobrabilidade em áreas confinadas'
        },
        {
          title: language === 'en' ? 'Advanced AI Vision System' : language === 'es' ? 'Sistema de Visión IA Avanzado' : 'Sistema de Visão IA Avançado',
          description: language === 'en'
            ? '2000 frames/second scanning with 3D vision technology and pre-installed welding programs for immediate operation'
            : language === 'es'
            ? 'Escaneo de 2000 cuadros/segundo con tecnología de visión 3D y programas de soldadura preinstalados para operación inmediata'
            : 'Varredura de 2000 quadros/segundo com tecnologia de visão 3D e programas de soldagem pré-instalados para operação imediata'
        },
        {
          title: language === 'en' ? 'Wireless Remote Control' : language === 'es' ? 'Control Remoto Inalámbrico' : 'Controle Remoto Sem Fio',
          description: language === 'en'
            ? 'Complete wireless operation with intuitive remote control for flexible positioning and operation'
            : language === 'es'
            ? 'Operación completamente inalámbrica con control remoto intuitivo para posicionamiento y operación flexibles'
            : 'Operação completamente sem fio com controle remoto intuitivo para posicionamento e operação flexíveis'
        },
        {
          title: language === 'en' ? 'Environmental Adaptability' : language === 'es' ? 'Adaptabilidad Ambiental' : 'Adaptabilidade Ambiental',
          description: language === 'en'
            ? 'Operates in 0°C to +45°C temperatures with ≤90% humidity, suitable for various industrial environments'
            : language === 'es'
            ? 'Opera en temperaturas de 0°C a +45°C con ≤90% de humedad, adecuado para diversos entornos industriales'
            : 'Opera em temperaturas de 0°C a +45°C com ≤90% de umidade, adequado para vários ambientes industriais'
        }
      ],
      extendedSpecs: {
        [language === 'en' ? 'Mechanical Specifications' : language === 'es' ? 'Especificaciones Mecánicas' : 'Especificações Mecânicas']: [
          { label: language === 'en' ? 'Dimensions' : language === 'es' ? 'Dimensiones' : 'Dimensões', value: '2500×900×1800mm' },
          { label: language === 'en' ? 'Weight' : language === 'es' ? 'Peso' : 'Peso', value: '1650kg' },
          { label: language === 'en' ? 'Drive System' : language === 'es' ? 'Sistema de Tracción' : 'Sistema de Tração', value: language === 'en' ? 'Three-wheel drive' : language === 'es' ? 'Tracción en tres ruedas' : 'Tração nas três rodas' },
          { label: language === 'en' ? 'Travel Speed' : language === 'es' ? 'Velocidad de Desplazamiento' : 'Velocidade de Deslocamento', value: '2.5km/h' },
          { label: language === 'en' ? 'Turning Radius' : language === 'es' ? 'Radio de Giro' : 'Raio de Giro', value: '0mm' },
        ],
        [language === 'en' ? 'Electrical Specifications' : language === 'es' ? 'Especificaciones Eléctricas' : 'Especificações Elétricas']: [
          { label: language === 'en' ? 'Total Power' : language === 'es' ? 'Potencia Total' : 'Potência Total', value: '30KVA' },
          { label: language === 'en' ? 'Power Supply' : language === 'es' ? 'Fuente de Alimentación' : 'Fonte de Alimentação', value: '3x380V±10%' },
          { label: language === 'en' ? 'Battery Voltage' : language === 'es' ? 'Voltaje de Batería' : 'Voltagem da Bateria', value: '48V' },
          { label: language === 'en' ? 'Charging Time' : language === 'es' ? 'Tiempo de Carga' : 'Tempo de Carregamento', value: '4-6h' },
        ],
        [language === 'en' ? 'Vision System' : language === 'es' ? 'Sistema de Visión' : 'Sistema de Visão']: [
          { label: language === 'en' ? 'Scanning Frame Rate' : language === 'es' ? 'Tasa de Escaneo' : 'Taxa de Varredura', value: '2000 FPS' },
          { label: language === 'en' ? 'Vision Technology' : language === 'es' ? 'Tecnología de Visión' : 'Tecnologia de Visão', value: language === 'en' ? '3D Vision' : language === 'es' ? 'Visión 3D' : 'Visão 3D' },
          { label: language === 'en' ? 'AI Processing' : language === 'es' ? 'Procesamiento IA' : 'Processamento IA', value: language === 'en' ? 'Real-time' : language === 'es' ? 'Tiempo real' : 'Tempo real' },
          { label: language === 'en' ? 'Pre-installed Programs' : language === 'es' ? 'Programas Preinstalados' : 'Programas Pré-instalados', value: language === 'en' ? 'Yes' : language === 'es' ? 'Sí' : 'Sim' },
        ],
        [language === 'en' ? 'Robot Arm Specifications' : language === 'es' ? 'Especificaciones del Brazo Robótico' : 'Especificações do Braço Robótico']: [
          { label: language === 'en' ? 'Arm Range' : language === 'es' ? 'Alcance del Brazo' : 'Alcance do Braço', value: '2010mm' },
          { label: language === 'en' ? 'Repeatability' : language === 'es' ? 'Repetibilidad' : 'Repetibilidade', value: '±0.05mm' },
          { label: language === 'en' ? 'Payload Capacity' : language === 'es' ? 'Capacidad de Carga' : 'Capacidade de Carga', value: '20kg' },
          { label: language === 'en' ? 'Degrees of Freedom' : language === 'es' ? 'Grados de Libertad' : 'Graus de Liberdade', value: '6' },
        ],
        [language === 'en' ? 'Control & Connectivity' : language === 'es' ? 'Control y Conectividad' : 'Controle e Conectividade']: [
          { label: language === 'en' ? 'Remote Control' : language === 'es' ? 'Control Remoto' : 'Controle Remoto', value: language === 'en' ? 'Wireless' : language === 'es' ? 'Inalámbrico' : 'Sem fio' },
          { label: language === 'en' ? 'Control Range' : language === 'es' ? 'Rango de Control' : 'Alcance de Controle', value: '100m' },
          { label: language === 'en' ? 'Interface' : language === 'es' ? 'Interfaz' : 'Interface', value: language === 'en' ? 'Touch screen' : language === 'es' ? 'Pantalla táctil' : 'Tela sensível ao toque' },
        ],
        [language === 'en' ? 'Environmental' : language === 'es' ? 'Ambiental' : 'Ambiental']: [
          { label: language === 'en' ? 'Operating Temperature' : language === 'es' ? 'Temperatura de Operación' : 'Temperatura de Operação', value: '0°C to +45°C' },
          { label: language === 'en' ? 'Relative Humidity' : language === 'es' ? 'Humedad Relativa' : 'Umidade Relativa', value: '≤90%' },
          { label: language === 'en' ? 'IP Rating' : language === 'es' ? 'Clasificación IP' : 'Classificação IP', value: 'IP54' },
        ]
      }
    }
  ];

  // Animación del Hero separada
  useEffect(() => {
    if (videoRef.current && heroRef.current) {
      const video = videoRef.current;
      const heroSection = heroRef.current;

      // Pausar el video inicialmente y configurarlo
      video.pause();
      video.currentTime = 0;

      // Crear un contenedor virtual para el scroll
      const scrollDistance = window.innerHeight * 2; // 2 pantallas de scroll

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            if (video.readyState >= 2) {
              // Mapear el progreso del scroll (0-1) al tiempo del video (0-duration)
              const progress = self.progress;
              const videoDuration = video.duration;
              video.currentTime = progress * videoDuration;
            }
          },
        },
      });

      // Asegurarse de que el video esté listo
      const handleLoadedData = () => {
        video.currentTime = 0;
      };

      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        heroTimeline.scrollTrigger?.kill();
      };
    }
  }, []);

  // Animaciones del contenido (separadas del hero)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación más rápida para las especificaciones técnicas
      gsap.utils.toArray('.spec-card').forEach((card, index) => {
        gsap.from(card as Element, {
          scrollTrigger: {
            trigger: card as Element,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 0.5,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // Animaciones más rápidas para las secciones
      gsap.utils.toArray('.product-section').forEach((section, index) => {
        gsap.from(section as Element, {
          scrollTrigger: {
            trigger: section as Element,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1,
          },
          y: 80,
          opacity: 0,
          scale: 0.98,
          duration: 1.2,
          ease: 'power2.out'
        });
      });

      gsap.utils.toArray('.feature-item').forEach((item, index) => {
        gsap.from(item as Element, {
          scrollTrigger: {
            trigger: item as Element,
            start: 'top 90%',
            end: 'top 50%',
            scrub: 0.7,
          },
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = (productIndex: number) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[productIndex] = (newSlides[productIndex] + 1) % products[productIndex].images.length;
      return newSlides;
    });
  };

  const prevSlide = (productIndex: number) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[productIndex] = (newSlides[productIndex] - 1 + products[productIndex].images.length) % products[productIndex].images.length;
      return newSlides;
    });
  };

  // Auto-rotate slides
  useEffect(() => {
    const intervals = products.map((_, index) => {
      return setInterval(() => {
        nextSlide(index);
      }, 4000); // Cambia cada 4 segundos
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-black">
      {/* Hero Section con video controlado por scroll */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source
                src="./vid/Agile_Move_ White.webm"                
                type="video/webm"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
              <div className="mb-6">
                <span className="text-red-400 text-xl font-semibold tracking-wide uppercase">
                  {language === 'en' ? 'Products' : language === 'es' ? 'Productos' : 'Produtos'}
                </span>
              </div>
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold text-white tracking-tighter leading-[0.85] mb-10">
                {language === 'en' ? 'Innovation' : language === 'es' ? 'Innovación' : 'Inovação'}
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto mb-16">
                {language === 'en'
                  ? 'AI-powered welding robots for industrial automation. Serving Canada, United States, Mexico and Brazil.'
                  : language === 'es'
                  ? 'Robots de soldadura con IA para automatización industrial. Sirviendo a Canadá, Estados Unidos, México y Brasil.'
                  : 'Robôs de soldagem com IA para automação industrial. Atendendo Canadá, Estados Unidos, México e Brasil.'}
              </p>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-red-500 text-white text-xl font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_80px_rgba(220,38,38,0.4)]"
              >
                {language === 'en' ? 'Explore Products' : language === 'es' ? 'Explorar Productos' : 'Explorar Produtos'}
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal con sus propias animaciones */}
      <div ref={contentRef} id="products" className="bg-white pt-20">
        {products.map((product, productIndex) => (
          <section
            key={product.id}
            className={`product-section py-32 ${productIndex % 2 === 0 ? 'bg-white' : 'bg-black'}`}
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                <div className={productIndex % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="space-y-10">
                    <div className="inline-block">
                      <span className={`text-lg font-semibold tracking-wide uppercase ${productIndex % 2 === 0 ? 'text-red-600' : 'text-red-400'}`}>
                        {language === 'en' ? 'Featured' : language === 'es' ? 'Destacado' : 'Destacado'}
                      </span>
                    </div>
                    <h2 className={`text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none ${productIndex % 2 === 0 ? 'text-black' : 'text-white'}`}>
                      {product.name}
                    </h2>
                    <p className={`text-2xl sm:text-3xl leading-relaxed font-light ${productIndex % 2 === 0 ? 'text-gray-600' : 'text-white/80'}`}>
                      {product.tagline}
                    </p>
                    <div className={`text-4xl sm:text-5xl font-bold ${productIndex % 2 === 0 ? 'text-black' : 'text-white'}`}>
                      {product.price}
                    </div>
                    <p className={`text-xl leading-relaxed ${productIndex % 2 === 0 ? 'text-gray-600' : 'text-white/70'}`}>
                      {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                      <button className={`inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 group ${
                        productIndex % 2 === 0
                          ? 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400 hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)]'
                          : 'bg-white text-black hover:bg-gray-100 hover:shadow-2xl'
                      }`}>
                        <span>{t.products.buyNow}</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        onClick={() => setSelectedProduct(productIndex)}
                        className={`px-10 py-5 border-2 text-lg font-semibold rounded-full transition-all duration-500 hover:scale-105 ${
                        productIndex % 2 === 0
                          ? 'border-black text-black hover:bg-black hover:text-white'
                          : 'border-white text-white hover:bg-white hover:text-black'
                      }`}>
                        {t.products.viewDetails}
                      </button>
                    </div>
                  </div>
                </div>
                <div className={productIndex % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                    {/* Carrusel de imágenes */}
                    <div className="relative w-full h-full">
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                            index === currentSlides[productIndex]
                              ? 'opacity-100 scale-100 translate-x-0'
                              : index < currentSlides[productIndex]
                              ? 'opacity-0 scale-95 -translate-x-full'
                              : 'opacity-0 scale-95 translate-x-full'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Indicadores mejorados */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlides(prev => {
                            const newSlides = [...prev];
                            newSlides[productIndex] = index;
                            return newSlides;
                          })}
                          className={`group relative transition-all duration-500 ${
                            index === currentSlides[productIndex]
                              ? 'scale-125'
                              : 'scale-100'
                          }`}
                        >
                          <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                            index === currentSlides[productIndex]
                              ? productIndex % 2 === 0
                                ? 'bg-red-600 w-8'
                                : 'bg-red-400 w-8'
                              : productIndex % 2 === 0
                              ? 'bg-gray-300 hover:bg-gray-400'
                              : 'bg-white/30 hover:bg-white/50'
                          }`} />
                          
                          {/* Efecto de pulso para el indicador activo */}
                          {index === currentSlides[productIndex] && (
                            <div className={`absolute inset-0 rounded-full animate-ping ${
                              productIndex % 2 === 0 ? 'bg-red-600' : 'bg-red-400'
                            }`} />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Flechas de navegación en los bordes (solo aparecen en hover) */}
                    <div className="absolute inset-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => prevSlide(productIndex)}
                        className="w-1/4 h-full flex items-center justify-start pl-6 hover:bg-gradient-to-r from-black/10 to-transparent transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          productIndex % 2 === 0 
                            ? 'bg-white/80 text-black hover:bg-white' 
                            : 'bg-black/80 text-white hover:bg-black'
                        }`}>
                          <ChevronLeft className="w-6 h-6" />
                        </div>
                      </button>
                      
                      <button
                        onClick={() => nextSlide(productIndex)}
                        className="w-1/4 h-full flex items-center justify-end pr-6 hover:bg-gradient-to-l from-black/10 to-transparent transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          productIndex % 2 === 0 
                            ? 'bg-white/80 text-black hover:bg-white' 
                            : 'bg-black/80 text-white hover:bg-black'
                        }`}>
                          <ChevronRight className="w-6 h-6" />
                        </div>
                      </button>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="space-y-24">
                <div>
                  <h3 className={`text-5xl sm:text-6xl font-bold mb-16 tracking-tight ${productIndex % 2 === 0 ? 'text-black' : 'text-white'}`}>
                    {language === 'en' ? 'Technical Specifications' : language === 'es' ? 'Especificaciones Técnicas' : 'Especificações Técnicas'}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.specs.map((spec, index) => (
                      <div
                        key={index}
                        className={`spec-card group rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${
                          productIndex % 2 === 0
                            ? 'bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl border border-gray-100'
                            : 'bg-white/5 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                          productIndex % 2 === 0
                            ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                            : 'bg-white/10 text-white'
                        }`}>
                          {spec.icon}
                        </div>
                        <div className={`text-sm mb-2 ${productIndex % 2 === 0 ? 'text-gray-500' : 'text-white/60'}`}>
                          {spec.label}
                        </div>
                        <div className={`text-2xl font-bold ${productIndex % 2 === 0 ? 'text-black' : 'text-white'}`}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className={`text-5xl sm:text-6xl font-bold mb-16 tracking-tight ${productIndex % 2 === 0 ? 'text-black' : 'text-white'}`}>
                    {language === 'en' ? 'Key Features' : language === 'es' ? 'Características Clave' : 'Características Principais'}
                  </h3>
                  <div className="space-y-12">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`feature-item pb-12 ${
                          index < product.features.length - 1
                            ? productIndex % 2 === 0
                              ? 'border-b border-gray-200'
                              : 'border-b border-white/10'
                            : ''
                        }`}
                      >
                        <h4 className={`text-3xl font-bold mb-4 tracking-tight ${productIndex % 2 === 0 ? 'text-black' : 'text-white'}`}>
                          {feature.title}
                        </h4>
                        <p className={`text-xl leading-relaxed ${productIndex % 2 === 0 ? 'text-gray-600' : 'text-white/70'}`}>
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-black mb-10 tracking-tight">
            {language === 'en' ? 'Ready to transform your welding operations?' : language === 'es' ? '¿Listo para transformar sus operaciones de soldadura?' : 'Pronto para transformar suas operações de soldagem?'}
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-600 max-w-4xl mx-auto mb-16 font-light leading-relaxed">
            {language === 'en'
              ? 'Contact our team to learn how our AI welding robots can revolutionize your manufacturing process'
              : language === 'es'
              ? 'Contacte a nuestro equipo para descubrir cómo nuestros robots de soldadura con IA pueden revolucionar su proceso de fabricación'
              : 'Entre em contato com nossa equipe para descobrir como nossos robôs de soldagem com IA podem revolucionar seu processo de fabricação'}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-red-500 text-white text-xl font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_80px_rgba(220,38,38,0.4)] group"
            >
              <span>{language === 'en' ? 'Contact Sales' : language === 'es' ? 'Contactar Ventas' : 'Contatar Vendas'}</span>
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

      {selectedProduct !== null && (
        <ProductModal
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
          product={products[selectedProduct]}
          language={language}
        />
      )}
    </div>
  );
};