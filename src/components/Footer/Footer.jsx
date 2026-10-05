import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import './Footer.css';

// Scroll to a home-page section, going home first when on another page.
function goToSection(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  window.location.hash = '#/';
  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 400);
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section-container">
      <div className="footer__content">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">H</span>
            <span className="footer__logo-text">Haven Leno J</span>
          </div>
          <p className="footer__tagline">
            Full-stack developer and B.Tech CSE student in Chennai, open to software engineering internships.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__nav">
            <h4 className="footer__heading">Navigation</h4>
            <a href="#/" className="footer__link">Home</a>
            <a href="#/" onClick={(e) => goToSection(e, 'experience')} className="footer__link">Experience</a>
            <a href="#/" onClick={(e) => goToSection(e, 'projects')} className="footer__link">Projects</a>
            <a href="#/" onClick={(e) => goToSection(e, 'awards')} className="footer__link">Awards</a>
            <a href="#/resume" className="footer__link">Resume</a>
          </div>

          <div className="footer__socials">
            <h4 className="footer__heading">Connect</h4>
            <div className="footer__social-icons">
              <a href="https://github.com/HavenLeno22" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/havenleno/" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:havenleno2006@gmail.com" className="footer__social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {currentYear} Haven Leno J
        </p>
        <p className="footer__built-with">
          Last updated October 2026
        </p>
      </div>
    </footer>
  );
}
