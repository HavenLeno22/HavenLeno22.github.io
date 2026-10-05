// Every award and certificate on the site. Pages under /certificate/:slug are built from
// entries that have an `image`; entries with `externalUrl` link to the issuer instead.

export const awards = [
  {
    slug: 'sensora-2',
    title: 'Winner, Implementation Category',
    issuer: "Sensora 2.0, graVITas '26, VIT Vellore",
    date: 'September 2026',
    logo: 'logos/gravitas.webp',
    note: "Won with SurgeGuard, our team's real-time crowd-safety platform.",
    project: '/project/surgeguard',
    credentialId: 'GR2026003761',
    image: 'certificates/sensora-2/certificate.webp',
    pdf: 'certificates/sensora-2/Haven-Leno-J-Sensora-2.0-Certificate.pdf',
    rows: [
      ['Awarded to', 'Haven Leno J'],
      ['Result', 'Winner, Implementation Category'],
      ['Event', "Sensora 2.0 at graVITas '26, the annual techno-management fest of VIT Vellore"],
      ['Date', 'September 2026'],
      ['Certificate', 'GR2026003761'],
    ],
    confirm: "Signed by Dr. Sudhakar N, Convenor, graVITas '26, and Dr. Partha Sharathi Mallick, Pro-Vice Chancellor, VIT.",
    alt: "Certificate of achievement from graVITas '26 at VIT Vellore presented to Haven Leno J, GR2026003761, for securing the winner position in the Implementation Category at Sensora 2.0, September 2026.",
    lead: true,
  },
  {
    slug: 'celestia-2',
    title: 'Participant',
    issuer: 'Celestia 2.0, VIT Vellore',
    date: '2026',
    logo: 'logos/vit.webp',
    externalUrl: 'https://unstop.com/certificate-preview/b45d35ba-08b8-4441-90f4-a86046a5ddd2',
  },
  {
    slug: 'hack-to-the-future',
    title: 'Participant',
    issuer: 'Hack To The Future, Easwari Engineering College',
    date: '2025',
    icon: 'trophy',
    note: 'Built AgriTrace for the supply-chain transparency track.',
  },
];

export const certifications = [
  {
    slug: 'genlab-internship',
    title: 'Internship completion: MERN Stack Development',
    issuer: 'GenLab Pvt. Ltd.',
    date: 'August 2026',
    logo: 'logos/genlab.svg',
    logoFill: true,
    credentialId: 'GL/INT/26/183',
    image: 'certificates/genlab-internship/certificate.webp',
    pdf: 'certificates/genlab-internship/Haven-Leno-J-GenLab-Internship-Certificate.pdf',
    rows: [
      ['Awarded to', 'Haven Leno J'],
      ['Internship', 'MERN Stack Development, on-site'],
      ['Dates', '15 June to 14 August 2026'],
      ['Certificate', 'GL/INT/26/183'],
      ['Signed by', 'Henrich P, CEO, GenLab Pvt. Ltd.'],
    ],
    confirm: 'To confirm it, contact GenLab through genlab.cc and quote certificate GL/INT/26/183.',
    confirmUrl: 'https://www.genlab.cc',
    alt: 'Certificate of completion from GenLab presented to Haven Leno J for a MERN Stack Development internship, June 15 to August 14, 2026, ID GL/INT/26/183, signed by Henrich P, CEO.',
  },
  {
    slug: 'scholarhat-cpp',
    title: 'C++ Programming Course for Beginners',
    issuer: 'ScholarHat',
    date: 'April 2025',
    logo: 'logos/scholarhat.webp',
    credentialId: 'WD1C240425',
    image: 'certificates/scholarhat-cpp/certificate.webp',
    pdf: 'certificates/scholarhat-cpp/Haven-Leno-J-ScholarHat-Cpp-Certificate.pdf',
    verifyUrl: 'https://www.scholarhat.com/certificate/verify',
    verifyLabel: 'Verify on ScholarHat',
    rows: [
      ['Awarded to', 'Haven Leno'],
      ['Course', 'C++ Programming Course for Beginners'],
      ['Date', '24 April 2025'],
      ['Certificate', 'WD1C240425'],
    ],
    confirm: 'ScholarHat checks certificates by ID: enter WD1C240425 on its verification page.',
    alt: 'Certificate of completion from ScholarHat awarded to Haven Leno for the C++ Programming Course for Beginners, 24 April 2025, certificate ID WD1C240425.',
  },
  {
    slug: 'udemy-web-bootcamp',
    title: 'The Complete 2024 Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'July 2024',
    logo: 'logos/udemy.svg',
    credentialId: 'UC-07568831-d7bd-48e8-a541-47c30a354d30',
    externalUrl: 'https://www.udemy.com/certificate/UC-07568831-d7bd-48e8-a541-47c30a354d30/',
  },
];

export const allCredentials = [...awards, ...certifications];

/** Where "View certificate" goes for an entry, or null if there is nothing to show. */
export function certificateHref(c) {
  if (c.image) return `#/certificate/${c.slug}`;
  if (c.externalUrl) return c.externalUrl;
  return null;
}

export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
