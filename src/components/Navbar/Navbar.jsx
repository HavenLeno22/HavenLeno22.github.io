import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Awards', href: '/#awards' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname !== '/') return;
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'github', 'certifications', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="navbar__inner">
          <a
            href="#/"
            className="navbar__logo"
            onClick={(e) => handleNavClick(e, '/#hero')}
          >
            <span className="navbar__logo-mark">H</span>
            <span className="navbar__logo-text">Haven</span>
          </a>

          <div className="navbar__links">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(2);
              return (
                <a
                  key={link.label}
                  href="#/"
                  className={`navbar__link ${activeSection === sectionId ? 'navbar__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {activeSection === sectionId && (
                    <motion.div
                      className="navbar__link-indicator"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="navbar__actions">
            <ThemeToggle />
            <a
              href="#/resume"
              className="navbar__cta"
              onClick={(e) => handleNavClick(e, '/resume')}
            >
              Digital Resume
            </a>
            <button
              className="navbar__mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="#/resume"
              className="navbar__mobile-cta"
              onClick={(e) => handleNavClick(e, '/resume')}
            >
              Digital Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
