// components/roboticStations/RoboticStationsSection.tsx
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, ChevronRight, Zap, Move3d, Shield, Layers, Maximize2, Gauge, Target, ArrowRight } from 'lucide-react';
import { Language } from '../../hooks/useLanguage';

// Registrar el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface RoboticStationsSectionProps {
  language: Language;
}

export const RoboticStationsSection = ({ language }: RoboticStationsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeStation, setActiveStation] = useState(0);

  const roboticStations = [
    {
      id: 'track-type',
      name: language === 'en' ? 'Track Type' : language === 'es' ? 'Tipo Pista' : 'Tipo Pista',
      model: 'TrackWeld Station',
      specs: 'ServoAxis',
      description: language === 'en'
        ? 'Precision track-based welding station with servo axis control for consistent, high-quality welds on long structures and assemblies.'
        : language === 'es'
        ? 'Estación de soldadura de precisión basada en pista con control de eje servo para soldaduras consistentes y de alta calidad en estructuras y ensamblajes largos.'
        : 'Estação de soldagem de precisão baseada em trilho com controle de eixo servo para soldas consistentes e de alta qualidade em estruturas e montagens longas.',
      image: './img/track_type.webp',
      features: [
        { icon: <Move3d className="w-5 h-5" />, label: language === 'en' ? 'Servo Control' : language === 'es' ? 'Control Servo' : 'Controle Servo' },
        { icon: <Zap className="w-5 h-5" />, label: language === 'en' ? 'High Precision' : language === 'es' ? 'Alta Precisión' : 'Alta Precisão' },
        { icon: <Shield className="w-5 h-5" />, label: language === 'en' ? 'Industrial Grade' : language === 'es' ? 'Grado Industrial' : 'Grau Industrial' }
      ],
      longDescription: language === 'en'
        ? 'The TrackWeld Station combines precision engineering with advanced servo control to deliver exceptional welding quality on long structures. Perfect for shipbuilding, rail car manufacturing, and large-scale fabrication.'
        : language === 'es'
        ? 'La estación TrackWeld combina ingeniería de precisión con control servo avanzado para ofrecer calidad de soldadura excepcional en estructuras largas. Perfecta para construcción naval, fabricación de vagones de ferrocarril y fabricación a gran escala.'
        : 'A estação TrackWeld combina engenharia de precisão com controle servo avançado para oferecer qualidade de soldagem excepcional em estruturas longas. Perfeita para construção naval, fabricação de vagões ferroviários e fabricação em grande escala.',
      applications: [
        language === 'en' ? 'Shipbuilding' : language === 'es' ? 'Construcción Naval' : 'Construção Naval',
        language === 'en' ? 'Rail Industry' : language === 'es' ? 'Industria Ferroviaria' : 'Indústria Ferroviária',
        language === 'en' ? 'Structural Steel' : language === 'es' ? 'Acero Estructural' : 'Aço Estrutural'
      ]
    },
    {
      id: 'track-cantilever',
      name: language === 'en' ? 'Track Cantilever Type' : language === 'es' ? 'Tipo Pista Voladiza' : 'Tipo Trilho em Balanço',
      model: 'CantileverWeld',
      specs: '9-Axis Control',
      description: language === 'en'
        ? 'Versatile cantilever design with nine-axis control provides exceptional reach and flexibility for complex welding applications.'
        : language === 'es'
        ? 'Diseño voladizo versátil con control de nueve ejes proporciona alcance excepcional y flexibilidad para aplicaciones de soldadura complejas.'
        : 'Design em balanço versátil com controle de nove eixos proporciona alcance excepcional e flexibilidade para aplicações complexas de soldagem.',
      image: './img/cantilever.png',
      features: [
        { icon: <Move3d className="w-5 h-5" />, label: language === 'en' ? '9-Axis Control' : language === 'es' ? 'Control 9 Ejes' : 'Controle 9 Eixos' },
        { icon: <Zap className="w-5 h-5" />, label: language === 'en' ? 'Extended Reach' : language === 'es' ? 'Alcance Extendido' : 'Alcance Estendido' },
        { icon: <Shield className="w-5 h-5" />, label: language === 'en' ? 'Versatile' : language === 'es' ? 'Versátil' : 'Versátil' }
      ],
      longDescription: language === 'en'
        ? 'The CantileverWeld system revolutionizes complex welding with its 9-axis control architecture. The cantilever design provides unmatched access to difficult geometries while maintaining precision and stability.'
        : language === 'es'
        ? 'El sistema CantileverWeld revoluciona la soldadura compleja con su arquitectura de control de 9 ejes. El diseño voladizo proporciona acceso sin igual a geometrías difíciles mientras mantiene precisión y estabilidad.'
        : 'O sistema CantileverWeld revoluciona a soldagem complexa com sua arquitetura de controle de 9 eixos. O design em balanço fornece acesso incomparável a geometrias difíceis, mantendo precisão e estabilidade.',
      applications: [
        language === 'en' ? 'Heavy Equipment' : language === 'es' ? 'Equipo Pesado' : 'Equipamento Pesado',
        language === 'en' ? 'Pressure Vessels' : language === 'es' ? 'Recipientes a Presión' : 'Vasos de Pressão',
        language === 'en' ? 'Complex Assemblies' : language === 'es' ? 'Ensamble Complejos' : 'Montagens Complexas'
      ]
    },
    {
      id: 'gantry-type',
      name: language === 'en' ? 'Gantry Type' : language === 'es' ? 'Tipo Pórtico' : 'Tipo Pórtico',
      model: 'GantryRail DualWeld',
      specs: language === 'en' ? 'Dual Welding' : language === 'es' ? 'Soldadura Dual' : 'Soldagem Dupla',
      description: language === 'en'
        ? 'Heavy-duty gantry system with dual welding capability for large-scale industrial projects requiring maximum coverage and productivity.'
        : language === 'es'
        ? 'Sistema de pórtico de servicio pesado con capacidad de soldadura dual para proyectos industriales a gran escala que requieren máxima cobertura y productividad.'
        : 'Sistema de pórtico de serviço pesado com capacidade de soldagem dupla para projetos industriais de grande escala que requerem máxima cobertura e produtividade.',
      image: './img/gantry.png',
      features: [
        { icon: <Move3d className="w-5 h-5" />, label: language === 'en' ? 'Dual Welding' : language === 'es' ? 'Soldadura Dual' : 'Soldagem Dupla' },
        { icon: <Zap className="w-5 h-5" />, label: language === 'en' ? 'Heavy Duty' : language === 'es' ? 'Servicio Pesado' : 'Serviço Pesado' },
        { icon: <Shield className="w-5 h-5" />, label: language === 'en' ? 'Max Coverage' : language === 'es' ? 'Máxima Cobertura' : 'Cobertura Máxima' }
      ],
      longDescription: language === 'en'
        ? 'The GantryRail DualWeld system sets new standards for large-scale welding productivity. With dual welding heads and massive coverage area, it\'s the ultimate solution for shipbuilding, bridge construction, and heavy industry.'
        : language === 'es'
        ? 'El sistema GantryRail DualWeld establece nuevos estándares para la productividad de soldadura a gran escala. Con cabezales de soldadura duales y área de cobertura masiva, es la solución definitiva para construcción naval, construcción de puentes e industria pesada.'
        : 'O sistema GantryRail DualWeld estabelece novos padrões para produtividade de soldagem em grande escala. Com cabeçotes de soldagem duplos e área de cobertura massiva, é a solução definitiva para construção naval, construção de pontes e indústria pesada.',
      applications: [
        language === 'en' ? 'Shipbuilding' : language === 'es' ? 'Construcción Naval' : 'Construção Naval',
        language === 'en' ? 'Bridge Construction' : language === 'es' ? 'Construcción de Puentes' : 'Construção de Pontes',
        language === 'en' ? 'Heavy Industry' : language === 'es' ? 'Industria Pesada' : 'Indústria Pesada'
      ]
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animación solo para el título al hacer scroll
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

      // Animación solo para el selector al hacer scroll
      gsap.from('.station-selector', {
        scrollTrigger: {
          trigger: '.station-selector',
          start: 'top 85%',
          end: 'top 45%',
          scrub: 0.5
        },
        y: 40,
        opacity: 0
      });

      // Animación solo para el contenido al hacer scroll
      gsap.from('.station-content-wrapper', {
        scrollTrigger: {
          trigger: '.station-content-wrapper',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 0.5
        },
        y: 50,
        opacity: 0
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []); // Sin dependencia de activeStation

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Fondo con efectos sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Título */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-red-400 text-xl font-semibold tracking-wide uppercase px-6 py-2 border border-red-500/20 rounded-full bg-red-500/5 backdrop-blur-sm">
              {language === 'en' ? 'Robotic Welding Stations' : language === 'es' ? 'Estaciones Robóticas' : 'Estações Robóticas'}
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-10 tracking-tight">
            {language === 'en' ? 'Precision Engineering' : language === 'es' ? 'Ingeniería de Precisión' : 'Engenharia de Precisão'}
          </h2>
          <p className="text-2xl sm:text-3xl text-white/80 leading-relaxed font-light max-w-4xl mx-auto">
            {language === 'en'
              ? 'Advanced robotic welding solutions for complex industrial applications'
              : language === 'es'
              ? 'Soluciones avanzadas de soldadura robótica para aplicaciones industriales complejas'
              : 'Soluções avançadas de soldagem robótica para aplicações industriais complexas'}
          </p>
        </div>

        {/* Selector de estaciones - Siempre visible */}
        <div className="station-selector grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {roboticStations.map((station, index) => (
            <button
              key={station.id}
              onClick={() => setActiveStation(index)}
              className={`group relative p-8 rounded-2xl transition-all duration-700 ${
                activeStation === index
                  ? 'bg-gradient-to-br from-red-600/20 to-red-600/5 border-2 border-red-500/50 scale-105'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex flex-col items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  activeStation === index
                    ? 'bg-red-500 text-white'
                    : 'bg-white/10 text-white/60 group-hover:bg-white/20'
                }`}>
                  {index === 0 && <Layers className="w-6 h-6" />}
                  {index === 1 && <Maximize2 className="w-6 h-6" />}
                  {index === 2 && <Gauge className="w-6 h-6" />}
                </div>
                <div className="text-left">
                  <div className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                    activeStation === index ? 'text-white' : 'text-white/60'
                  }`}>
                    {station.name}
                  </div>
                  <div className={`text-sm transition-colors duration-500 ${
                    activeStation === index ? 'text-red-400' : 'text-white/40'
                  }`}>
                    {station.model}
                  </div>
                </div>
              </div>
              
              {activeStation === index && (
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Contenido de la estación seleccionada - Siempre visible cuando se selecciona */}
        <div className="station-content-wrapper">
          {roboticStations.map((station, index) => (
            <div
              key={station.id}
              className={`transition-all duration-700 ${
                activeStation === index
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible h-0 overflow-hidden'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Imagen */}
                <div className="relative">
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                    <img
                      src={station.image}
                      alt={station.model}
                      className="w-full h-full object-contain p-8"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
                          `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                            <rect width="400" height="400" fill="#1a1a1a"/>
                            <rect x="50" y="50" width="300" height="300" fill="#333" rx="20"/>
                            <text x="200" y="200" font-family="Arial" font-size="24" fill="#fff" text-anchor="middle">${station.model}</text>
                            <text x="200" y="240" font-family="Arial" font-size="16" fill="#999" text-anchor="middle">${station.specs}</text>
                          </svg>`
                        );
                      }}
                    />
                    
                    {/* Especificaciones en la imagen */}
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/10">
                        <Cpu className="w-4 h-4 text-red-400" />
                        <span className="text-white text-sm font-medium">{station.specs}</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 right-6">
                      <div className="px-4 py-2 bg-red-600/90 backdrop-blur-xl rounded-full">
                        <span className="text-white text-sm font-semibold">{station.model}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Efectos decorativos */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                </div>

                {/* Información */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-red-400" />
                      </div>
                      <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">
                        {language === 'en' ? 'Featured Station' : language === 'es' ? 'Estación Destacada' : 'Estação em Destaque'}
                      </span>
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-4 tracking-tight">
                      {station.model}
                    </h3>
                    <p className="text-xl text-white/80 leading-relaxed">
                      {station.longDescription}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {station.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="text-red-400 mb-2">{feature.icon}</div>
                        <div className="text-white/90 text-sm font-medium">{feature.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-4">
                      {language === 'en' ? 'Applications' : language === 'es' ? 'Aplicaciones' : 'Aplicações'}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {station.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/5 rounded-full text-white/80 text-sm border border-white/10"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(220,38,38,0.3)] group"
                    >
                      <span>
                        {language === 'en' ? 'Request Information' : language === 'es' ? 'Solicitar Información' : 'Solicitar Informação'}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Separador decorativo */}
        <div className="mt-32 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};