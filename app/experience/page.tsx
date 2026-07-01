import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Experience — Earl Clyde Mbanez',
  description: 'Work experience and professional history.',
}

const COMPANIES = [
  {
    abbr: 'CO',
    name: 'Company Name',
    type: 'Full-time',
    roles: [
      {
        title: 'Software Developer Intern',
        period: '2024 – PRESENT · ONGOING',
        desc: 'Replace this with a description of your role. What did you build? What problems did you solve? What technologies did you use? Keep it specific and results-focused.',
        skills: ['JavaScript', 'React', 'Node.js', 'Git'],
      },
    ],
  },
  {
    abbr: 'FL',
    name: 'Independent Freelance',
    type: 'Freelance · 1 yr',
    roles: [
      {
        title: 'Freelance Web Developer',
        period: '2023 – 2024',
        desc: 'Designed and built web applications for small businesses in the Philippines. Projects included an inventory management system, company websites, and a custom booking platform.',
        skills: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Tailwind CSS'],
      },
    ],
  },
  {
    abbr: 'PU',
    name: 'Polytechnic University of the Philippines',
    type: 'Academic',
    roles: [
      {
        title: 'BS Computer Engineering Student',
        period: '2022 – PRESENT',
        desc: 'Full-time student in the Computer Engineering program. Built hardware-software projects across embedded systems, industrial monitoring, and full-stack web development.',
        skills: ['C/C++', 'Arduino', 'Python', 'Digital Electronics', 'Networking'],
      },
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Career</p>
        <h1 className="page-hero__title">experience</h1>
        <p className="page-hero__desc">
          Building across full-stack web development, embedded systems, and industrial automation — from academic projects to client work.
        </p>
      </div>

      <div className="sub-page-content page-container">
        {COMPANIES.map((company, ci) => (
          <div key={ci} className="exp-company-block">
            <div className="exp-company-header">
              <div className="exp-company-logo" aria-hidden="true">{company.abbr}</div>
              <div className="exp-company-info">
                <div className="exp-company-name">{company.name}</div>
                <div className="exp-company-meta">{company.type}</div>
              </div>
            </div>

            <ol className="exp-role-list">
              {company.roles.map((role, ri) => (
                <li key={ri} className="exp-role-item">
                  <div className="exp-role-title">{role.title}</div>
                  <div className="exp-role-period">{role.period}</div>
                  <p className="exp-role-desc">{role.desc}</p>
                  <ul className="exp-role-skills" aria-label="Skills used" role="list">
                    {role.skills.map(s => (
                      <li key={s}><span className="stack-tag">{s}</span></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        ))}

        <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center' }}>
          <Link href="/#experience" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
