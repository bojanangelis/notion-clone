import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion',
  description: 'The connected workspace where better, faster work happents.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/notion-logo.png',
        href: '/notion-logo.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/notion-logo.png',
        href: '/notion-logo.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
