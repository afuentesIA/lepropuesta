import { useEffect, useRef, useState } from 'react';
import { 
  Book, Video, FileText, Code, Download, ExternalLink, 
  Search, ChevronRight, Play, ArrowRight, Filter, X,
  Sparkles, Zap, TrendingUp, Globe, Camera, Cpu,
  Construction, Clock
} from 'lucide-react';
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
  const heroRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Animaciones más sofisticadas
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación hero con efecto parallax más fuerte
      gsap.fromTo(heroRef.current,
        { 
          y: -100, 
          opacity: 0,
          scale: 1.1 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: 'power4.out'
        }
      );

      // Animación de partículas flotantes en hero
      const particles = gsap.utils.toArray('.floating-particle');
      particles.forEach((particle: any, i) => {
        gsap.to(particle, {
          y: `+=${Math.random() * 100 - 50}`,
          x: `+=${Math.random() * 100 - 50}`,
          rotation: Math.random() * 360,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2
        });
      });

      // Animación del título con efecto de máquina de escribir
      const titleChars = gsap.utils.toArray('.title-char');
      gsap.from(titleChars, {
        y: 100,
        opacity: 0,
        rotationX: -90,
        stagger: 0.05,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.5
      });

      // Animación de elementos decorativos rojos
      gsap.utils.toArray('.red-element').forEach((element: any, index) => {
        gsap.to(element, {
          scale: 1.1,
          opacity: 0.8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.5
        });
      });

      // Animación de olas en el hero
      const waves = gsap.utils.toArray('.wave');
      waves.forEach((wave: any, index) => {
        gsap.to(wave, {
          x: '+=100',
          duration: 15 + index * 5,
          repeat: -1,
          ease: 'none'
        });
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { 
      id: 'documentation',
      name: 'Documentation', 
      icon: <Book className="w-7 h-7 text-white" />, 
      count: 'Soon', 
      color: 'from-red-500 to-red-600',
      gradient: 'bg-gradient-to-br from-red-500 to-red-600',
      accent: 'bg-red-100 text-red-600',
      iconColor: 'text-white'
    },
    { 
      id: 'videos',
      name: 'Videos', 
      icon: <Video className="w-7 h-7 text-white" />, 
      count: 'Soon', 
      color: 'from-red-400 to-red-500',
      gradient: 'bg-gradient-to-br from-red-400 to-red-500',
      accent: 'bg-red-50 text-red-500',
      iconColor: 'text-white'
    },
    { 
      id: 'guides',
      name: 'Guides', 
      icon: <FileText className="w-7 h-7 text-red-600" />, 
      count: 'Soon', 
      color: 'from-gray-100 to-white',
      gradient: 'bg-gradient-to-br from-gray-100 to-white',
      accent: 'bg-gray-100 text-gray-700 border border-gray-200',
      iconColor: 'text-red-600'
    },
    { 
      id: 'tutorials',
      name: 'Tutorials', 
      icon: <Code className="w-7 h-7 text-red-600" />, 
      count: 'Soon', 
      color: 'from-gray-100 to-white',
      gradient: 'bg-gradient-to-br from-gray-100 to-white',
      accent: 'bg-gray-100 text-gray-700 border border-gray-200',
      iconColor: 'text-red-600'
    },
  ];

  const filters = [
    { id: 'all', label: 'All', color: 'red' },
    { id: 'documentation', label: 'Documentation', color: 'red' },
    { id: 'videos', label: 'Videos', color: 'red' },
    { id: 'guides', label: 'Guides', color: 'gray' },
    { id: 'tutorials', label: 'Tutorials', color: 'gray' },
  ];

  return (
    <div ref={pageRef} className="min-h-screen overflow-hidden">
      {/* Fondo de imagen que cubre toda la pantalla */}
      <div className="fixed inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Imagen de fondo principal */}
          <img
            src="/img/resorces.png"
            alt="AI Background"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay para oscurecer la imagen y que el texto sea legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
          
          {/* Elementos decorativos adicionales */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-blue-500/10" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        </div>
      </div>

      {/* Hero Section con fondo dinámico */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        {/* Patrones decorativos animados */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Olas animadas */}
          <div className="absolute bottom-0 left-0 right-0 h-40">
            <div className="wave absolute bottom-0 left-0 w-[200%] h-full bg-gradient-to-t from-red-500/20 to-transparent rounded-[50%]" />
            <div className="wave absolute bottom-0 left-0 w-[200%] h-32 bg-gradient-to-t from-red-500/10 to-transparent rounded-[50%]" />
          </div>
          
          {/* Partículas flotantes */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className={`floating-particle absolute ${i % 2 === 0 ? 'bg-red-500/30' : 'bg-white/20'} rounded-full`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Elementos geométricos rojos animados */}
          <div className="red-element absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />
          <div className="red-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        </div>

        {/* Contenido Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge animado */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full mb-8 animate-pulse">
            <Construction className="w-4 h-4 text-red-300" />
            <span className="text-sm font-medium text-red-200">
              Coming Soon
            </span>
          </div>

          {/* Título con efecto de máquina de escribir */}
          <h1 className="mb-6">
            <span className="block text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
              {Array.from('Resources').map((char, index) => (
                <span 
                  key={index} 
                  className="title-char inline-block"
                  style={{ 
                    color: index % 3 === 0 ? '#ffffff' : 
                           index % 3 === 1 ? '#fecaca' : '#fef2f2'
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-white mb-6">
              Coming Soon
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            We're working hard to bring you amazing content. Our resources library is currently under construction.
          </p>

          {/* Stats animadas */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
                <Zap className="w-6 h-6 text-red-400 mr-2" />
                50+
              </div>
              <div className="text-gray-300">Resources Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
                <Globe className="w-6 h-6 text-red-400 mr-2" />
                3+
              </div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-400 mr-2" />
                2026
              </div>
              <div className="text-gray-300">Launch Date</div>
            </div>
          </div>

          {/* Search Bar - Disabled pero manteniendo diseño */}
          <div className="relative max-w-2xl mx-auto opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-3xl blur-xl" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-300" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Resources coming soon..."
                disabled
                className="w-full pl-12 pr-12 py-5 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-gray-300 cursor-not-allowed text-lg"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </div>
      </div>

      {/* Contenido principal con fondo blanco que se superpone */}
      <div className="relative z-10 bg-gradient-to-b from-white via-white to-gray-50 pt-20">
        {/* Categories Section - Coming Soon Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-card group cursor-pointer transform-gpu opacity-90 hover:opacity-100"
              >
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200">
                  {/* Efecto de luz dinámica */}
                  <div className="card-light absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:via-red-500/5 group-hover:to-red-500/10 transition-all duration-300 pointer-events-none" />
                  
                  {/* Background gradient */}
                  <div className={`absolute inset-0 ${category.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                  
                  {/* Glass effect */}
                  <div className="relative">
                    <div className={`category-icon inline-flex items-center justify-center w-16 h-16 ${category.gradient} rounded-2xl mb-6 shadow-lg ${category.iconColor}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Construction className="w-4 h-4 text-red-500" />
                        <p className="text-sm font-medium text-red-500 uppercase tracking-wide">{category.count}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Under Construction State */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Coming Soon
              </h2>
              <p className="text-gray-600">
                We're preparing amazing content for you
              </p>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-400" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  disabled
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap opacity-50 cursor-not-allowed ${
                    activeFilter === filter.id
                      ? filter.color === 'red'
                        ? 'bg-red-600 text-white shadow-lg shadow-red-200'
                        : 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Under Construction Banner */}
          <div className="text-center py-20">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                <Construction className="w-16 h-16 text-red-500 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Clock className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              We're Working On It!
            </h3>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Our team is creating high-quality documentation, video tutorials, and guides to help you get the most out of your AI camera.
            </p>
            
            <p className="text-gray-500 max-w-md mx-auto mb-12">
              We appreciate your patience. Check back soon for updates!
            </p>

            {/* Progress bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full animate-pulse" style={{ width: '65%' }} />
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Estimated completion: 2026
              </p>
            </div>

            {/* Notification signup */}
            <div className="max-w-md mx-auto mt-12">
              <p className="text-gray-700 mb-4 font-medium">Get notified when we launch:</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-all hover:scale-105">
                  Notify Me
                </button>
              </div>
            </div>
          </div>

          {/* Preview Cards - Coming Soon */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[1, 2].map((_, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 opacity-75">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">Preview Coming Soon</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full">
                        ⭐ Coming Soon
                      </span>
                      <span className="px-3 py-1.5 bg-gray-500 text-white text-sm font-semibold rounded-full">
                        Preview
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <span className="font-medium capitalize">Category</span>
                      <span>•</span>
                      <span>Coming Soon</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Sample Resource Title
                    </h3>
                    
                    <p className="text-gray-500 leading-relaxed mb-6">
                      This is a preview of what's coming. Our team is working on creating comprehensive content for you.
                    </p>

                    <div className="flex gap-3">
                      <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-300 text-gray-500 font-semibold rounded-xl cursor-not-allowed">
                        <Download className="w-4 h-4" />
                        <span>Coming Soon</span>
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-300 text-gray-400 font-semibold rounded-xl cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Cpu className="w-16 h-16 mx-auto mb-6 text-red-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers and companies using our AI camera technology to build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Start Free Trial</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
                <span>Schedule a Demo</span>
              </button>
            </div>
          </div>
        </div>

      
        
      </div>
    </div>
  );
};
