// ProductsPage.tsx (refactored)
import { useEffect, useRef, useState } from 'react';
import { Camera, Cpu, Eye, Zap, Shield, Move3d, ChevronRight, ChevronLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Language } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import { ProductModal } from '../components/ProductModal';
import { CategoriesSection } from '../components/categories/CategoriesSection';
import { CTASection } from '../components/CTASection';
import { MobileWeldingSection } from '../components/mobileWelding/MobileWeldingSection';
import { RoboticStationsSection } from '../components/roboticStations/RoboticStationsSection';
import { CustomCellsSection } from '../components/customCells/CustomCellsSection';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

interface ProductsPageProps {
  language: Language;
}

export const ProductsPage = ({ language }: ProductsPageProps) => {
  const t = translations[language];
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // HERO SECTION - EXACTLY AS ORIGINAL - DO NOT MODIFY
  useEffect(() => {
    if (!canvasRef.current || !heroRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const heroSection = heroRef.current;

    if (!ctx) return;

    const frameCount = 121;
    const imagePath = '/img/secuencia/Agile Mover White_';

    console.log("Iniciando carga de secuencia de imágenes...");

    const images: HTMLImageElement[] = new Array(frameCount);
    let loadedCount = 0;
    let animationInitialized = false;

    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      console.log("Canvas size set to:", width, "x", height);
    };

    setCanvasSize();

    const handleResize = () => {
      setCanvasSize();
      if (loadedCount > 0 && images[0]) {
        renderFrame(0);
      }
    };

    window.addEventListener('resize', handleResize);

    const renderFrame = (frameIndex: number) => {
      if (!ctx || !canvas || canvas.width === 0 || canvas.height === 0) return;

      const index = Math.min(frameCount - 1, Math.max(0, Math.floor(frameIndex)));
      const img = images[index];

      if (!img || !img.complete) {
        console.warn(`Imagen ${index} no disponible para renderizar`);
        return;
      }

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = img.height * (canvas.width / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = img.width * (canvas.height / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const loadImages = () => {
      console.log("Iniciando precarga de imágenes...");

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(5, '0');
        img.src = `${imagePath}${frameNumber}.png`;

        console.log(`Cargando imagen ${i}: ${img.src}`);

        img.onload = () => {
          loadedCount++;
          images[i] = img;

          console.log(`Imagen ${i} cargada (${loadedCount}/${frameCount})`);

          if (i === 0) {
            renderFrame(0);
          }

          if (loadedCount === frameCount && !animationInitialized) {
            console.log("Todas las imágenes cargadas. Configurando animación...");
            setImagesLoaded(true);
            setupScrollAnimation();
          }
        };

        img.onerror = () => {
          console.error(`Error cargando imagen ${i}: ${img.src}`);
          loadedCount++;

          const placeholder = new Image();
          placeholder.onload = () => {
            images[i] = placeholder;
            if (loadedCount === frameCount && !animationInitialized) {
              console.log("Todas las imágenes procesadas. Configurando animación...");
              setImagesLoaded(true);
              setupScrollAnimation();
            }
          };

          const svgText = `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
            <rect width="100%" height="100%" fill="#1a1a1a"/>
            <rect x="100" y="100" width="1720" height="880" fill="#333" rx="20"/>
            <text x="960" y="540" font-family="Arial" font-size="48" fill="#fff" text-anchor="middle" dy=".3em">Frame ${i}</text>
            <text x="960" y="620" font-family="Arial" font-size="24" fill="#999" text-anchor="middle">${img.src}</text>
          </svg>`;

          placeholder.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgText);
        };
      }
    };

    const setupScrollAnimation = () => {
      if (animationInitialized) return;
      animationInitialized = true;

      console.log("Configurando ScrollTrigger...");

      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === heroSection || trigger.vars?.trigger === heroSection) {
          console.log("Matando ScrollTrigger anterior");
          trigger.kill();
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: () => `+=${window.innerHeight * 1.5}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const targetFrame = progress * (frameCount - 1);
            renderFrame(targetFrame);
          },
          onEnter: () => {
            console.log("ScrollTrigger: Entrando en la sección hero");
            renderFrame(0);
          },
          onEnterBack: () => {
            console.log("ScrollTrigger: Volviendo a la sección hero");
            renderFrame(frameCount - 1);
          },
          onLeave: () => {
            console.log("ScrollTrigger: Saliendo de la sección hero");
          },
          onRefresh: () => {
            console.log("ScrollTrigger: Refrescando");
            setCanvasSize();
            if (images[0]) {
              renderFrame(0);
            }
          }
        },
        defaults: {
          ease: 'none'
        }
      });

      tl.to({}, {
        duration: 1,
        onComplete: () => {
          console.log("Animación de scroll configurada correctamente");
        }
      });

      console.log("ScrollTrigger configurado exitosamente");
    };

    loadImages();

    const refreshTimer = setTimeout(() => {
      if (ScrollTrigger) {
        ScrollTrigger.refresh();
        console.log("ScrollTrigger refrescado");
      }
    }, 1000);

    return () => {
      console.log("Limpiando animación...");
      clearTimeout(refreshTimer);
      window.removeEventListener('resize', handleResize);

      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === heroSection || trigger.vars?.trigger === heroSection) {
          console.log("Limpiando ScrollTrigger");
          trigger.kill();
        }
      });

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Smooth scroll to content
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const renderContent = () => {
    if (!activeCategory) return null;

    return (
      <div className="transition-opacity duration-500">
        {activeCategory === 'mobile-welding' && <MobileWeldingSection language={language} />}
        {activeCategory === 'robotic-stations' && <RoboticStationsSection language={language} />}
        {activeCategory === 'custom-cells' && <CustomCellsSection language={language} />}
      </div>
    );
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-black">
      {/* HERO SECTION - EXACTLY AS ORIGINAL */}
      <section
        ref={heroRef}
        className="relative w-screen h-screen overflow-hidden bg-black"
        style={{ minHeight: '100vh' }}
      >
        <div className="absolute inset-0 w-screen h-screen overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 w-screen h-screen"
              style={{ display: 'block' }}
            />
            {!imagesLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-white text-lg">Cargando secuencia de imágenes...</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>

          <div className="relative z-10 h-full flex items-center justify-center">
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
                href="#categories"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-red-600 to-red-500 text-white text-xl font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_80px_rgba(220,38,38,0.4)]"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {language === 'en' ? 'Explore Solutions' : language === 'es' ? 'Explorar Soluciones' : 'Explorar Soluções'}
                <ChevronRight className="w-6 h-6" />
              </a>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-col items-center">
                  <span className="text-white/60 text-sm mb-2">Scroll down</span>
                  <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div id="categories">
        <CategoriesSection
          language={language}
          activeCategory={activeCategory}
          onCategorySelect={handleCategorySelect}
        />
      </div>

      {/* Dynamic Content - Solo se renderiza cuando hay una categoría activa */}
      {activeCategory && (
        <div ref={contentRef} className="min-h-screen">
          {renderContent()}
        </div>
      )}

      {/* CTA Section */}
      <CTASection language={language} />
    </div>
  );
};