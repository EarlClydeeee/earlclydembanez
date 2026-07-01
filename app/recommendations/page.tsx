import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recommendations — Earl Clyde Micolob Bañez',
  description: 'What leaders, teammates, and mentors say about working with Earl Clyde.',
}

const RECOMMENDATIONS = [
  {
    text: 'CHED Merit Scholar, DTI x Google Scholar, CARD SME Scholar, DataCamp Scholar, and Top 4 Learner for the DataCamp Machine Learning Team.',
    name: 'Scholarship Record',
    initials: 'SR',
    title: 'Academic recognition',
    source: 'Resume',
  },
  {
    text: 'Won 1st Place at the Cursor Manila Hack Sprint 2026 by contributing the machine-learning media-processing pipeline for Drowzi.',
    name: 'Cursor Manila Hack Sprint',
    initials: 'CM',
    title: 'Champion project',
    source: 'Resume',
  },
  {
    text: 'Reduced factory reporting time by 80% through the Output Monitoring System, ETL pipeline design, and a hybrid relational + JSON schema.',
    name: 'Hayakawa Electronics',
    initials: 'HE',
    title: 'Engineering impact',
    source: 'Resume',
  },
  {
    text: 'Represents Computer Engineering students as Senior Councilor in the College of Engineering Student Council and coordinates inter-departmental events.',
    name: 'COE Student Council',
    initials: 'CS',
    title: 'Leadership role',
    source: 'Resume',
  },
]

export default function RecommendationsPage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Social proof</p>
        <h1 className="page-hero__title">recommendations</h1>
        <p className="page-hero__desc">
          Resume-backed signals: scholarships, awards, measurable project impact, and leadership roles.
        </p>
      </div>

      <div className="sub-page-content page-container">
        <ul className="rec-grid" role="list" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {RECOMMENDATIONS.map((rec, i) => (
            <li key={i}>
              <article className="rec-card" style={{ height: '100%' }}>
                <span className="rec-card__quote-mark" aria-hidden="true">&ldquo;</span>
                <p className="rec-card__text">{rec.text}</p>
                <div className="rec-card__author">
                  <div className="rec-card__avatar" aria-hidden="true">{rec.initials}</div>
                  <div className="rec-card__author-info">
                    <span className="rec-card__author-name">{rec.name}</span>
                    <span className="rec-card__author-title">{rec.title}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center' }}>
          <Link href="/#recommendations" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
