import type { Metadata } from 'next'
import { Space_Grotesk, Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import ClientShell from './components/ClientShell'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Earl Clyde Mbanez — Software Engineer',
  description:
    'Computer Engineering student building systems that solve real problems. Full-stack development, embedded systems, and automation.',
  keywords: [
    'Earl Clyde Mbanez',
    'software engineer',
    'computer engineering',
    'full-stack developer',
    'embedded systems',
    'PHP',
    'JavaScript',
    'portfolio',
    'PUP',
  ],
  authors: [{ name: 'Earl Clyde Mbanez' }],
  openGraph: {
    title: 'Earl Clyde Mbanez — Software Engineer',
    description: 'Building systems that solve real problems.',
    type: 'website',
  },
}

/* Inline script: reads localStorage and sets data-theme before first paint,
   preventing flash of unstyled content on theme switch. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  )
}
