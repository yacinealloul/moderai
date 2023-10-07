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
        
  <title>Flagged.ai | Seamless API Moderation</title>
  <meta name="description" content="Integrate Flagged.ai for efficient content moderation solutions in your application."/>

  <meta property="og:url" content="https://www.flagged.ai/"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Flagged.ai | Seamless API Moderation"/>
  <meta property="og:description" content="Integrate Flagged.ai for efficient content moderation solutions in your application."/>
  <meta property="og:image" content="https://imgur.com/a/Njm0EDK"/>
  <meta name="og:site_name" content="Flagged AI"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:domain" content="flagged.ai"/>
  <meta property="twitter:url" content="https://www.flagged.ai/"/>
  <meta name="twitter:title" content="Flagged.ai | Seamless API Moderation"/>
  <meta name="twitter:description" content="Integrate Flagged.ai for efficient content moderation solutions in your application."/>
  <meta name="twitter:image" content="https://imgur.com/a/Njm0EDK"/>

        
      </head>
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
