import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const location = useLocation();
  const langMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowLangMenu(false);
  }, [location]);

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const languages: { code: Language; name: string; nativeName: string; flag: string }[] = [
    { 
      code: 'en', 
      name: 'English', 
      nativeName: 'English',
      flag: 'https://flagcdn.com/w40/us.png'
    },
    { 
      code: 'es', 
      name: 'Spanish', 
      nativeName: 'Español',
      flag: 'https://flagcdn.com/w40/mx.png'
    },
    { 
      code: 'pt', 
      name: 'Portuguese', 
      nativeName: 'Português',
      flag: 'https://flagcdn.com/w40/br.png'
    },
  ];

  // Opciones originales de navegación
  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/products', label: t.nav.products },
    { path: '/resources', label: t.nav.resources },
    { path: '/news', label: t.nav.news },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ];

  const isHome = location.pathname === '/';
  const isDark = isHome && !isScrolled;

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo más grande y sin texto */}
          <Link
            to="/"
            className="flex items-center transition-all duration-300 hover:opacity-80 flex-shrink-0 group"
          >
            <img
              src="/img/Logo.png"
              alt="RoboVision"
              className={`transition-all duration-500 ${
                isScrolled ? 'h-14' : 'h-16 lg:h-20'
              } ${
                isDark ? 'brightness-0 invert' : ''
              } group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-6 py-3 text-base font-semibold transition-all duration-300 rounded-2xl mx-1 group ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/25'
                    : isDark
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 -z-10" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Language Selector */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all duration-300 border ${
                  isDark 
                    ? 'text-white border-white/20 hover:bg-white/10' 
                    : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                } ${showLangMenu ? (isDark ? 'bg-white/10' : 'bg-gray-100') : ''}`}
              >
                {currentLanguage && (
                  <img 
                    src={currentLanguage.flag} 
                    alt={currentLanguage.name}
                    className="w-6 h-4 rounded object-cover"
                  />
                )}
                <span className="text-sm font-semibold capitalize">{language}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Select Language</div>
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 transition-all duration-200 border-b border-gray-100 last:border-b-0 flex items-center gap-4 hover:bg-gray-50 group ${
                        language === lang.code
                          ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
                          : 'text-gray-700'
                      }`}
                    >
                      <img 
                        src={lang.flag} 
                        alt={lang.name}
                        className={`w-7 h-5 rounded object-cover transition-all duration-200 ${
                          language === lang.code ? 'ring-2 ring-white' : 'group-hover:scale-110'
                        }`}
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">{lang.nativeName}</span>
                        <span className={`text-xs ${
                          language === lang.code ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {lang.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`p-3 rounded-xl transition-colors ${
                  isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
                } ${showLangMenu ? (isDark ? 'bg-white/10' : 'bg-gray-100') : ''}`}
              >
                {currentLanguage && (
                  <img 
                    src={currentLanguage.flag} 
                    alt={currentLanguage.name}
                    className="w-6 h-4 rounded object-cover"
                  />
                )}
              </button>

              {showLangMenu && (
                <div className="absolute right-0 top-14 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Select Language</div>
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full text-left px-4 py-3 transition-all duration-200 border-b border-gray-100 last:border-b-0 flex items-center gap-4 hover:bg-gray-50 group ${
                        language === lang.code
                          ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
                          : 'text-gray-700'
                      }`}
                    >
                      <img 
                        src={lang.flag} 
                        alt={lang.name}
                        className={`w-7 h-5 rounded object-cover transition-all duration-200 ${
                          language === lang.code ? 'ring-2 ring-white' : 'group-hover:scale-110'
                        }`}
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">{lang.nativeName}</span>
                        <span className={`text-xs ${
                          language === lang.code ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {lang.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-colors ${
                isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-200">
          <div className="px-4 pt-2 pb-8 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="pt-6 border-t border-gray-200 mt-4">
              <div className="px-6">
                <div className="text-sm font-semibold text-gray-500 mb-4">Select Language</div>
                <div className="grid grid-cols-1 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 flex items-center gap-4 ${
                        language === lang.code
                          ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <img 
                        src={lang.flag} 
                        alt={lang.name}
                        className="w-7 h-5 rounded object-cover"
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">{lang.nativeName}</span>
                        <span className="text-xs text-gray-500">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};