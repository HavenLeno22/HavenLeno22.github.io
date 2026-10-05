import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import GradientBorder from '../../components/GradientBorder/GradientBorder';
import { pageTransition } from '../../utils/animations';
import { asset } from '../../data/credentials';
import { experiences, education } from '../../data/experience';
import { skillCategories } from '../../data/skills';
import './Resume.css';

export default function Resume() {
  return (
    <motion.main
      className="page-resume section-padding"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="section-container">
        <div className="resume__header">
          <SectionReveal>
            <h1 className="resume__title">Curriculum <span className="gradient-text">Vitae</span></h1>
            <p className="resume__subtitle">My experience, education and skills on one page. The PDF has the same content.</p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="resume__actions">
              <MagneticButton as="a" href={asset('resume/Haven-Leno-J-Resume.pdf')} download className="resume__btn resume__btn--primary">
                <Download size={18} />
                Download PDF
              </MagneticButton>
              <MagneticButton as="a" href={asset('resume/Haven-Leno-J-Resume.pdf')} target="_blank" rel="noopener noreferrer" className="resume__btn resume__btn--secondary">
                <ExternalLink size={18} />
                Open PDF
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>

        <div className="resume__grid">
          <div className="resume__main-content">
            <SectionReveal direction="up" delay={0.3}>
              <GradientBorder radius="24px">
                <div className="resume__preview premium-card">
                  {/* Experience Section */}
                  <div className="resume__section">
                    <h2 className="resume__section-title">Experience</h2>
                    <div className="resume__items">
                      {experiences.filter(e => e.type === 'work').map(exp => (
                        <div key={exp.id} className="resume__item">
                          <div className="resume__item-header">
                            <div>
                              <h3 className="resume__item-title">{exp.title}</h3>
                              <div className="resume__item-subtitle">{exp.company}</div>
                            </div>
                            <div className="resume__item-meta">
                              <span className="resume__item-date">{exp.period}</span>
                              <span className="resume__item-location">{exp.location}</span>
                            </div>
                          </div>
                          <ul className="resume__item-list">
                            {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="resume__divider" />

                  {/* Education Section */}
                  <div className="resume__section">
                    <h2 className="resume__section-title">Education</h2>
                    <div className="resume__items">
                      {education.map(edu => (
                        <div key={edu.id} className="resume__item">
                          <div className="resume__item-header">
                            <div>
                              <h3 className="resume__item-title">{edu.degree}</h3>
                              <div className="resume__item-subtitle">{edu.institution}</div>
                            </div>
                            <div className="resume__item-meta">
                              <span className="resume__item-date">{edu.period}</span>
                              {edu.gpa && <span className="resume__item-location">CGPA {edu.gpa}</span>}
                            </div>
                          </div>
                          {edu.highlights.length > 0 && (
                            <ul className="resume__item-list">
                              {edu.highlights.map((h, i) => <li key={i}>{h}</li>)}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GradientBorder>
            </SectionReveal>
          </div>

          <div className="resume__sidebar">
            <SectionReveal direction="left" delay={0.4}>
              <div className="resume__skills premium-card">
                <h2 className="resume__section-title">Technical Skills</h2>
                <div className="resume__skills-content">
                  {skillCategories.map(cat => (
                    <div key={cat.title} className="resume__skill-category">
                      <h3 className="resume__skill-cat-title">{cat.title}</h3>
                      <div className="resume__skill-tags">
                        {cat.skills.map(skill => (
                          <span key={skill.name} className="resume__skill-tag">
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.5}>
              <div className="resume__languages premium-card">
                <h2 className="resume__section-title">Languages</h2>
                <div className="resume__lang-list">
                  <div className="resume__lang-item">
                    <span className="resume__lang-name">English</span>
                  </div>
                  <div className="resume__lang-item">
                    <span className="resume__lang-name">Tamil</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
