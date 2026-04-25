import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "greek"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Mostro RIBs | Premium Sport Rigid Inflatable Boats in Greece',
  description: 'Discover our collection of 13 premium Sport Rigid Inflatable Boats (RIBs) from 2-11 meters. Experience the Aegean Sea with Mostro - Greece\'s leading RIB manufacturer.',
  keywords: 'RIB boats, rigid inflatable boats, sport boats, Greece boats, Mediterranean boats, Mostro',
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
