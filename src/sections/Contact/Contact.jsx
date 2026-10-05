import { useState } from 'react';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import MagneticButton from '../../components/MagneticButton/MagneticButton';
import GradientBorder from '../../components/GradientBorder/GradientBorder';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // No backend: hand the message to the visitor's own email app.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio message from ${data.get('name')}`;
    const body = `${data.get('message')}

Reply to: ${data.get('email')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const email = "havenleno2006@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Get In Touch</div>
          <h2 className="contact__title">
            Hiring for an internship? <span className="gradient-text">Let's talk.</span>
          </h2>
        </SectionReveal>

        <div className="contact__grid">
          <SectionReveal direction="right" delay={0.2} className="contact__left">
            <GradientBorder radius="24px">
              <div className="contact__card premium-card">
                <div className="contact__status">
                  <span className="contact__status-dot" />
                  Currently available for new opportunities
                </div>

                <h3 className="contact__card-title">Reach Out</h3>
                <p className="contact__card-desc">
                  Whether you have a question, a project proposal, or just want to say hi, 
                  I'll try my best to get back to you!
                </p>

                <div className="contact__email-box" onClick={handleCopyEmail}>
                  <div className="contact__email-info">
                    <span className="contact__email-label">Email</span>
                    <span className="contact__email-address">{email}</span>
                  </div>
                  <button className="contact__copy-btn" aria-label="Copy email">
                    {copied ? <Check size={20} className="contact__icon-success" /> : <Copy size={20} />}
                  </button>
                </div>

                <div className="contact__socials">
                  <a href="https://github.com/HavenLeno22" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                    <Github size={20} />
                    GitHub
                    <ArrowUpRight size={16} className="contact__social-arrow" />
                  </a>
                  <a href="https://www.linkedin.com/in/havenleno/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                    <Linkedin size={20} />
                    LinkedIn
                    <ArrowUpRight size={16} className="contact__social-arrow" />
                  </a>
                </div>
              </div>
            </GradientBorder>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.4} className="contact__right">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">Name</label>
                <input type="text" id="name" name="name" required className="contact__input" placeholder="Your name" />
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">Email</label>
                <input type="email" id="email" name="email" required className="contact__input" placeholder="you@example.com" />
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea id="message" name="message" required className="contact__textarea" placeholder="What would you like to talk about?" rows={5}></textarea>
              </div>
              
              <MagneticButton className="contact__submit-btn">
                Open in email app
                <Mail size={18} />
              </MagneticButton>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
