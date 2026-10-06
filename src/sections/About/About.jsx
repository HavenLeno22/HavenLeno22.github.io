import SectionReveal from '../../components/SectionReveal/SectionReveal';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">About Me</div>
          <h2 className="about__title">
            From the database <span className="gradient-text">to the interface</span>.
          </h2>
        </SectionReveal>

        <div className="about__grid">
          <SectionReveal direction="right" delay={0.2} className="about__left">
            <div className="about__visual premium-card">
              <div className="about__visual-inner">
                <div className="about__code-block">
                  <div className="about__code-header">
                    <span className="about__dot about__dot--red" />
                    <span className="about__dot about__dot--yellow" />
                    <span className="about__dot about__dot--green" />
                  </div>
                  <pre className="about__code-content">
                    <code>
{`const haven = {
  name: 'Haven Leno J',
  studying: 'B.Tech CSE, SRM IST',
  basedIn: 'Chennai, India',
  stack: ['React', 'Node.js', 'Spring Boot'],
  lookingFor: 'internships',
};`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.4} className="about__right">
            <div className="about__story">
              <p>
                I'm a third-year B.Tech Computer Science and Engineering student at SRM
                Institute of Science and Technology, Ramapuram, and I want to work as a
                full-stack developer at a product company. I like both halves of the job:
                interfaces people enjoy using, and the backend and systems underneath.
              </p>
              <p>
                In 2026 I completed a MERN stack internship at GenLab, and my team won the
                Implementation Category at Sensora 2.0, VIT Vellore, with SurgeGuard. In LOGIC PLAY,
                our campus hackathon club, I compete with club teams, help run events and mentor juniors.
              </p>
              <p>
                Right now I'm sharpening my DSA on LeetCode. Away from code, it's music,
                gaming, sport and fitness, and films.
              </p>
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-number">
                  <AnimatedCounter value={8} />
                </div>
                <div className="about__stat-label">Projects shown here</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">
                  <AnimatedCounter value={1} />
                </div>
                <div className="about__stat-label">Hackathon win</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-number">
                  <AnimatedCounter value={2} />
                </div>
                <div className="about__stat-label">Months interning</div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
