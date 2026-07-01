import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Award, Building2, Cloud, Gauge, GraduationCap, IdCard, RadioTower } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects — Earl Clyde Micolob Bañez',
  description: 'Products and platforms I\'ve designed and shipped.',
}

const PROJECTS: {
  id: number
  Icon: LucideIcon
  title: string
  tagline: string
  desc: string
  stack: string[]
  badges: string[]
  image: string
  live: string
  github: string
  featured: boolean
}[] = [
  {
    id: 1,
    Icon: Award,
    title: 'Drowzi',
    tagline: 'Cursor Manila Hack Sprint champion project',
    desc: 'Won 1st Place at Cursor Manila Hack Sprint 2026. Developed the machine-learning media-processing pipeline responsible for intelligent content handling under a competitive, time-constrained hackathon environment.',
    stack: ['Python', 'OpenCV', 'DataPipe', 'Machine Learning', 'Rapid Prototyping'],
    badges: ['Hack Sprint Champion', '2026'],
    image: '/Drowzi.png',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    Icon: Building2,
    title: 'ACCESS Official Website',
    tagline: 'Organizational directory and asset management portal',
    desc: 'Led frontend architecture for a centralized ACCESS-PUP portal consolidating organizational governance data and equipment asset tracking. Built the asset management interface and borrowing workflow with Supabase RBAC, approval status tracking, return logs, and auditable inventory records.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    badges: ['Frontend Lead', 'Production'],
    image: '/AccessWeb.png',
    live: 'https://access-web-tau.vercel.app/',
    github: '#',
    featured: false,
  },
  {
    id: 3,
    Icon: Cloud,
    title: 'AWSCCPUP Official Website',
    tagline: 'Cloud club website and membership management system',
    desc: 'Contributed to a full-stack membership platform supporting public pages, member directory, profile management, and search/filter functionality via a FastAPI REST API with PostgreSQL. Worked in Astro Islands Architecture and helped deliver a production-ready responsive platform.',
    stack: ['Astro', 'React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL'],
    badges: ['Development Team'],
    image: '/AWSCCWeb.png',
    live: 'https://www.awsccpup.cloud/contributors',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    Icon: RadioTower,
    title: 'TEDxPUP Official Website',
    tagline: 'Event website for TEDxPUP',
    desc: 'Developed the official TEDxPUP website using React, delivering a structured platform that showcased event details for attendees and the wider community.',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    badges: ['Community Platform'],
    image: '/TedxPUP.png',
    live: 'https://www.tedxpup.org/contributors',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    Icon: Gauge,
    title: 'Output Monitoring System',
    tagline: 'Real-time factory output monitoring platform',
    desc: 'Built and deployed OMS at Hayakawa Electronics Philippines Corp., tracking 2M+ machine and applicator production cycles. Designed a modular frontend and contributed to PHP/MySQL backend logic for predictive maintenance, component lifespan tracking, and reporting workflows that reduced reporting time by 80%.',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
    badges: ['2M+ cycles tracked', '80% faster reporting'],
    image: '/OMS.jpg',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    Icon: GraduationCap,
    title: 'AWS Skill Builder LMS',
    tagline: 'Gamified learning platform for AWS Cloud Club PUP',
    desc: 'Implemented the leaderboard system across the public landing page and in-platform department rankings using dynamic point-based ordering to drive member engagement across seven technical departments.',
    stack: ['React', 'TypeScript', 'Express.js', 'Supabase', 'AWS'],
    badges: ['LMS', '7 departments'],
    image: '/SkillBuilder.png',
    live: 'https://sbd.awsccpup.cloud/contributors',
    github: '#',
    featured: false,
  },
  {
    id: 7,
    Icon: IdCard,
    title: 'AWS Cloud Club ID Finder',
    tagline: 'Modernized member ID finder interface',
    desc: 'Led the complete frontend redesign, transforming the interface from a legacy RetroUI layout into a modern production-grade design aligned with the Skill Builder Department LMS visual system.',
    stack: ['Next.js', 'Tailwind CSS'],
    badges: ['Frontend Redesign'],
    image: '/IDFinder.png',
    live: 'https://www.awsccpup.cloud/id-finder',
    github: '#',
    featured: false,
  },
]

export default function ProjectsPage() {
  return (
    <>
      <div className="page-hero page-container">
        <p className="page-hero__eyebrow">Portfolio</p>
        <h1 className="page-hero__title">projects</h1>
        <p className="page-hero__desc">
          Products and platforms I&rsquo;ve designed and shipped — spanning full-stack web, embedded systems, and industrial automation.
        </p>
      </div>

      <div className="sub-page-content page-container">
        <ul className="project-list" role="list">
          {PROJECTS.map(p => (
            <li key={p.id}>
              <article className="project-card" style={{ flexDirection: 'column', gap: 'var(--space-xl)' }}>
                <div className="project-card__media project-card__media--wide">
                  <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="(max-width: 740px) 100vw, 680px" />
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-xl)', alignItems: 'flex-start' }}>
                  <div className="project-card__icon" aria-hidden="true"><p.Icon size={20} strokeWidth={1.5} /></div>
                  <div className="project-card__body">
                    <div className="project-card__badges">
                      {p.badges.map(b => (
                        <span key={b} className={`badge-pill${p.featured ? ' badge-pill--featured' : ''}`}>
                          {b}
                        </span>
                      ))}
                    </div>
                    <h2 className="project-card__title">{p.title}</h2>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)', marginTop: '0.2rem' }}>
                      {p.tagline}
                    </p>
                  </div>
                </div>

                <p className="project-card__desc" style={{ maxWidth: '64ch' }}>
                  {p.desc}
                </p>

                <ul className="project-card__stack" aria-label="Tech stack" role="list">
                  {p.stack.map(t => (
                    <li key={t}><span className="stack-tag">{t}</span></li>
                  ))}
                </ul>

                <div className="project-card__links">
                  <a href={p.live} className="project-card__link">Live ↗</a>
                  <a href={p.github} className="project-card__link">GitHub ↗</a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center' }}>
          <Link
            href="/#projects"
            style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}
          >
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
