import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { allCredentials, asset } from '../../data/credentials';
import { CredLogo } from '../../sections/Awards/Awards';
import { pageTransition } from '../../utils/animations';
import './Certificate.css';

export default function Certificate() {
  const { slug } = useParams();
  const cert = allCredentials.find((c) => c.slug === slug && c.image);

  useEffect(() => {
    document.title = cert ? `${cert.title}, Haven Leno J` : 'Certificate not found, Haven Leno J';
    return () => { document.title = 'Haven Leno J · Full-stack developer'; };
  }, [cert]);

  if (!cert) {
    return (
      <main className="cert-page section-container">
        <h1 className="cert-page__title">Certificate not found</h1>
        <p className="cert-page__missing">There's no certificate at this address.</p>
        <Link to="/" className="cert-page__back"><ArrowLeft size={16} /> Back to the home page</Link>
      </main>
    );
  }

  return (
    <motion.main className="cert-page" initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      <div className="section-container">
        <Link to="/" className="cert-page__back" onClick={() => setTimeout(() => document.getElementById('awards')?.scrollIntoView(), 50)}>
          <ArrowLeft size={16} /> All certificates and awards
        </Link>

        <div className="cert-page__head">
          <div>
            <div className="cert-page__issuer"><CredLogo item={cert} size={44} /> <span>{cert.issuer}</span></div>
            <h1 className="cert-page__title">{cert.title}</h1>
            <div className="cert-page__actions">
              <a className="cert-page__btn cert-page__btn--primary" href={asset(cert.pdf)} download>
                <Download size={18} /> Download the PDF
              </a>
              {cert.verifyUrl && (
                <a className="cert-page__btn" href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                  {cert.verifyLabel} <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
          <dl className="cert-page__facts premium-card">
            {cert.rows.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>

        <figure className="cert-page__figure">
          <img src={asset(cert.image)} width="1800" height="1272" alt={cert.alt} />
          <figcaption>
            {cert.confirm}
            {cert.confirmUrl && (
              <> <a href={cert.confirmUrl} target="_blank" rel="noopener noreferrer">Visit {cert.confirmUrl.replace('https://www.', '')}</a></>
            )}
          </figcaption>
        </figure>
      </div>
    </motion.main>
  );
}
