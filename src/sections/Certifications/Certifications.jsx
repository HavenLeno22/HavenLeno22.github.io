import { ExternalLink, Award, Calendar } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import TiltCard from '../../components/TiltCard/TiltCard';
import { certifications } from '../../data/certifications';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="certifications__top-label">
            <span className="certifications__dot"></span>
            Certification
          </div>
          <h2 className="certifications__title">
            Professional Certifications
          </h2>
          <p className="certifications__subtitle">
            Each credential links to its verification page.
          </p>
        </SectionReveal>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <SectionReveal key={cert.id} direction="up" delay={index * 0.1}>
              <TiltCard className="certifications__card" intensity={3}>
                
                <div className="certifications__image-container">
                  {cert.image ? (
                    <div className="certifications__image-wrapper">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="certifications__image" 
                      />
                    </div>
                  ) : (
                    <div className="certifications__image-placeholder"></div>
                  )}
                  <div className="certifications__badge">
                    <Award size={16} />
                  </div>
                </div>
                
                <div className="certifications__content">
                  <div className="certifications__meta-top">
                    <span className="certifications__issuer">{cert.issuer}</span>
                    <span className="certifications__date">
                      <Calendar size={12} /> {cert.date}
                    </span>
                  </div>

                  <h3 className="certifications__card-title">{cert.title}</h3>
                  
                  <div className="certifications__meta-bottom">
                    <span className="certifications__license-label">ID {cert.credentialId}</span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certifications__verify-btn"
                      >
                        Verify <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
