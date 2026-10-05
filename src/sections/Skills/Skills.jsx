import SectionReveal from '../../components/SectionReveal/SectionReveal';
import TiltCard from '../../components/TiltCard/TiltCard';
import { Monitor, Server, Database, Cloud, Palette } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import './Skills.css';

const IconMap = {
  Monitor,
  Server,
  Database,
  Cloud,
  Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="skills section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Skills</div>
          <h2 className="skills__title">
            What I <span className="gradient-text">build with</span>.
          </h2>
        </SectionReveal>

        <div className="skills__grid">
          {skillCategories.map((category, index) => {
            const Icon = IconMap[category.icon];
            
            return (
              <SectionReveal 
                key={category.title} 
                direction="up" 
                delay={index * 0.1}
              >
                <TiltCard className="skills__category premium-card" intensity={5}>
                  <div className="skills__category-header">
                    <div className="skills__category-icon">
                      {Icon && <Icon size={24} />}
                    </div>
                    <h3 className="skills__category-title">{category.title}</h3>
                  </div>
                  
                  <div className="skills__list">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="skills__item">
                        <span className="skills__item-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
