import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import { useAuth } from '@clerk/nextjs'


const inter = Inter({ subsets: ['greek'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        
  <title>flagged.ai</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="title" content="flagged.ai" />
    <meta name="description" content="Integrate flagged.ai for efficient content moderation solutions in your application." />
    <meta name="keywords" content="AI, content moderation, API, web service, automated moderation, safe content, Flagged.ai, efficient moderation" />
    <meta name="author" content="TrueLabs" />
    <meta http-equiv="Content-Language" content="en" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.flagged.ai/" />
    <meta property="og:title" content="flagged.ai" />
    <meta property="og:description" content="Integrate flagged.ai for efficient content moderation solutions in your application." />
    <meta property="og:image" content="https://www.flagged.ai/og.png" />
    <meta property="og:site_name" content="flagged.ai" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="flagged.ai" />
    <meta property="twitter:url" content="https://www.flagged.ai/" />
    <meta name="twitter:title" content="flagged.ai" />
    <meta name="twitter:description" content="Integrate flagged.ai for efficient content moderation solutions in your application." />
    <meta name="twitter:image" content="https://www.flagged.ai/og.png" />

    <link rel="canonical" href="https://www.flagged.ai/" />
        
      </head>
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
