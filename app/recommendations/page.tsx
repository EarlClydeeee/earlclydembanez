import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recommendations — Earl Clyde Mbanez',
  description: 'What leaders, teammates, and mentors say about working with Earl Clyde.',
}

const RECOMMENDATIONS = [
  {
    text: 'Earl is one of the most driven students I\'ve taught. His ability to bridge hardware and software sets him apart from his peers. His capstone project demonstrated a maturity in systems design that\'s rare at the undergraduate level.',
    name: 'Prof. Juan Dela Cruz',
    initials: 'JD',
    title: 'Faculty, PUP College of Engineering',
    source: 'LinkedIn',
  },
  {
    text: 'Working with Earl on our capstone project was genuinely exceptional. He took ownership of the architecture, kept the team unblocked, and delivered production-quality code under real time pressure. He\'s the kind of engineer teams want.',
    name: 'Maria Santos',
    initials: 'MS',
    title: 'Classmate & Capstone Teammate, PUP',
    source: 'LinkedIn',
  },
  {
    text: 'Earl consistently delivers. He asked the right questions upfront, understood the business requirements quickly, and shipped a system that actually worked for our staff. His communication throughout was clear and professional.',
    name: 'Freelance Client',
    initials: 'FC',
    title: 'Business Owner, Philippines',
    source: 'Direct',
  },
  {
    text: 'He has a rare combination of technical depth and real-world pragmatism. Earl knows when to engineer properly and when to ship. He\'s a fast learner who takes feedback well and grows visibly between projects.',
    name: 'Mentor Name',
    initials: 'MN',
    title: 'Senior Software Engineer',
    source: 'Direct',
  },
]

export default function RecommendationsPage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Social proof</p>
        <h1 className="page-hero__title">recommendations</h1>
        <p className="page-hero__desc">
          What leaders, teammates, and mentors say about working with me — straight from the people I&rsquo;ve worked with.
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
