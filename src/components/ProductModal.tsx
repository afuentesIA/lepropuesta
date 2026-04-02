import { useEffect, useRef } from 'react';
import { X, Share2 } from 'lucide-react';
import gsap from 'gsap';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    tagline: string;
    description: string;
    images: string[];
    specs: Array<{
      label: string;
      value: string;
      icon: React.ReactNode;
    }>;
    extendedSpecs?: {
      [category: string]: Array<{
        label: string;
        value: string;
      }>;
    };
  };
  language: 'en' | 'es' | 'pt';
}

export const ProductModal = ({ isOpen, onClose, product, language }: ProductModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );

      gsap.fromTo(
        contentRef.current,
        { 
          y: 50, 
          opacity: 0, 
          scale: 0.95,
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          ease: 'power3.out', 
          delay: 0.1 
        }
      );
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(contentRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: 'power2.in',
    });
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `${product.name} - ${product.tagline}`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(
          language === 'en' 
            ? 'Link copied to clipboard!' 
            : language === 'es' 
            ? '¡Enlace copiado al portapapeles!' 
            : 'Link copiado para a área de transferência!'
        );
      }
    } catch (error) {
      console.error('Error sharing:', error);
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert(
          language === 'en' 
            ? 'Link copied to clipboard!' 
            : language === 'es' 
            ? '¡Enlace copiado al portapapeles!' 
            : 'Link copiado para a área de transferência!'
        );
      } catch (copyError) {
        console.error('Error copying to clipboard:', copyError);
      }
    }
  };

  const handleRequestQuote = () => {
    alert(
      language === 'en' 
        ? 'Request quote functionality coming soon!' 
        : language === 'es' 
        ? '¡Funcionalidad de solicitud de cotización próximamente!' 
        : 'Funcionalidade de solicitação de cotação em breve!'
    );
  };

  if (!isOpen) return null;

  const extendedSpecs = product.extendedSpecs || {};

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-start justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xl overflow-y-auto pt-20 sm:pt-28"
      onClick={handleBackdropClick}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-6xl bg-white rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl mt-8 sm:mt-12 mb-8 mx-3 sm:mx-6"
      >
        <div className="sticky top-0 z-10 bg-gradient-to-b from-white to-white/95 backdrop-blur-xl border-b border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-8">
            <div className="flex-1 mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-2">
                {product.name}
              </h2>
              <p className="text-base sm:text-xl text-gray-600">{product.tagline}</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
              <button
                onClick={handleShare}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label={
                  language === 'en' 
                    ? 'Share product' 
                    : language === 'es' 
                    ? 'Compartir producto' 
                    : 'Compartilhar produto'
                }
              >
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
              <button
                onClick={handleClose}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label={
                  language === 'en' 
                    ? 'Close modal' 
                    : language === 'es' 
                    ? 'Cerrar modal' 
                    : 'Fechar modal'
                }
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-220px)] p-4 sm:p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-16">
            <div className="relative aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl group">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
                  {language === 'en' ? 'Overview' : language === 'es' ? 'Descripción' : 'Descrição'}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                {product.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100"
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white mb-2 sm:mb-3">
                      {spec.icon}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-1">{spec.label}</div>
                    <div className="text-lg sm:text-xl font-bold text-black">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {Object.entries(extendedSpecs).length > 0 && (
            <div className="border-t border-gray-200 pt-6 sm:pt-12 mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 tracking-tight">
                {language === 'en' ? 'Complete Technical Specifications' : language === 'es' ? 'Especificaciones Técnicas Completas' : 'Especificações Técnicas Completas'}
              </h3>

              {Object.entries(extendedSpecs).map(([category, specs], catIndex) => (
                <div key={catIndex} className="mb-6 sm:mb-10">
                  <h4 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 tracking-tight">{category}</h4>
                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    {specs.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-gray-200 transition-all"
                      >
                        <span className="text-sm sm:text-base text-gray-700 font-medium pr-2">{spec.label}</span>
                        <span className="text-base sm:text-lg text-black font-bold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-gray-200 pt-6 sm:pt-12">
            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-center border border-red-100">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight">
                {language === 'en' ? 'Ready to Transform Your Operations?' : language === 'es' ? '¿Listo para Transformar tus Operaciones?' : 'Pronto para Transformar suas Operações?'}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Contact our sales team to learn more about this product and how it can revolutionize your business'
                  : language === 'es'
                  ? 'Contacta a nuestro equipo de ventas para aprender más sobre este producto y cómo puede revolucionar tu negocio'
                  : 'Entre em contato com nossa equipe de vendas para saber mais sobre este produto e como ele pode revolucionar seu negócio'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-base sm:text-lg font-semibold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)] active:scale-95"
                >
                  {language === 'en' ? 'Contact Sales' : language === 'es' ? 'Contactar Ventas' : 'Contatar Vendas'}
                </a>
                <button
                  onClick={handleRequestQuote}
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-black text-black text-base sm:text-lg font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  {language === 'en' ? 'Request Quote' : language === 'es' ? 'Solicitar Cotización' : 'Solicitar Cotação'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
