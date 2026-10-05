import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import { experiences } from '../../data/experience';
import { Briefcase, Code, Users } from 'lucide-react';
import { CredLogo } from '../Awards/Awards';
import { allCredentials, certificateHref } from '../../data/credentials';
import './Experience.css';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="experience section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Career Journey</div>
          <h2 className="experience__title">
            Internship, hackathons and <span className="gradient-text">community</span>.
          </h2>
        </SectionReveal>

        <div className="experience__timeline-wrapper" ref={ref}>
          <motion.div 
            className="experience__timeline-line"
            style={{ scaleY, transformOrigin: "top" }}
          />
          
          <div className="experience__timeline-bg" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const Icon = exp.type === 'work' ? Briefcase : exp.type === 'club' ? Users : Code;

            return (
              <div key={exp.id} className={`experience__item ${isEven ? 'experience__item--left' : 'experience__item--right'}`}>
                <div className="experience__node">
                  <Icon size={16} />
                </div>

                <SectionReveal 
                  direction={isEven ? "right" : "left"} 
                  delay={0.2}
                  className="experience__content-wrapper"
                >
                  <div className="experience__content premium-card">
                    <div className="experience__head">
                      {exp.logo && <CredLogo item={exp} size={52} />}
                      <div className="experience__meta">
                        <span className="experience__period">{exp.period}</span>
                        <span className="experience__location">{exp.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="experience__role">{exp.title}</h3>
                    <div className="experience__company">{exp.company}</div>
                    
                    <p className="experience__description">{exp.description}</p>
                    
                    {exp.highlights.length > 0 && (
                    <ul className="experience__highlights">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    )}
                    
                    {exp.technologies.length > 0 && (
                    <div className="experience__tech">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="experience__tech-tag">{tech}</span>
                      ))}
                    </div>
                    )}
                    {exp.certificate && (
                      <a className="cred-btn experience__cert" href={certificateHref(allCredentials.find((c) => c.slug === exp.certificate))}>
                        View certificate
                      </a>
                    )}
                  </div>
                </SectionReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
