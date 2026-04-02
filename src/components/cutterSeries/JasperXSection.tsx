// components/cutterSeries/JasperXSection.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Language } from '../../hooks/useLanguage';

gsap.registerPlugin(ScrollTrigger);

interface JasperXSectionProps {
  language: Language;
}

const t = (language: Language, en: string, es: string, pt: string) =>
  language === 'en' ? en : language === 'es' ? es : pt;

export const JasperXSection = ({ language }: JasperXSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Capacidades actualizadas: eliminadas Vision Calibration, Secondary Blanking, Head Cutting y Groove Nesting
  const capabilities = [
    t(language, 'Deformation Compensation', 'Compensación de Deformación', 'Compensação de Deformação'),
    t(language, 'Groove Editing', 'Edición de Ranuras', 'Edição de Ranhuras'),
    t(language, 'Bend Pipe Cutting', 'Corte de Tubos Curvos', 'Corte de Tubos Curvos'),
    t(language, 'Branch Pipe Cutting', 'Corte de Tubos Derivados', 'Corte de Tubos Derivados'),
    t(language, 'Tapered Pipe Cutting', 'Corte de Tubos Cónicos', 'Corte de Tubos Cônicos'),
    t(language, 'Curved Surface Cutting', 'Corte de Superficies Curvas', 'Corte de Superfícies Curvas'),
    t(language, 'RX Cutting Process', 'Proceso de Corte RX', 'Processo de Corte RX'),
  ];

  const specGroups = [
    {
      group: t(language, 'Basic Parameters', 'Parámetros Básicos', 'Parâmetros Básicos'),
      rows: [
        [t(language, 'Total Power', 'Potencia Total', 'Potência Total'), '30 KVA'],
        [t(language, 'Power Supply', 'Alimentación', 'Alimentação'), '3×380 V ±10% / 50 Hz'],
        [t(language, 'Supply Mode', 'Modo de Suministro', 'Modo de Fornecimento'), t(language, 'Quick Plug', 'Conexión Rápida', 'Conexão Rápida')],
        [t(language, 'Weight', 'Peso', 'Peso'), '1,500 kg'],
        [t(language, 'Dimensions (L×W×H)', 'Dimensiones (L×A×H)', 'Dimensões (C×L×A)'), '2500 × 900 × 1800 mm'],
      ]
    },
    {
      group: t(language, 'Vision Performance', 'Rendimiento Visual', 'Desempenho Visual'),
      rows: [
        [t(language, 'Vision Accuracy', 'Precisión Visual', 'Precisão Visual'), '≤ 0.5 mm'],
        [t(language, 'Scanning Frame Rate', 'Tasa de Escaneo', 'Taxa de Varredura'), '2,000 FPS'],
        [t(language, 'Standard Vision', 'Visión Estándar', 'Visão Padrão'), 'RX01'],
      ]
    },
    {
      group: t(language, 'Battery & Motion', 'Batería y Movimiento', 'Bateria e Movimento'),
      rows: [
        [t(language, 'Battery Voltage', 'Voltaje de Batería', 'Tensão da Bateria'), '48 V'],
        [t(language, 'Battery Capacity', 'Capacidad de Batería', 'Capacidade da Bateria'), '32 Ah'],
        [t(language, 'Travel Power', 'Alimentación de Marcha', 'Alimentação de Marcha'), 'DC 48 V'],
        [t(language, 'Robot Arm Reach', 'Alcance del Brazo', 'Alcance do Braço'), '2,010 mm'],
        [t(language, 'Drive System', 'Sistema de Tracción', 'Sistema de Tração'), t(language, 'Three-Wheel Drive', 'Tracción Tres Ruedas', 'Tração Três Rodas')],
        [t(language, 'Control Method', 'Método de Control', 'Método de Controle'), t(language, 'Wireless Remote', 'Control Inalámbrico', 'Controle Sem Fio')],
        [t(language, 'Travel Speed', 'Velocidad de Desplazamiento', 'Velocidade de Deslocamento'), '2.5 km/h'],
      ]
    },
    {
      group: t(language, 'Environment', 'Entorno', 'Ambiente'),
      rows: [
        [t(language, 'Operating Temp.', 'Temp. Operación', 'Temp. Operação'), '0°C to +45°C'],
        [t(language, 'Storage Temp.', 'Temp. Almacenamiento', 'Temp. Armazenamento'), '-20°C to +60°C'],
        [t(language, 'Relative Humidity', 'Humedad Relativa', 'Umidade Relativa'), '≤ 90% RH'],
      ]
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger reveal for the header block
      gsap.from('.jx-headline > *', {
        scrollTrigger: { trigger: '.jx-headline', start: 'top 85%' },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      });

      // Image clip reveal
      gsap.from('.jx-image-wrap', {
        scrollTrigger: { trigger: '.jx-image-wrap', start: 'top 85%' },
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
      });

      // Capability tags pop in - animación mejorada
      gsap.utils.toArray('.jx-cap-tag').forEach((el, i) => {
        gsap.from(el as Element, {
          scrollTrigger: { trigger: '.jx-capabilities', start: 'top 85%' },
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.06,
          ease: 'back.out(1.4)',
        });
      });

      // Spec groups slide in - animación mejorada
      gsap.utils.toArray('.jx-spec-group').forEach((el, i) => {
        gsap.from(el as Element, {
          scrollTrigger: { trigger: '.jx-specs-grid', start: 'top 85%' },
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
        });
      });

      // Spec rows individual animation
      gsap.utils.toArray('.jx-spec-row').forEach((row, i) => {
        gsap.from(row as Element, {
          scrollTrigger: { trigger: '.jx-specs-grid', start: 'top 85%' },
          x: -15,
          opacity: 0,
          duration: 0.4,
          delay: i * 0.03,
          ease: 'power1.out',
        });
      });

      // Bottom bar animation
      gsap.from('.jx-bottom-bar', {
        scrollTrigger: { trigger: '.jx-bottom-bar', start: 'top 90%' },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'back.out(0.6)',
      });

      // Bottom stats animation
      gsap.utils.toArray('.jx-bottom-stat').forEach((el, i) => {
        gsap.from(el as Element, {
          scrollTrigger: { trigger: '.jx-bottom-bar', start: 'top 90%' },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: 0.3 + i * 0.1,
          ease: 'back.out(1.2)',
        });
      });

      // Divider line animation
      gsap.from('.jx-divider-line', {
        scrollTrigger: { trigger: '.jx-divider-line', start: 'top 90%' },
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'expo.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Dividir capabilities en dos columnas: 4 en la primera, 3 en la segunda
  const firstColumnCapabilities = capabilities.slice(0, 4);
  const secondColumnCapabilities = capabilities.slice(4, 7);

  return (
    <div ref={sectionRef} className="bg-white overflow-hidden">

      {/* ─── HERO: full-bleed asymmetric split ───────────────────────────── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">

        {/* Left: text column */}
        <div className="jx-headline flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-24 lg:py-0 lg:w-[52%] z-10">
          {/* eyebrow */}
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-600 mb-8 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-red-600" />
            {t(language, 'Cutter Series', 'Serie Cortadora', 'Série Cortadora')}
          </p>

          {/* model name */}
          <h1
            className="font-bold leading-none mb-6 select-none text-black"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Jasper X
          </h1>

          {/* sub-headline */}
          <p
            className="text-gray-600 font-light mb-10 max-w-lg"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', lineHeight: 1.6 }}
          >
            {t(
              language,
              'AI-powered cutting. Solution AI Cutting System with 3D Vision — no programming, no teaching.',
              'Corte con IA. Solucion AI con visión 3D — sin programación ni enseñanza.',
              'Corte com IA para operações em espaços reduzidos. Sistema Loyalty AI com visão 3D — sem programação nem ensino.',
            )}
          </p>

          {/* key stats strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              { val: '30 KVA', lbl: t(language, 'Total Power', 'Potencia', 'Potência') },
              { val: '≤0.5 mm', lbl: t(language, 'Accuracy', 'Precisión', 'Precisão') },
              { val: '2000 FPS', lbl: t(language, 'Frame Rate', 'Tasa', 'Taxa') },
              { val: '2010 mm', lbl: t(language, 'Arm Reach', 'Alcance', 'Alcance') },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="group">
                <span className="text-3xl sm:text-4xl font-bold text-black group-hover:text-red-600 transition-colors duration-300" style={{ letterSpacing: '-0.02em' }}>
                  {val}
                </span>
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mt-1 block group-hover:text-gray-700 transition-colors">
                  {lbl}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image panel - ajustes para celular */}
        <div className="jx-image-wrap relative lg:w-[48%] bg-stone-50 flex items-center justify-center min-h-[55vw] lg:min-h-0">
          {/* big red circle bg */}
          <div
            className="absolute right-[-15%] top-[50%] translate-y-[-50%] rounded-full pointer-events-none"
            style={{
              width: '70%',
              paddingBottom: '70%',
              background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)',
            }}
          />

          {/* Contenedor de la imagen con padding para evitar solapamiento en móvil */}
          <div className="relative w-full h-full flex items-center justify-center pt-8 pb-8 lg:pt-0 lg:pb-0">
            <img
              src="./img/Jasper_X.png"
              alt="Jasper X"
              className="relative z-10 w-[70%] sm:w-[78%] max-w-xl object-contain drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.15))' }}
            />
          </div>

          {/* floating badge top-left - reposicionado más arriba en móvil */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 bg-white border border-gray-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm z-20">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[9px] sm:text-[11px] font-bold tracking-widest uppercase text-gray-700">CUTTING</span>
          </div>

          {/* floating badge bottom-right - reposicionado más abajo y a la derecha en móvil */}
          <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 bg-red-600 text-white rounded-xl sm:rounded-2xl px-3 py-1.5 sm:px-5 sm:py-3 shadow-lg z-20">
            <p className="text-[7px] sm:text-[10px] font-bold tracking-widest uppercase opacity-70 mb-0.5">
              {t(language, 'CONTROL', 'CONTROL', 'CONTROLE')}
            </p>
            <p className="text-sm sm:text-lg font-black leading-none">2.5 km/h</p>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="px-8 sm:px-14 lg:px-20">
        <div className="jx-divider-line h-px bg-gray-200 w-full" />
      </div>

      {/* ─── CUTTING CAPABILITIES: numbered list con animaciones mejoradas ─── */}
      <section className="jx-capabilities px-8 sm:px-14 lg:px-20 py-24">
        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-600 flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px bg-red-600" />
              {t(language, 'Capabilities', 'Capacidades', 'Capacidades')}
            </p>
            <h2
              className="font-bold text-black leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              {t(language, 'Cutting Capabilities', 'Capacidades de Corte', 'Capacidades de Corte')}
            </h2>
          </div>
        </div>

        {/* numbered list con dos columnas: 4 y 3 elementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Primera columna: 4 capacidades */}
          <div className="border-r border-gray-200">
            {firstColumnCapabilities.map((cap, i) => (
              <div
                key={i}
                className="jx-cap-tag group relative flex items-center gap-5 px-8 py-6 border-b border-gray-200 last:border-b-0 hover:bg-red-50/40 transition-all duration-500 cursor-default hover:pl-12"
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:border-red-300 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                  {cap}
                </span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-red-500 group-hover:scale-150 transition-all duration-300 flex-shrink-0" />
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              </div>
            ))}
          </div>

          {/* Segunda columna: 3 capacidades */}
          <div>
            {secondColumnCapabilities.map((cap, i) => (
              <div
                key={i}
                className="jx-cap-tag group relative flex items-center gap-5 px-8 py-6 border-b border-gray-200 last:border-b-0 hover:bg-red-50/40 transition-all duration-500 cursor-default hover:pl-12"
              >
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:border-red-300 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(i + 5).padStart(2, '0')}
                </span>
                <span className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                  {cap}
                </span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-red-500 group-hover:scale-150 transition-all duration-300 flex-shrink-0" />
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────────────────── */}
      <div className="px-8 sm:px-14 lg:px-20">
        <div className="h-px bg-gray-200 w-full" />
      </div>

      {/* ─── TECHNICAL SPECS: editorial table layout con animaciones mejoradas ─── */}
      <section className="px-8 sm:px-14 lg:px-20 py-24">
        <div className="mb-14">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-600 flex items-center gap-3 mb-4">
            <span className="inline-block w-8 h-px bg-red-600" />
            {t(language, 'Technical Data', 'Datos Técnicos', 'Dados Técnicos')}
          </p>
          <h2
            className="font-bold text-black leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            {t(language, 'Full Specifications', 'Especificaciones Completas', 'Especificações Completas')}
          </h2>
        </div>

        <div className="jx-specs-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {specGroups.map((group, gi) => (
            <div
              key={gi}
              className="jx-spec-group group border-b sm:border-b-0 sm:border-r border-gray-200 last:border-r-0 hover:shadow-lg transition-all duration-500"
            >
              {/* group header con gradient en hover */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 group-hover:bg-gradient-to-r group-hover:from-red-50 group-hover:to-transparent transition-all duration-300">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-red-600 group-hover:text-red-700">
                  {group.group}
                </p>
              </div>

              {/* rows con animaciones */}
              <div className="divide-y divide-gray-100">
                {group.rows.map(([label, value], ri) => (
                  <div key={ri} className="jx-spec-row px-6 py-5 flex flex-col gap-1 hover:bg-red-50/30 transition-all duration-300 group/row">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover/row:text-red-500 transition-colors">
                      {label}
                    </span>
                    <span className="text-base font-bold text-gray-900 group-hover/row:text-black transition-colors">
                      {value}
                    </span>
                    {/* subtle indicator line */}
                    <div className="w-0 h-px bg-red-400 group-hover/row:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOTTOM ACCENT BAR con animaciones mejoradas ─────────────────── */}
      <div className="jx-bottom-bar mx-8 sm:mx-14 lg:mx-20 mb-16 rounded-2xl overflow-hidden bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 flex flex-col lg:flex-row items-center justify-between px-10 py-10 gap-8 relative group">
        {/* animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -inset-full group-hover:inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-1000" />
        
        <div>
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-400 mb-2 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-red-400" />
            Jasper X — {t(language, 'AI Cutting System', 'Sistema de Corte AI', 'Sistema de Corte AI')}
          </p>
          <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {t(
              language,
              'Programming-free. Teaching-free.\nCost-effective precision.',
              'Sin programación. Sin enseñanza.\nPrecisión rentable.',
              'Sem programação. Sem ensino.\nPrecisão econômica.',
            )}
          </h3>
        </div>
        
        <div className="flex-shrink-0 flex flex-wrap gap-4 text-center">
          {[
            { n: '7', u: t(language, 'Cutting Modes', 'Modos de Corte', 'Modos de Corte') },
            { n: '0.5mm', u: t(language, 'Vision Acc.', 'Precisión', 'Precisão') },
          ].map(({ n, u }) => (
            <div key={u} className="jx-bottom-stat relative px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default group/stat">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500" />
              <p className="text-2xl font-black text-white group-hover/stat:text-red-400 transition-colors">{n}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mt-0.5 group-hover/stat:text-gray-300 transition-colors">{u}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
