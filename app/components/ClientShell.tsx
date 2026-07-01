'use client'

import { useCallback, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import CommandPalette from './CommandPalette'

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false)

  const openPalette  = useCallback(() => setPaletteOpen(true),  [])
  const closePalette = useCallback(() => setPaletteOpen(false), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setPaletteOpen(p => !p)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="layout">
      <Sidebar onOpenPalette={openPalette} />

      <main className="main-content">
        {children}
      </main>

      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </div>
  )
}
