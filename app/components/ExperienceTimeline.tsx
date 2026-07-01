'use client'

import { useEffect, useRef, useState } from 'react'

type Role = {
  title: string
  period: string
  desc: string
  skills: string[]
}

type Company = {
  abbr: string
  name: string
  type: string
  roles: Role[]
}

export default function ExperienceTimeline({ companies }: { companies: Company[] }) {
  const [activeKey, setActiveKey] = useState('0-0')
  const roleRefs = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          const key = (visible.target as HTMLElement).dataset.timelineKey
          if (key) setActiveKey(key)
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.65],
      }
    )

    roleRefs.current.forEach(node => {
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="experience-timeline">
      {companies.map((company, ci) => {
        const companyActive = activeKey.startsWith(`${ci}-`)

        return (
          <div key={company.name} className={`exp-company-block${companyActive ? ' is-active' : ''}`}>
            <div className="exp-company-header">
              <div className="exp-company-logo" aria-hidden="true">{company.abbr}</div>
              <div className="exp-company-info">
                <div className="exp-company-name">{company.name}</div>
                <div className="exp-company-meta">{company.type}</div>
              </div>
            </div>

            <ol className="exp-role-list">
              {company.roles.map((role, ri) => {
                const key = `${ci}-${ri}`

                return (
                  <li
                    key={key}
                    ref={node => {
                      roleRefs.current[ci * 10 + ri] = node
                    }}
                    data-timeline-key={key}
                    className={`exp-role-item${activeKey === key ? ' is-active' : ''}`}
                  >
                    <div className="exp-role-title">{role.title}</div>
                    <div className="exp-role-period">{role.period}</div>
                    <p className="exp-role-desc">{role.desc}</p>
                    <ul className="exp-role-skills" aria-label="Skills used" role="list">
                      {role.skills.map(s => (
                        <li key={s}><span className="stack-tag">{s}</span></li>
                      ))}
                    </ul>
                  </li>
                )
              })}
            </ol>
          </div>
        )
      })}
    </div>
  )
}
