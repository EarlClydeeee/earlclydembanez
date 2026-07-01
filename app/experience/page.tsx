import type { Metadata } from 'next'
import Link from 'next/link'
import ExperienceTimeline from '../components/ExperienceTimeline'

export const metadata: Metadata = {
  title: 'Experience — Earl Clyde Micolob Bañez',
  description: 'Work experience and professional history.',
}

const COMPANIES = [
  {
    abbr: 'HE',
    name: 'Hayakawa Electronics Philippines Corp.',
    type: 'Software Engineering · 2025',
    roles: [
      {
        title: 'Software Engineering Front-End Lead',
        period: '2025',
        desc: 'Developed and deployed the Output Monitoring System, a real-time web platform tracking 2M+ machine and applicator production cycles. Architected a modular frontend with HTML, Tailwind CSS, and JavaScript; contributed to PHP/MySQL backend logic for predictive maintenance and component lifespan tracking. Reduced factory reporting time by 80% through ETL pipeline design and a hybrid relational + JSON database schema.',
        skills: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL', 'ETL'],
      },
    ],
  },
  {
    abbr: 'AWS',
    name: 'AWS Cloud Club – PUP Manila',
    type: 'Development Team · 2023 – Present',
    roles: [
      {
        title: 'Development Team',
        period: '2023 – PRESENT',
        desc: 'Built and maintained club-wide platforms including the Skill Builder LMS, AWS Cloud Club website, and TEDxPUP site. Spearheaded design and development of a gamified LMS used across 7 technical departments: AI, Data Science, Cloud, Web Development, IoT, Security, and Data Engineering.',
        skills: ['React', 'TypeScript', 'Astro', 'FastAPI', 'Supabase', 'AWS'],
      },
    ],
  },
  {
    abbr: 'MS',
    name: 'PUP Microsoft Student Community',
    type: 'Software Leadership · 2025 – Present',
    roles: [
      {
        title: 'Software Development Co-Lead',
        period: '2025 – PRESENT',
        desc: 'Mentors developers in modern software engineering workflows, frontend-backend integration, and UI architecture using Git-based collaboration. Leads hands-on sessions on modular design, project scalability, and development projects aligned with Microsoft student empowerment.',
        skills: ['Mentorship', 'UI Architecture', 'Git', 'Frontend', 'Backend Integration'],
      },
    ],
  },
  {
    abbr: 'ACC',
    name: 'ACCESS – PUP',
    type: 'Student Organization · 2023 – Present',
    roles: [
      {
        title: 'Lead Senior Software Developer',
        period: '2023 – PRESENT',
        desc: 'Architected and co-developed the CPE Fair Management Platform, a full-stack system with real-time bracket generation, match tracking, and leaderboard displays. Leads development of the official ACCESS-PUP website with modules for organizational transparency, announcements, and centralized student engagement.',
        skills: ['Next.js', 'Supabase', 'Real-time Systems', 'Leadership', 'Figma'],
      },
      {
        title: 'Front-End Lead / Creatives Team',
        period: '2023 – PRESENT',
        desc: 'Designed official digital materials for events and announcements using Figma and Canva, then transitioned into the Web Development Academics Committee to develop and maintain CPE Fair and organizational platforms.',
        skills: ['Figma', 'Canva', 'Frontend', 'Event Systems'],
      },
    ],
  },
  {
    abbr: 'GDG',
    name: 'Google Developer Group on Campus – PUP Manila',
    type: 'Data & Machine Learning · 2024 – Present',
    roles: [
      {
        title: 'Data & Machine Learning Cadet',
        period: '2024 – PRESENT',
        desc: 'Collaborates on data-driven applications and AI prototypes; contributes to hackathons promoting Google Cloud, TensorFlow, and AI literacy. Gains hands-on experience in data preprocessing, visualization, and ML model experimentation using Python-based frameworks.',
        skills: ['Python', 'TensorFlow', 'Google Cloud', 'Data Visualization', 'Machine Learning'],
      },
    ],
  },
  {
    abbr: 'IC',
    name: 'ICpEP.SE – PUP Manila',
    type: 'Software Engineering · 2025 – Present',
    roles: [
      {
        title: 'Software Engineer & Project Manager',
        period: '2025 – PRESENT',
        desc: 'Led planning, architecture, and development of the ICpEP.SE Certificate Generation Tool using Next.js and Tailwind CSS, automating certificate creation for hundreds of recipients with CSV parsing, dynamic placeholders, and batch PDF/PNG export. Managed a cross-functional team with DRY principles, clean architecture, Git workflows, and Figma prototypes.',
        skills: ['Next.js', 'Tailwind CSS', 'CSV Parsing', 'PDF Export', 'Project Management'],
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
          Frontend engineering, full-stack platforms, AI/data work, and student tech leadership across PUP organizations and industry systems.
        </p>
      </div>

      <div className="sub-page-content page-container">
        <ExperienceTimeline companies={COMPANIES} />

        <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center' }}>
          <Link href="/#experience" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted)' }}>
            ← Back to overview
          </Link>
        </div>
      </div>
    </>
  )
}
