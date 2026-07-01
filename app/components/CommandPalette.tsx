'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Command {
  id: string
  group: string
  label: string
  hint?: string
  action: () => void
}

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef  = useRef<HTMLUListElement>(null)
  const router   = useRouter()

  const go = (href: string) => { router.push(href); onClose() }

  const commands: Command[] = [
    /* Navigate — sections */
    { id: 'nav-home',     group: 'Navigate', label: 'Home',            action: () => go('/') },
    { id: 'nav-edu',      group: 'Navigate', label: 'Education',       hint: '/#education',       action: () => go('/#education') },
    { id: 'nav-projects', group: 'Navigate', label: 'Projects',        hint: '/projects',         action: () => go('/projects') },
    { id: 'nav-exp',      group: 'Navigate', label: 'Experience',      hint: '/experience',       action: () => go('/experience') },
    { id: 'nav-stack',    group: 'Navigate', label: 'Stack',           hint: '/stack',            action: () => go('/stack') },
    { id: 'nav-certs',    group: 'Navigate', label: 'Certifications',  hint: '/certifications',   action: () => go('/certifications') },
    { id: 'nav-recs',     group: 'Navigate', label: 'Recommendations', hint: '/recommendations',  action: () => go('/recommendations') },
    { id: 'nav-affil',    group: 'Navigate', label: 'Affiliations',    hint: '/affiliations',     action: () => go('/affiliations') },
    /* Links */
    { id: 'link-github',  group: 'Links', label: 'GitHub ↗',   hint: 'github.com/earlclyde',         action: () => { window.open('https://github.com/earlclyde', '_blank'); onClose() } },
    { id: 'link-li',      group: 'Links', label: 'LinkedIn ↗', hint: 'linkedin.com/in/earlclyde',    action: () => { window.open('https://linkedin.com/in/earlclyde', '_blank'); onClose() } },
    { id: 'link-email',   group: 'Links', label: 'Send email', hint: 'earlclyde@email.com',          action: () => { window.location.href = 'mailto:earlclyde@email.com'; onClose() } },
  ]

  const q        = query.trim().toLowerCase()
  const filtered = q
    ? commands.filter(c => c.label.toLowerCase().includes(q) || (c.hint ?? '').toLowerCase().includes(q) || c.group.toLowerCase().includes(q))
    : commands

  const groups = [...new Set(filtered.map(c => c.group))]

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape')     { onClose(); return }
    if (e.key === 'ArrowDown')  { e.preventDefault(); setCursor(p => Math.min(p + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp')    { e.preventDefault(); setCursor(p => Math.max(p - 1, 0)) }
    if (e.key === 'Enter')      { e.preventDefault(); filtered[cursor]?.action() }
  }, [filtered, cursor, onClose])

  useEffect(() => {
    if (!open) return
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, handleKey])

  useEffect(() => {
    if (open) { setQuery(''); setCursor(0); setTimeout(() => inputRef.current?.focus(), 30) }
  }, [open])

  useEffect(() => { setCursor(0) }, [query])

  useEffect(() => {
    const el = listRef.current?.querySelectorAll('[data-idx]')[cursor] as HTMLElement | null
    el?.scrollIntoView({ block: 'nearest' })
  }, [cursor])

  if (!open) return null

  let idx = 0

  return (
    <div className="palette-scrim" onClick={onClose} aria-hidden="true">
      <div
        className="palette"
        role="dialog"
        aria-label="Command palette"
        aria-modal="true"
        onClick={e => e.stopPropagation()}
      >
        <div className="palette__header">
          <input
            ref={inputRef}
            className="palette__input"
            type="text"
            placeholder="Type a command or search…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            spellCheck={false}
            autoComplete="off"
            aria-label="Search commands"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={filtered[cursor] ? `pi-${filtered[cursor].id}` : undefined}
          />
        </div>

        <ul
          ref={listRef}
          id="palette-list"
          className="palette__list"
          role="listbox"
          aria-label="Available commands"
        >
          {filtered.length === 0 ? (
            <li className="palette__empty">No commands match.</li>
          ) : (
            groups.map(group => (
              <li key={group} className="palette__group-section">
                <span className="palette__group-label" role="presentation">{group}</span>
                <ul role="presentation">
                  {filtered
                    .filter(c => c.group === group)
                    .map(cmd => {
                      const i = idx++
                      const active = i === cursor
                      return (
                        <li key={cmd.id} role="option" aria-selected={active}>
                          <button
                            id={`pi-${cmd.id}`}
                            className={`palette__item${active ? ' is-active' : ''}`}
                            data-idx={i}
                            onMouseEnter={() => setCursor(i)}
                            onClick={cmd.action}
                            tabIndex={-1}
                            type="button"
                          >
                            <span className="palette__item-label">{cmd.label}</span>
                            {cmd.hint && <span className="palette__item-hint">{cmd.hint}</span>}
                          </button>
                        </li>
                      )
                    })}
                </ul>
              </li>
            ))
          )}
        </ul>

        <div className="palette__footer" aria-hidden="true">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  )
}
