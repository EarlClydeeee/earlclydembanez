import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliations — Earl Clyde Mbanez',
  description: 'Associations and communities I am part of.',
}

const AFFILIATIONS = [
  {
    abbr: 'CE',
    name: 'PUP Computer Engineering Society',
    role: 'MEMBER',
    desc: 'The student organization for Computer Engineering students at the Polytechnic University of the Philippines. Active participant in tech talks, project showcases, and engineering competitions.',
    link: null,
    linkLabel: null,
  },
  {
    abbr: 'PH',
    name: 'AppBuildersPH',
    role: 'MEMBER',
    desc: 'A community of Filipino app builders, indie hackers, and software engineers. Sharing resources, collaborating on projects, and building together.',
    link: '#',
    linkLabel: 'facebook group ↗',
  },
  {
    abbr: 'UP',
    name: 'PUP Robotics Club',
    role: 'MEMBER',
    desc: 'Building autonomous and semi-autonomous robots, competing in inter-university robotics events, and mentoring junior engineering students in embedded systems.',
    link: null,
    linkLabel: null,
  },
  {
    abbr: 'OS',
    name: 'Open Source Philippines',
    role: 'CONTRIBUTOR',
    desc: 'Contributing to open source projects relevant to the Philippine developer community. Focused on developer tooling, documentation, and localization efforts.',
    link: '#',
    linkLabel: 'github org ↗',
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
