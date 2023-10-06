import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import { useAuth } from '@clerk/nextjs'


const inter = Inter({ subsets: ['greek'] })

export const metadata: Metadata = {
  title: 'Flagged.ai',
  description: 'Streamline your workflow with advanced text processing and moderation.',
  keywords: ["Text Moderation", "Content Filtering", "Moderation Automation", "AI for Moderation", "Online Moderation Tool", "Content Safety", "Real-time Moderation", "Comment Management", "Inappropriate Content Detection", "User-generated Content Control"],
  openGraph:{
      title: 'Flagged.ai',
      description: 'Streamline your workflow with advanced text processing and moderation.',
      images:['https://media.discordapp.net/attachments/1005203757275029606/1149279122682544178/0gvHYoi.png'],

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
