import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MouseSpotlight from './components/MouseSpotlight/MouseSpotlight';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';

import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Certificate from './pages/Certificate/Certificate';

import './App.css';

// Component to handle scroll restoration on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Animated routing wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/certificate/:slug" element={<Certificate />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <MouseSpotlight />
          <ScrollIndicator />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
