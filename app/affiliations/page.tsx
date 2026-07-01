import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliations — Earl Clyde Micolob Bañez',
  description: 'Associations and communities I am part of.',
}

const AFFILIATIONS = [
  {
    abbr: 'ACC',
    name: 'ACCESS – PUP',
    role: 'LEAD SENIOR SOFTWARE DEVELOPER',
    desc: 'Leads official web platforms, CPE Fair systems, and student engagement tools for Computer Engineering students.',
    link: null,
    linkLabel: null,
  },
  {
    abbr: 'AWS',
    name: 'AWS Cloud Club – PUP Manila',
    role: 'DEVELOPMENT TEAM',
    desc: 'Builds and maintains club platforms including the Skill Builder LMS, AWS Cloud Club website, and member systems.',
    link: 'https://www.awsccpup.cloud/contributors',
    linkLabel: 'website ↗',
  },
  {
    abbr: 'MS',
    name: 'PUP Microsoft Student Community',
    role: 'SOFTWARE DEVELOPMENT CO-LEAD',
    desc: 'Mentors developers in modern software engineering workflows, frontend-backend integration, UI architecture, and scalable projects.',
    link: null,
    linkLabel: null,
  },
  {
    abbr: 'GDG',
    name: 'Google Developer Group on Campus – PUP Manila',
    role: 'DATA & MACHINE LEARNING CADET',
    desc: 'Collaborates on data-driven apps, AI prototypes, and hackathons promoting Google Cloud, TensorFlow, and AI literacy.',
    link: null,
    linkLabel: null,
  },
  {
    abbr: 'IC',
    name: 'ICpEP.SE – PUP Manila',
    role: 'SOFTWARE ENGINEER & PROJECT MANAGER',
    desc: 'Led the certificate generation tool and managed development workflows across UI/UX, architecture, and version control.',
    link: null,
    linkLabel: null,
  },
  {
    abbr: 'COE',
    name: 'College of Engineering Student Council – PUP',
    role: 'SENIOR COUNCILOR',
    desc: 'Represents Computer Engineering students in college-wide planning and coordinates inter-departmental events.',
    link: null,
    linkLabel: null,
  },
  {
    abbr: 'SIN',
    name: 'SINAG Student Innovation Program',
    role: 'PRESIDENT',
    desc: 'Directed student innovation programs, mentored peers in project ideation, and led tech-driven community initiatives.',
    link: null,
    linkLabel: null,
  },
]

export default function AffiliationsPage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Community</p>
        <h1 className="page-hero__title">affiliations</h1>
        <p className="page-hero__desc">
          Associations and communities I&rsquo;m part of — and the ones I&rsquo;ve helped build.
        </p>
      </div>

      <div className="sub-page-content page-container">
        <ul className="affil-list" role="list">
          {AFFILIATIONS.map((a, i) => (
            <li key={i} className="affil-item">
              <div className="affil-item__logo" aria-hidden="true">{a.abbr}</div>
              <div className="affil-item__body">
                <div className="affil-item__name">{a.name}</div>
                <span className="affil-item__role-badge">{a.role}</span>
                <p className="affil-item__desc">{a.desc}</p>
                {a.link && (
                  <a
                    href={a.link}
                    className="affil-item__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${a.name} external link`}
                  >
                    {a.linkLabel}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center' }}>
          <Link href="/#affiliations" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
