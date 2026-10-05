import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Github } from '../../components/Icons';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import TiltCard from '../../components/TiltCard/TiltCard';
import GradientBorder from '../../components/GradientBorder/GradientBorder';
import { projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Selected Work</div>
          <h2 className="projects__title">
            Things I've <span className="gradient-text">built</span>.
          </h2>
        </SectionReveal>

        <div className="projects__featured">
          {featuredProjects.map((project, index) => (
            <SectionReveal key={project.id} direction={index % 2 === 0 ? "right" : "left"} delay={0.2}>
              <GradientBorder radius="24px" className="projects__featured-card-wrapper">
                <div className="projects__featured-card premium-card">
                  <div className="projects__featured-content">
                    <div className="projects__meta">
                      <span className="projects__category">{project.category}</span>
                      {project.year && <span className="projects__year">{project.year}</span>}
                    </div>
                    
                    <h3 className="projects__card-title">{project.title}</h3>
                    <p className="projects__card-description">{project.description}</p>
                    
                    <div className="projects__tech">
                      {project.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="projects__tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="projects__tech-tag">+{project.technologies.length - 5}</span>
                      )}
                    </div>
                    
                    <div className="projects__actions">
                      <Link to={`/project/${project.slug}`} className="projects__btn projects__btn--primary">
                        Read Case Study
                        <ArrowRight size={16} />
                      </Link>
                      <div className="projects__links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__icon-link" aria-label="GitHub">
                          <Github size={20} />
                        </a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects__icon-link" aria-label="Live Demo">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="projects__featured-visual">
                    {project.image ? (
                      <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.imageAlt} className="projects__image" loading="lazy" />
                    ) : (
                      <div className="projects__image-placeholder">
                        <div className="projects__image-text">{project.title}</div>
                      </div>
                    )}
                  </div>
                </div>
              </GradientBorder>
            </SectionReveal>
          ))}
        </div>

        <div className="projects__grid">
          {otherProjects.map((project, index) => (
            <SectionReveal key={project.id} direction="up" delay={index * 0.1}>
              <TiltCard className="projects__card premium-card" intensity={5}>
                <div className="projects__meta">
                  <span className="projects__category">{project.category}</span>
                  <div className="projects__links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__icon-link projects__icon-link--small" aria-label="GitHub">
                      <Github size={16} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects__icon-link projects__icon-link--small" aria-label="Live Demo">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="projects__card-title projects__card-title--small">{project.title}</h3>
                <p className="projects__card-description projects__card-description--small">{project.description}</p>
                
                <div className="projects__tech projects__tech--small">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="projects__tech-tag">{tech}</span>
                  ))}
                </div>
                
                <Link to={`/project/${project.slug}`} className="projects__link-overlay" aria-label={`Read case study for ${project.title}`} />
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
