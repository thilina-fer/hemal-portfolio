import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nipunhemal.vercel.app'),
  title: {
    default: 'Nipun Theekshana Hemal — Associate Software Engineer',
    template: '%s | Nipun Theekshana Hemal',
  },
  description:
    'Portfolio of Nipun Theekshana Hemal, a software engineer with hands-on freelance and internship experience building scalable web solutions. Specializing in backend development, database design, and full-stack engineering.',
  keywords: [
    'Nipun Theekshana Hemal',
    'Nipun Hemal',
    'Associate Software Engineer',
    'Full-Stack Developer Sri Lanka',
    'Backend Developer',
    'Node.js Developer',
    'React Developer',
    'Next.js Developer',
    'Software Engineer Portfolio',
    'MERN Stack Developer',
    'Database Engineer',
  ],
  authors: [{ name: 'Nipun Theekshana Hemal', url: 'https://github.com/NipunHemal' }],
  creator: 'Nipun Theekshana Hemal',
  openGraph: {
    title: 'Nipun Theekshana Hemal — Associate Software Engineer',
    description:
      'Software Engineer building scalable web solutions with Node.js, React, Spring Boot, and strong database expertise.',
    url: 'https://nipunhemal.vercel.app',
    siteName: 'Nipun Theekshana Hemal Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nipun Theekshana Hemal — Associate Software Engineer',
    description:
      'Software Engineer building scalable web solutions with Node.js, React, Spring Boot, and strong database expertise.',
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
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
