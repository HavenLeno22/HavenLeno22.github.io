import { motion } from 'framer-motion';
import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Skills from '../../sections/Skills/Skills';
import Projects from '../../sections/Projects/Projects';
import Experience from '../../sections/Experience/Experience';
import GitHubDashboard from '../../sections/GitHubDashboard/GitHubDashboard';
import Awards from '../../sections/Awards/Awards';
import Education from '../../sections/Education/Education';
import Contact from '../../sections/Contact/Contact';
import { pageTransition } from '../../utils/animations';

export default function Home() {
  return (
    <motion.main
      className="page-home"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <Experience />
      <Projects />
      <Awards />
      <About />
      <Skills />
      <Education />
      <GitHubDashboard />
      <Contact />
    </motion.main>
  );
}
