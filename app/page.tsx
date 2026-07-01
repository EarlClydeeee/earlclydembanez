import Link from 'next/link'
import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, Building2, Cloud, Code2, Database, GraduationCap, Trophy } from 'lucide-react'
import DitheredPhoto from './components/DitheredPhoto'

/* ── Data ────────────────────────────────────────────────────────── */

const EDUCATION = [
  {
    year: '2023–2027',
    school: 'Polytechnic University of the Philippines',
    degree: 'BS Computer Engineering · Specialization in AI & Machine Learning',
    location: 'Sta. Mesa, Manila',
  },
  {
    year: '2021–2023',
    school: 'Our Lady of the Holy Rosary School',
    degree: 'Senior High School · Graduated with High Honors',
    location: 'Tanza, Cavite',
  },
]

const PROJECTS_PREVIEW: {
  id: number
  Icon: LucideIcon
  title: string
  desc: string
  stack: string[]
  image: string
  href: string
  featured: boolean
  badge: string | null
}[] = [
  {
    id: 1,
    Icon: Trophy,
    title: 'Drowzi',
    desc: 'Cursor Manila Hack Sprint champion project. Built the ML media-processing pipeline with Python, OpenCV, and rapid prototyping workflows.',
    stack: ['Python', 'OpenCV', 'Machine Learning'],
    image: '/Drowzi.png',
    href: '/projects',
    featured: true,
    badge: '#1 Hack Sprint',
  },
  {
    id: 2,
    Icon: Building2,
    title: 'ACCESS Official Website',
    desc: 'Organizational directory and asset management portal with Supabase RBAC, borrowing workflows, inventory tracking, and governance data.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL'],
    image: '/AccessWeb.png',
    href: '/projects',
    featured: false,
    badge: null,
  },
  {
    id: 3,
    Icon: Cloud,
    title: 'AWSCCPUP Website',
    desc: 'Membership platform for AWS Cloud Club PUP with public pages, member directory, profile management, search, and FastAPI backend.',
    stack: ['Astro', 'React', 'FastAPI', 'PostgreSQL'],
    image: '/AWSCCWeb.png',
    href: '/projects',
    featured: false,
    badge: null,
  },
]

const EXPERIENCE_PREVIEW = [
  {
    year: '2025',
    role: 'Software Engineering Front-End Lead',
    company: 'Hayakawa Electronics Philippines Corp.',
    desc: 'Developed and deployed the Output Monitoring System, tracking 2M+ production cycles and reducing reporting time by 80%.',
  },
  {
    year: '2025–',
    role: 'Software Development Co-Lead',
    company: 'PUP Microsoft Student Community',
    desc: 'Mentors developers in modern engineering workflows, frontend-backend integration, and scalable UI architecture.',
  },
  {
    year: '2023–',
    role: 'Lead Senior Software Developer',
    company: 'ACCESS – PUP',
    desc: 'Architected CPE Fair platform modules and leads development of the official ACCESS-PUP website.',
  },
]

const CERTS_PREVIEW: { Icon: LucideIcon; name: string; issuer: string; verify: string }[] = [
  { Icon: BrainCircuit, name: 'AI Engineer for Developers Associate', issuer: 'DataCamp',          verify: 'https://www.datacamp.com/certificate/AIEDA0016819925463' },
  { Icon: Database,     name: 'Data Analyst Associate',              issuer: 'DataCamp',          verify: 'https://www.datacamp.com/certificate/AIEDA0016819925463' },
  { Icon: GraduationCap, name: 'Foundations of Project Management',  issuer: 'Google / Coursera', verify: 'https://www.coursera.org/account/accomplishments/verify/MP69EEBGAX4C' },
]

const RECS_PREVIEW = [
  {
    text: 'CHED Merit Scholar, DTI x Google Scholar, CARD SME Scholar, DataCamp Scholar, and DataCamp ML Team Top 4 Learner.',
    name: 'Scholarship Record',
    initials: 'SR',
    title: 'ACADEMIC RECOGNITION',
  },
  {
    text: 'Won 1st Place at Cursor Manila Hack Sprint 2026 by contributing the ML media-processing pipeline for Drowzi.',
    name: 'Cursor Manila',
    initials: 'CM',
    title: 'HACK SPRINT CHAMPION',
  },
  {
    text: 'Reduced factory reporting time by 80% through OMS, ETL pipeline design, and a hybrid relational + JSON schema.',
    name: 'Hayakawa Electronics',
    initials: 'HE',
    title: 'ENGINEERING IMPACT',
  },
]

const AFFILIATIONS_PREVIEW = [
  {
    abbr: 'ACC',
    name: 'ACCESS – PUP',
    role: 'LEAD SENIOR SOFTWARE DEVELOPER',
    desc: 'Leads web platforms and CPE Fair systems for Computer Engineering students.',
  },
  {
    abbr: 'AWS',
    name: 'AWS Cloud Club – PUP Manila',
    role: 'DEVELOPMENT TEAM',
    desc: 'Builds club platforms including LMS, website, and membership systems.',
  },
  {
    abbr: 'MSC',
    name: 'PUP Microsoft Student Community',
    role: 'SOFTWARE DEVELOPMENT CO-LEAD',
    desc: 'Mentors developers and leads project architecture workflows.',
  },
]

