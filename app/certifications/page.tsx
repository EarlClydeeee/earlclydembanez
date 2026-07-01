import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Certifications — Earl Clyde Mbanez',
  description: 'Credentials and certifications, each verifiable at its source.',
}

const CERT_GROUPS = [
  {
    heading: 'Cloud & Infrastructure',
    certs: [
      { icon: '☁️', name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', verify: '#' },
      { icon: '🔵', name: 'Azure Fundamentals (AZ-900)', issuer: 'Microsoft', verify: '#' },
    ],
  },
  {
    heading: 'Web Development',
    certs: [
      { icon: '🟨', name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', verify: '#' },
      { icon: '⚛️', name: 'React Developer Certification', issuer: 'Meta / Coursera', verify: '#' },
      { icon: '🐘', name: 'PHP & Laravel Developer', issuer: 'Udemy', verify: '#' },
    ],
  },
  {
    heading: 'Engineering',
    certs: [
      { icon: '🤖', name: 'Introduction to Embedded Systems', issuer: 'Coursera / University of Colorado', verify: '#' },
      { icon: '🐍', name: 'Python for Everybody', issuer: 'University of Michigan / Coursera', verify: '#' },
    ],
  },
]

export default function CertificationsPage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Credentials</p>
        <h1 className="page-hero__title">certifications</h1>
        <p className="page-hero__desc">
          Credentials across cloud, web development, and engineering — each verifiable at its source.
        </p>
      </div>

      <div className="sub-page-content page-container">
        {CERT_GROUPS.map(group => (
          <div key={group.heading} className="content-group">
            <p className="content-group__heading">{group.heading}</p>
            <ul className="cert-grid" role="list">
              {group.certs.map((cert, i) => (
                <li key={i}>
                  <article className="cert-card">
                    <div className="cert-card__logo" aria-hidden="true">{cert.icon}</div>
                    <p className="cert-card__name">{cert.name}</p>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                    <a
                      href={cert.verify}
                      className="cert-card__verify"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.name}`}
                    >
                      ‹ VERIFY ›
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
          <Link href="/#certifications" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
