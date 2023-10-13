import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="notion-theme-v2.0"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