type GitHubEvent = {
  type: string
  created_at: string
  repo: { name: string }
  payload?: {
    commits?: {
      sha: string
      message: string
      url: string
    }[]
  }
}

type GitHubCommit = {
  id: string
  repo: string
  message: string
  date: string
  url: string
}

async function getGitHubCommits(): Promise<GitHubCommit[]> {
  try {
    const res = await fetch('https://api.github.com/users/EarlClydeeee/events/public', {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    })

    if (!res.ok) return []

    const events = (await res.json()) as GitHubEvent[]

    return events
      .filter(event => event.type === 'PushEvent')
      .flatMap(event =>
        (event.payload?.commits ?? []).map(commit => ({
          id: commit.sha,
          repo: event.repo.name.replace('EarlClydeeee/', ''),
          message: commit.message.split('\n')[0],
          date: formatCommitDate(event.created_at),
          url: commit.url.replace('api.github.com/repos', 'github.com').replace('/commits/', '/commit/'),
        }))
      )
      .slice(0, 6)
  } catch {
    return []
  }
}

function formatCommitDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

/* ── Page ──────────────────────────────────────────────────────── */

export default async function Home() {
  const commits = await getGitHubCommits()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero page-container" aria-label="Introduction">
        <div className="hero__split">
          {/* Dithered photo */}
          <div className="hero__photo-wrap">
            <DitheredPhoto
              src="/Earl.png"
              width={304}
              height={336}
              alt="Earl Clyde Micolob Bañez"
            />
          </div>

          {/* Bio */}
          <div className="hero__text">
            <h1 className="hero__name">E.C. Bañez</h1>
            <p className="hero__bio">
              I&rsquo;m a full-stack engineer and Computer Engineering student at PUP. I build web apps, embedded systems, and industrial automation tools.
            </p>
            <p className="hero__bio-2">
              Right now I&rsquo;m shipping projects every month. I love turning rough problems into clean, working systems.
            </p>

            <ul className="hero__socials" aria-label="Social links">
              <li>
                <a
                  href="https://github.com/EarlClydeeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  github ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/earl-clyde-ba%C3%B1ez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  linkedin ↗
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/earlclyde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  instagram ↗
                </a>
              </li>
              <li>
                <a href="mailto:earlclyde.mbanez@gmail.com" className="hero__social-link">
                  email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="proof-strip" role="list" aria-label="Quick stats">
          <div className="proof-strip__stat" role="listitem">
            <span className="proof-strip__value">—</span>
            <span className="proof-strip__label">community</span>
          </div>
          <div className="proof-strip__stat" role="listitem">
            <span className="proof-strip__value">3+</span>
            <span className="proof-strip__label">yrs building</span>
          </div>
          <div className="proof-strip__stat" role="listitem">
            <span className="proof-strip__value">10+</span>
            <span className="proof-strip__label">projects shipped</span>
          </div>
          <div className="proof-strip__stat" role="listitem">
            <span className="proof-strip__value">PUP</span>
            <span className="proof-strip__label">CompE 2026</span>
          </div>
        </div>
      </section>

      {/* ── 01 — Education ───────────────────────────────────── */}
      <section
        id="education"
        className="landing-section page-container"
        aria-labelledby="education-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="education-heading">01 — education</span>
        </div>

        <ol>
          {EDUCATION.map((edu, i) => (
            <li key={i} className="edu-entry">
              <span className="edu-entry__year">{edu.year}</span>
              <div>
                <div className="edu-entry__school">{edu.school}</div>
                <div className="edu-entry__degree">{edu.degree} · {edu.location}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 02 — Projects ───────────────────────────────────── */}
      <section
        id="projects"
        className="landing-section page-container"
        aria-labelledby="projects-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="projects-heading">02 — projects</span>
          <Link href="/projects" className="section-view-all">ALL PROJECTS →</Link>
        </div>

        <ul className="project-list project-showcase" role="list">
          {PROJECTS_PREVIEW.map(p => (
            <li key={p.id}>
              <div className="project-card">
                <div className="project-card__media" aria-hidden="true">
                  <Image src={p.image} alt="" fill sizes="340px" />
                </div>
                <div className="project-card__icon" aria-hidden="true">
                  <p.Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="project-card__body">
                  <div className="project-card__badges">
                    {p.badge && (
                      <span className="badge-pill badge-pill--featured">{p.badge}</span>
                    )}
                  </div>
                  <h3 className="project-card__title">{p.title}</h3>
                  <p className="project-card__desc">{p.desc}</p>
                  <ul className="project-card__stack" aria-label="Tech stack" role="list">
                    {p.stack.map(t => (
                      <li key={t}><span className="stack-tag">{t}</span></li>
                    ))}
                  </ul>
                  <div className="project-card__links">
                    <Link href={p.href} className="project-card__link">View project ↗</Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 03 — Experience ─────────────────────────────────── */}
      <section
        id="experience"
        className="landing-section page-container"
        aria-labelledby="experience-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="experience-heading">03 — experience</span>
          <Link href="/experience" className="section-view-all">FULL HISTORY →</Link>
        </div>

        <ol className="timeline" aria-label="Work history">
          {EXPERIENCE_PREVIEW.map((item, i) => (
            <li key={i} className="timeline-item">
              <span className="timeline-item__year">{item.year}</span>
              <div className="timeline-item__body">
                <div className="timeline-item__role">{item.role}</div>
                {item.desc && <p className="timeline-item__desc">{item.desc}</p>}
              </div>
              <div className="timeline-item__company">{item.company}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 04 — Certifications ─────────────────────────────── */}
      <section
        id="certifications"
        className="landing-section page-container"
        aria-labelledby="certs-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="certs-heading">04 — certifications</span>
          <Link href="/certifications" className="section-view-all">ALL CERTIFICATIONS →</Link>
        </div>

        <ul className="cert-grid" role="list">
          {CERTS_PREVIEW.map((cert, i) => (
            <li key={i}>
              <div className="cert-card">
                <div className="cert-card__logo" aria-hidden="true"><cert.Icon size={20} strokeWidth={1.5} /></div>
                <p className="cert-card__name">{cert.name}</p>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <a href={cert.verify} className="cert-card__verify">‹ VERIFY ›</a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 05 — Recommendations ────────────────────────────── */}
      <section
        id="recommendations"
        className="landing-section page-container"
        aria-labelledby="recs-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="recs-heading">05 — recommendations</span>
          <Link href="/recommendations" className="section-view-all">ALL RECOMMENDATIONS →</Link>
        </div>

        <ul className="rec-grid" role="list">
          {RECS_PREVIEW.map((rec, i) => (
            <li key={i}>
              <article className="rec-card">
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
      </section>

      {/* ── 06 — Affiliations ───────────────────────────────── */}
      <section
        id="affiliations"
        className="landing-section page-container"
        aria-labelledby="affil-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="affil-heading">06 — affiliations</span>
          <Link href="/affiliations" className="section-view-all">ALL AFFILIATIONS →</Link>
        </div>

        <ul className="affil-list" role="list">
          {AFFILIATIONS_PREVIEW.map((a, i) => (
            <li key={i} className="affil-item">
              <div className="affil-item__logo" aria-hidden="true">{a.abbr}</div>
              <div className="affil-item__body">
                <div className="affil-item__name">{a.name}</div>
                <span className="affil-item__role-badge">{a.role}</span>
                <p className="affil-item__desc">{a.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── 07 — GitHub ─────────────────────────────────────── */}
      <section
        id="github"
        className="landing-section page-container"
        aria-labelledby="github-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="github-heading">07 — github</span>
          <a
            href="https://github.com/EarlClydeeee"
            target="_blank"
            rel="noopener noreferrer"
            className="section-view-all"
          >
            @EARLCLYDEEEE ↗
          </a>
        </div>

        <div className="github-strip">
          <div className="github-contrib-map" aria-label="Recent GitHub activity pattern">
            {Array.from({ length: 98 }, (_, i) => {
              const active = commits.length > 0 && commits.some((_, ci) => (i + ci * 9) % 17 === 0)

              return <span key={i} className={active ? 'is-active' : ''} />
            })}
          </div>

          <div className="commit-feed" aria-label="Recent GitHub commits">
            {commits.length > 0 ? (
              commits.map(commit => (
                <a
                  key={commit.id}
                  href={commit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="commit-row"
                >
                  <span className="commit-row__message">{commit.message}</span>
                  <span className="commit-row__meta">{commit.repo} · {commit.date}</span>
                </a>
              ))
            ) : (
              <p className="commit-feed__empty">No public GitHub commits found right now.</p>
            )}
          </div>
        </div>
      </section>

      {/* ── Say hello ───────────────────────────────────────── */}
      <section
        id="contact"
        className="landing-section page-container"
        aria-labelledby="contact-heading"
      >
        <div className="section-chrome">
          <span className="section-label" id="contact-heading">say hello</span>
        </div>

        <div className="contact-cta">
          <p className="contact-cta__text">
            For work, collabs &amp; everything else, reach me at
          </p>
          <a href="mailto:earlclyde.mbanez@gmail.com" className="contact-cta__email">
            earlclyde.mbanez@gmail.com
          </a>
          <div className="contact-cta__actions">
            <a href="mailto:earlclyde.mbanez@gmail.com" className="btn-pill">
              Open mail app
            </a>
            <a
              href="https://www.linkedin.com/in/earl-clyde-ba%C3%B1ez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-pill"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/EarlClydeeee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-pill"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
