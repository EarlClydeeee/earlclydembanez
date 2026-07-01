import type { Metadata } from 'next'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Factory, Package, House, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects — Earl Clyde Mbanez',
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
  live: string
  github: string
  featured: boolean
}[] = [
  {
    id: 1,
    Icon: Factory,
    title: 'Industrial Monitoring System',
    tagline: 'Real-time SCADA dashboard for industrial equipment',
    desc: 'A full-stack industrial monitoring platform built as a capstone project. IoT sensors feed live telemetry into a Node.js backend, surfaced through a React dashboard with configurable alert thresholds, historical data charts, and multi-user access control.',
    stack: ['React', 'Node.js', 'MQTT', 'PostgreSQL', 'Docker', 'Chart.js'],
    badges: ['Capstone Project', '#1 in Class'],
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    Icon: Package,
    title: 'Inventory Management System',
    tagline: 'Full-stack inventory and PO platform for an SME',
    desc: 'Designed and built for a local small business — tracks stock levels, purchase orders, and supplier contacts. Laravel backend with a Vue.js SPA frontend, deployed on shared PHP hosting. Reduced manual stock-check time by an estimated 60%.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    badges: ['Freelance Project'],
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 3,
    Icon: House,
    title: 'Home Automation Controller',
    tagline: 'Raspberry Pi + Arduino web-controlled appliance system',
    desc: 'Controls home appliances (lights, fans, outlets) via a web dashboard and voice commands using the Web Speech API. The Raspberry Pi acts as the hub, communicating to Arduino modules over serial. Includes a mobile-responsive control panel.',
    stack: ['Python', 'Arduino C', 'Raspberry Pi', 'WebSockets', 'JavaScript'],
    badges: ['IoT Project'],
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    Icon: Globe,
    title: 'PUP Student Portal Clone',
    tagline: 'A re-engineered version of the PUP enrollment portal',
    desc: 'Rebuilt the PUP enrollment portal UI from scratch with a modern stack — faster load times, accessible markup, and a cleaner scheduling interface. Built as a personal learning exercise and student tool.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    badges: ['Personal Project'],
    live: '#',
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
