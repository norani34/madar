import React, { useState, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StarBackground } from './components/StarBackground';
import { IntroOverlay } from './components/IntroOverlay';

// Lazy Load Pages for Performance Code Splitting
// This ensures mobile users don't download the whole app at once
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Stats = lazy(() => import('./pages/Stats').then(module => ({ default: module.Stats })));
const Testimonials = lazy(() => import('./pages/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white font-body selection:bg-star-blue selection:text-black">
      <StarBackground />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow relative z-10">
        {/* Suspense handles the loading state of lazy chunks. 
            The IntroOverlay covers the initial mount, so this fallback is rarely seen 
            unless navigating deep links later. */}
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <LanguageProvider>
      {/* Intro Overlay sits outside the router to cover everything initially */}
      {!introFinished && <IntroOverlay onFinish={() => setIntroFinished(true)} />}
      
      <HashRouter>
        {/* AppContent mounts immediately behind the overlay, triggering the lazy load fetches 
            so the app is ready when the overlay slides up. */}
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;