import { motion } from 'framer-motion';
import TextReveal from '../../components/TextReveal/TextReveal';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import GradientBorder from '../../components/GradientBorder/GradientBorder';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { CredLogo } from '../Awards/Awards';
import { allCredentials } from '../../data/credentials';
import './Hero.css';

const proof = [
  { slug: 'genlab-internship', title: 'MERN Stack Intern', sub: 'GenLab, Jun to Aug 2026' },
  { slug: 'sensora-2', title: 'Hackathon winner', sub: 'Sensora 2.0, VIT Vellore' },
].map((p) => ({ ...p, item: allCredentials.find((c) => c.slug === p.slug) }));

export default function Hero() {
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.location.hash = '#/resume';
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <div className="hero__glow hero__glow--purple" />
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__grid" />
      </div>

      <div className="section-container hero__container">
        <div className="hero__content">
          <motion.div 
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero__badge-dot" />
            Open to internships
          </motion.div>

          <h1 className="hero__title">
            <TextReveal text="Full-stack developer." delay={0.3} />
          </h1>
          
          <motion.p 
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I'm Haven Leno J, a third-year Computer Science student at SRM IST in Chennai.
            I build web apps with React, Node.js and Spring Boot, and I've just completed
            a MERN stack internship at GenLab.
          </motion.p>

          <motion.div 
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <MagneticButton 
              className="hero__btn hero__btn--primary"
              onClick={handleScrollToProjects}
            >
              Explore Projects
              <ArrowRight size={18} />
            </MagneticButton>
            
            <MagneticButton 
              className="hero__btn hero__btn--secondary"
              onClick={handleDownloadResume}
            >
              <Download size={18} />
              View Resume
            </MagneticButton>
          </motion.div>

          <motion.ul
            className="hero__proof"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {proof.map((p) => (
              <li key={p.slug}>
                <a href={`#/certificate/${p.slug}`}>
                  <CredLogo item={p.item} size={36} />
                  <span><strong>{p.title}</strong><span>{p.sub}</span></span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div 
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <GradientBorder className="hero__portrait-wrapper hero__portrait-wrapper--empty" radius="32px">
            <div className="hero__portrait">
              {/* Portrait: save a 4:5 photo (at least 800 x 1000) as public/photo.webp, then replace
                  the placeholder div below with:
                  <img src={`${import.meta.env.BASE_URL}photo.webp`} alt="Haven Leno J" className="hero__portrait-img" />
                  and remove "hero__portrait-wrapper--empty" from the GradientBorder class above. */}
              <div className="hero__portrait-placeholder" />
            </div>
          </GradientBorder>

        </motion.div>
      </div>

      <motion.div 
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="hero__scroll-text">Scroll to explore</div>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
