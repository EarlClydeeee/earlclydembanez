'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  ShoppingBag,
  BookOpen,
  Wrench,
  Archive,
  Users,
  Briefcase,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react'

interface SidebarProps {
  onOpenPalette: () => void
}

export default function Sidebar({ onOpenPalette }: SidebarProps) {
  const pathname = usePathname()
  const [isDark, setIsDark]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Sync initial theme
  useEffect(() => {
    const read = () =>
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark')
    read()

    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch {}
  }

  const isActive = (href: string) => pathname === href

  const navLink = (href: string, label: string, icon?: React.ReactNode) => (
    <li key={href}>
      <Link
        href={href}
        className={`sidebar__link${isActive(href) ? ' is-active' : ''}`}
      >
        {icon && <span className="sidebar__link-icon" aria-hidden="true">{icon}</span>}
        {label}
      </Link>
    </li>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="sidebar-mobile-toggle"
        onClick={() => setMobileOpen(p => !p)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        type="button"
      >
        {mobileOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="sidebar-overlay is-visible"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`sidebar${mobileOpen ? ' is-open' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="sidebar__inner">
          {/* Wordmark */}
          <Link href="/" className="sidebar__wordmark">
            Earl Clyde
          </Link>

          {/* Nav */}
          <nav className="sidebar__nav" aria-label="Site navigation">
            {/* Group 1 — content */}
            <ul className="sidebar__group">
              {navLink('/shop',      'Shop',      <ShoppingBag size={14} />)}
              {navLink('/blog',      'Blog',      <BookOpen    size={14} />)}
              {navLink('/gear',      'Gear',      <Wrench      size={14} />)}
              {navLink('/resources', 'Resources', <Archive     size={14} />)}
            </ul>

            {/* Group 2 — work */}
            <ul className="sidebar__group">
              {navLink('/collabs',    'Collabs',    <Users    size={14} />)}
              {navLink('/consulting', 'Consulting', <Briefcase size={14} />)}
            </ul>

            {/* Group 3 — portfolio sections */}
            <ul className="sidebar__group">
              <li>
                <a href="/#education" className="sidebar__link">
                  Education
                </a>
              </li>
              {navLink('/projects',        'Projects')}
              {navLink('/experience',      'Experience')}
              {navLink('/stack',           'Stack')}
              {navLink('/certifications',  'Certifications')}
              {navLink('/recommendations', 'Recommendations')}
              {navLink('/affiliations',    'Affiliations')}
            </ul>
          </nav>

          {/* Bottom section */}
          <div className="sidebar__bottom">
            <button
              className="sidebar__cmdk"
              onClick={onOpenPalette}
              type="button"
              aria-label="Open command palette"
            >
              <span>Ask anything</span>
              <span className="sidebar__cmdk-keys">
                <kbd>⌘</kbd><kbd>K</kbd>
              </span>
            </button>

            <button
              className="sidebar__theme-btn"
              onClick={toggleTheme}
              type="button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark
                ? <><Sun  size={12} aria-hidden="true" /> Light</>
                : <><Moon size={12} aria-hidden="true" /> Dark</>
              }
            </button>

            <div className="sidebar__viewer" aria-label="Live viewer count">
              <span className="sidebar__viewer-dot" aria-hidden="true" />
              <span className="sidebar__viewer-count">1</span>
              &nbsp;person viewing now
            </div>

            <a href="#" className="sidebar__community">
              community chat
            </a>

            <p className="sidebar__email-label">
              For work, collabs &amp; everything else, reach me at
            </p>
            <a
              href="mailto:earlclyde@email.com"
              className="sidebar__email"
              aria-label="Email Earl Clyde"
            >
              earlclyde@email.com
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
