import type { Metadata } from 'next'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, BriefcaseBusiness, Cloud, Database, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications — Earl Clyde Micolob Bañez',
  description: 'Credentials and certifications, each verifiable at its source.',
}

const CERT_GROUPS: { heading: string; certs: { Icon: LucideIcon; name: string; issuer: string; verify: string }[] }[] = [
  {
    heading: 'DataCamp',
    certs: [
      { Icon: BrainCircuit, name: 'AI Engineer for Developers Associate', issuer: 'DataCamp', verify: 'https://www.datacamp.com/certificate/AIEDA0016819925463' },
      { Icon: Database,     name: 'Data Analyst Associate',               issuer: 'DataCamp', verify: 'https://www.datacamp.com/certificate/AIEDA0016819925463' },
      { Icon: Server,       name: 'Data Engineer',                        issuer: 'DataCamp', verify: 'https://www.datacamp.com/certificate/AIEDA0016819925463' },
      { Icon: Cloud,        name: 'AWS Cloud Practitioner',               issuer: 'DataCamp', verify: 'https://www.datacamp.com/certificate/AIEDA0016819925463' },
      { Icon: Cloud,        name: 'Google Cloud Certifications',          issuer: 'DataCamp', verify: 'https://www.datacamp.com/certificate/AIEDA0016819925463' },
    ],
  },
  {
    heading: 'Project Management',
    certs: [
      { Icon: BriefcaseBusiness, name: 'Foundations of Project Management', issuer: 'Google / Coursera', verify: 'https://www.coursera.org/account/accomplishments/verify/MP69EEBGAX4C' },
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
                    <div className="cert-card__logo" aria-hidden="true"><cert.Icon size={20} strokeWidth={1.5} /></div>
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
