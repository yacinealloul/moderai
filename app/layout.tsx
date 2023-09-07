import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/navbar'
import { useAuth } from '@clerk/nextjs'


const inter = Inter({ subsets: ['greek'] })

export const metadata: Metadata = {
  title: 'Moder.ai',
  description: 'Streamline your workflow with advanced text processing and moderation.',
  openGraph:{
      title: 'Moder.ai',
      description: 'Streamline your workflow with advanced text processing and moderation.',

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
