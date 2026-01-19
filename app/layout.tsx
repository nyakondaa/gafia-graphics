import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Gafia Graphics | Premium Photography Portfolio',
  description: 'Professional photography services by Gafia Graphics. Specializing in editorial, portrait, wedding, and commercial photography. Capturing moments with artistic vision and timeless elegance.',
  keywords: ['photography', 'professional photographer', 'portrait photography', 'wedding photography', 'editorial photography', 'commercial photography', 'Gafia Graphics'],
  authors: [{ name: 'Gafia Graphics' }],
  creator: 'Gafia Graphics',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gafiagraphics.com',
    siteName: 'Gafia Graphics',
    title: 'Gafia Graphics | Premium Photography Portfolio',
    description: 'Professional photography services capturing moments with artistic vision and timeless elegance.',
    images: [
      {
        url: '/images/hero-photography.jpg',
        width: 1200,
        height: 630,
        alt: 'Gafia Graphics Photography Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gafia Graphics | Premium Photography Portfolio',
    description: 'Professional photography services capturing moments with artistic vision and timeless elegance.',
    images: ['/images/hero-photography.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f3ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
