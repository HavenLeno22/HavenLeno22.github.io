import { GraduationCap } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import { education } from '../../data/experience';
import { asset } from '../../data/credentials';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Education</div>
          <h2 className="education__title">
            Where I'm <span className="gradient-text">learning</span>.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <ol className="education__list premium-card">
            {education.map((edu) => (
              <li key={edu.id} className="education__item">
                {edu.logo ? (
                  <span className="cred-logo"><img src={asset(edu.logo)} width="48" height="48" alt="" /></span>
                ) : (
                  <span className="cred-logo cred-logo--icon" aria-hidden="true"><GraduationCap size={22} strokeWidth={1.6} /></span>
                )}
                <div className="education__text">
                  <h3>{edu.degree}</h3>
                  <p className="education__where">{edu.institution}</p>
                  {edu.gpa && <p className="education__gpa">CGPA {edu.gpa}</p>}
                </div>
                <span className="education__period">{edu.period}</span>
              </li>
            ))}
          </ol>
        </SectionReveal>
      </div>
    </section>
  );
}
