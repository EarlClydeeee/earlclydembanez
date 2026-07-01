import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stack — Earl Clyde Mbanez',
  description: 'Tools, languages, and frameworks I work with.',
}

const STACK_CATEGORIES = [
  {
    heading: 'Languages',
    techs: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'C', 'C++', 'HTML', 'CSS'],
  },
  {
    heading: 'Frontend',
    techs: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    heading: 'Backend',
    techs: ['Node.js', 'Express', 'Laravel', 'REST APIs', 'WebSockets', 'MQTT'],
  },
  {
    heading: 'Databases',
    techs: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  },
  {
    heading: 'Embedded & IoT',
    techs: ['Arduino', 'Raspberry Pi', 'ESP32', 'Microcontrollers', 'Serial Comm', 'Sensors'],
  },
  {
    heading: 'DevOps & Tools',
    techs: ['Git', 'GitHub', 'Docker', 'Linux', 'Nginx', 'VS Code', 'Postman'],
  },
  {
    heading: 'Learning Now',
    techs: ['AWS', 'Kubernetes', 'React Native', 'GraphQL'],
  },
]

export default function StackPage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Technologies</p>
        <h1 className="page-hero__title">stack</h1>
        <p className="page-hero__desc">
          Tools and technologies I reach for across full-stack web, embedded systems, and automation projects.
        </p>
      </div>

      <div className="stack-page-content page-container">
        {STACK_CATEGORIES.map(cat => (
          <div key={cat.heading} className="stack-category">
            <p className="stack-category__heading">{cat.heading}</p>
            <ul className="tech-grid" aria-label={cat.heading} role="list">
              {cat.techs.map(tech => (
                <li key={tech}>
                  <span className="tech-pill">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div style={{ marginTop: 'var(--space-3xl)', textAlign: 'center' }}>
          <Link href="/#experience" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
