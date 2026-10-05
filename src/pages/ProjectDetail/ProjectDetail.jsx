import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import { Github } from '../../components/Icons';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import { projects } from '../../data/projects';
import { asset } from '../../data/credentials';
import { pageTransition } from '../../utils/animations';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail__not-found">
        <h2>Project Not Found</h2>
        <Link to="/" className="project-detail__back-btn">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.main
      className="page-project-detail"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="project-hero">
        <div className="section-container">
          <Link
            to="/"
            className="project-hero__back"
            onClick={() => setTimeout(() => document.getElementById('projects')?.scrollIntoView(), 60)}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
          
          <div className="project-hero__content">
            <motion.div 
              className="project-hero__meta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="project-hero__category">{project.category}</span>
              {project.year && <span className="project-hero__year">{project.year}</span>}
            </motion.div>
            
            <motion.h1 
              className="project-hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            
            <motion.p 
              className="project-hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.subtitle}
            </motion.p>
          </div>
        </div>

        <motion.div 
          className="project-hero__visual-container section-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="project-hero__visual">
             {project.image ? (
               <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} className="project-hero__image" />
             ) : (
               <div className="project-hero__image-placeholder">{project.title}</div>
             )}
          </div>
        </motion.div>
      </div>

      <div className="project-content section-container">
        <div className="project-content__grid">
          <div className="project-content__main">
            {[
              ['Overview', project.overview],
              ['The Problem', project.problem],
              ['The Solution', project.solution],
              ['Architecture & Implementation', project.architecture],
            ].filter(([, text]) => text).map(([title, text]) => (
              <SectionReveal key={title} direction="up">
                <div className="project-section">
                  <h2 className="project-section__title">{title}</h2>
                  <p className="project-section__text">{text}</p>
                </div>
              </SectionReveal>
            ))}

            {project.steps?.length > 0 && (
              <SectionReveal direction="up">
                <div className="project-section">
                  <h2 className="project-section__title">How it works</h2>
                  <ol className="project-steps">
                    {project.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </SectionReveal>
            )}

            {project.highlights?.length > 0 && (
              <SectionReveal direction="up">
                <div className="project-section">
                  <h2 className="project-section__title">{project.steps ? "What's built" : 'Highlights'}</h2>
                  <ul className="project-list">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            )}

            {(project.figures?.length > 0 || project.details?.length > 0) && (
              <SectionReveal direction="up">
                <div className="project-section">
                  <h2 className="project-section__title">Engineering details</h2>
                  {project.figures && (
                    <div className="project-figures">
                      {project.figures.map(([value, label]) => (
                        <div key={label} className="project-figure">
                          <strong>{value}</strong>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {project.details && (
                    <ul className="project-list">
                      {project.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </SectionReveal>
            )}

            {project.gallery?.length > 0 && (
              <SectionReveal direction="up">
                <div className="project-section">
                  <h2 className="project-section__title">More screens</h2>
                  <div className={`project-gallery ${project.gallery.length === 1 ? 'project-gallery--single' : ''}`}>
                    {project.gallery.map((shot) => (
                      <figure key={shot.src} className="project-gallery__item">
                        <img src={asset(shot.src)} width={shot.width} height={shot.height} alt={shot.alt} loading="lazy" />
                        <figcaption>{shot.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )}

            {project.next?.length > 0 && (
              <SectionReveal direction="up">
                <div className="project-section">
                  <h2 className="project-section__title">What I'd improve next</h2>
                  <ul className="project-list">
                    {project.next.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            )}
          </div>

          <div className="project-content__sidebar">
            <SectionReveal direction="left" delay={0.2}>
              <div className="project-sidebar-card premium-card">
                {project.role && (
                  <div className="project-sidebar__group">
                    <h3 className="project-sidebar__label">Type</h3>
                    <div className="project-sidebar__value">{project.role}</div>
                  </div>
                )}

                {project.status && (
                  <div className="project-sidebar__group">
                    <h3 className="project-sidebar__label">Status</h3>
                    <div className="project-sidebar__value">{project.status}</div>
                  </div>
                )}

                <div className="project-sidebar__group">
                  <h3 className="project-sidebar__label">Technologies</h3>
                  <div className="project-tech-tags">
                    {project.technologies.map(tech => (
                      <span key={tech} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-sidebar__actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-btn">
                    <Github size={18} />
                    View Source
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-action-btn project-action-btn--primary">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.certificate && (
                    <a href={`#/certificate/${project.certificate}`} className="project-action-btn project-action-btn--primary">
                      <Award size={18} />
                      View the award certificate
                    </a>
                  )}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
