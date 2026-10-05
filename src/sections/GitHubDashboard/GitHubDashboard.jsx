import { useGitHubData } from '../../hooks/useGitHubData';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import TiltCard from '../../components/TiltCard/TiltCard';
import { BookOpen, Trophy, ExternalLink } from 'lucide-react';
import { Github } from '../../components/Icons';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import './GitHubDashboard.css';

export default function GitHubDashboard() {
  const { profile, loading, error } = useGitHubData('HavenLeno22');

  

  return (
    <section id="github" className="github section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Code Activity</div>
          <h2 className="github__title">
            What I've been <span className="gradient-text">shipping</span>.
          </h2>
        </SectionReveal>

        {loading ? (
          <div className="github__loading">Loading GitHub data...</div>
        ) : error ? (
          <div className="github__error">Failed to load GitHub data.</div>
        ) : (
          <div className="github__dashboard">
            
            {/* GitHub Profile Card */}
            <SectionReveal direction="up" delay={0.1}>
              <TiltCard className="github__profile-card premium-card" intensity={2}>
                <div className="github__profile-main">
                  <div className="github__profile-avatar-wrapper">
                    {profile?.avatar_url ? (
                      <img src={profile.avatar_url} alt="GitHub Avatar" className="github__profile-avatar" />
                    ) : (
                      <div className="github__profile-avatar-fallback"><Github size={40} /></div>
                    )}
                    <div className="github__profile-avatar-glow" />
                  </div>
                  <div className="github__profile-info">
                    <h3 className="github__profile-name">{profile?.name || 'Haven'}</h3>
                    <a href={`https://github.com/HavenLeno22`} target="_blank" rel="noopener noreferrer" className="github__profile-login">@HavenLeno22</a>
                    <p className="github__profile-bio">{profile?.bio || 'Full-stack developer and B.Tech CSE student at SRM IST.'}</p>
                    <div className="github__profile-stats">
                      <span className="github__profile-stat"><BookOpen size={16} /> <strong>{profile?.public_repos || 0}</strong> public repositories</span>
                    </div>
                  </div>
                </div>
                <MagneticButton className="github__profile-btn">
                  <a href={`https://github.com/HavenLeno22`} target="_blank" rel="noopener noreferrer" className="github__profile-btn-link">
                    View Profile <ExternalLink size={16} />
                  </a>
                </MagneticButton>
              </TiltCard>
            </SectionReveal>

            {/* LeetCode: live stats card rendered by leetcard.jacoblin.cool */}
            <SectionReveal direction="up" delay={0.3}>
              <TiltCard className="github__leetcode-card premium-card" intensity={2}>
                <div className="github__card-header">
                  <div className="github__card-title">
                    <Trophy size={20} className="gold-text" />
                    DSA practice
                  </div>
                  <a href="https://leetcode.com/u/lenohaven/" target="_blank" rel="noopener noreferrer" className="github__link">
                    @lenohaven
                  </a>
                </div>
                <p className="github__leetcode-note">
                  I'm working through DSA practice on LeetCode. Follow my progress on my profile.
                </p>
              </TiltCard>
            </SectionReveal>

          </div>
        )}
      </div>
    </section>
  );
}
