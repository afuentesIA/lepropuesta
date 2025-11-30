import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from './hooks/useLanguage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductsPage } from './pages/ProductsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Componente para scroll al tope
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { language, setLanguage } = useLanguage();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation language={language} onLanguageChange={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/products" element={<ProductsPage language={language} />} />
          <Route path="/resources" element={<ResourcesPage language={language} />} />
          <Route path="/news" element={<NewsPage language={language} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;