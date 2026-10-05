import { Trophy } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal/SectionReveal';
import { awards, certifications, certificateHref, asset } from '../../data/credentials';
import './Awards.css';

export function CredLogo({ item, size = 48 }) {
  if (item.logo) {
    return (
      <span className={`cred-logo ${item.logoFill ? 'cred-logo--fill' : ''}`} style={{ '--size': `${size}px` }}>
        <img src={asset(item.logo)} width={size} height={size} alt="" />
      </span>
    );
  }
  return (
    <span className="cred-logo cred-logo--icon" style={{ '--size': `${size}px` }} aria-hidden="true">
      <Trophy size={Math.round(size / 2)} strokeWidth={1.6} />
    </span>
  );
}

function ViewButton({ item, variant }) {
  const href = certificateHref(item);
  if (!href) return null;
  const external = href.startsWith('http');
  return (
    <a
      className={`cred-btn ${variant ? `cred-btn--${variant}` : ''}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      View certificate
    </a>
  );
}

function CredCard({ item, heading: Heading = 'h3' }) {
  return (
    <article className="cred-card premium-card">
      <div className="cred-card__top">
        <CredLogo item={item} />
        <span className="cred-card__date">{item.date}</span>
      </div>
      <Heading className="cred-card__title">{item.title}</Heading>
      <p className="cred-card__issuer">{item.issuer}</p>
      {item.note && <p className="cred-card__note">{item.note}</p>}
      {item.credentialId && !item.lead && <p className="cred-card__id">Certificate {item.credentialId}</p>}
      <div className="cred-card__action"><ViewButton item={item} /></div>
    </article>
  );
}

export default function Awards() {
  const lead = awards.find((a) => a.lead);
  const others = awards.filter((a) => !a.lead);

  return (
    <section id="awards" className="awards section-padding">
      <div className="section-container">
        <SectionReveal>
          <div className="section-label">Recognition</div>
          <div className="awards__head">
            <h2 className="awards__title">
              Hackathons and <span className="gradient-text">awards</span>.
            </h2>
            <p className="awards__subtitle">Every certificate is linked, so you can check it.</p>
          </div>
        </SectionReveal>

        <div className="awards__grid">
          {lead && (
            <SectionReveal className="awards__lead-wrap">
              <article className="cred-card cred-card--lead">
                <div className="cred-card__top">
                  <CredLogo item={lead} />
                  <span className="cred-card__date">{lead.date}</span>
                </div>
                <h3 className="cred-card__title">{lead.title}</h3>
                <p className="cred-card__issuer">{lead.issuer}</p>
                <p className="cred-card__note">
                  {lead.note}{' '}
                  <a href={`#${lead.project}`}>Read the case study</a>
                </p>
                <a className="cred-card__proof" href={certificateHref(lead)} tabIndex={-1} aria-hidden="true">
                  <img src={asset(lead.image)} width="1800" height="1272" alt="" loading="lazy" />
                </a>
                <div className="cred-card__action"><ViewButton item={lead} variant="light" /></div>
              </article>
            </SectionReveal>
          )}
          {others.map((item, i) => (
            <SectionReveal key={item.slug} delay={0.08 * (i + 1)}>
              <CredCard item={item} />
            </SectionReveal>
          ))}
        </div>

        <h3 className="awards__subhead">Certifications</h3>
        <div className="awards__certs">
          {certifications.map((item, i) => (
            <SectionReveal key={item.slug} delay={0.06 * i}>
              <CredCard item={item} heading="h4" />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
