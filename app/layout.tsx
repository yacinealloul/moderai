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
  <meta property="og:image" content="https://media.discordapp.net/attachments/1005203757275029606/1160333006716805200/Untitled.png?ex=65344752&is=6521d252&hm=80ad23884fe24bcd0382f77058185365f645e381169975ad9afa821aa7221e4"/>
  <meta property="og:site_name" content="Flagged AI"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:domain" content="flagged.ai"/>
  <meta property="twitter:url" content="https://www.flagged.ai/"/>
  <meta name="twitter:title" content="Flagged.ai | Seamless API Moderation"/>
  <meta name="twitter:description" content="Integrate Flagged.ai for efficient content moderation solutions in your application."/>
  <meta name="twitter:image" content="https://media.discordapp.net/attachments/1005203757275029606/1160333006716805200/Untitled.png?ex=65344752&is=6521d252&hm=80ad23884fe24bcd0382f77058185365f645e381169975ad9afa821aa7221e4"/>

        
      </head>
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
