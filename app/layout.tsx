import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import { useAuth } from '@clerk/nextjs'


const inter = Inter({ subsets: ['greek'] })


export const metadata: Metadata = {
  title: 'Flagged.ai | API Moderation',
  description: 'Use Flagged.ai for seamless content moderation in your application.',
  
  // Open Graph metadata
  openGraph: {
    title: 'Flagged.ai | Seamless API Moderation',
    description: 'Integrate Flagged.ai for efficient content moderation solutions in your application.',
    type: 'website',  // Can be other types like 'article', depending on your content
    images: {
      url: 'https://media.discordapp.net/attachments/1005203757275029606/1159879801658679437/image.png?ex=6532a13e&is=65202c3e&hm=aae1ed0e255daa17df58c946f4876470d67f58474bae808e017414a7e891576c&=&',  // Replace with your image path
      alt: 'Description of the image',  // Useful for accessibility
      width: 1200,  // Ideally at least 1200 pixels wide
      height: 630,  // Ideally 630 pixels tall
    },
    url: 'https://flagged.ai',  // The canonical URL for your page
    siteName: 'Flagged.ai',
    locale: 'en_US',  // e.g., 'en_US' or 'fr_FR'
  }
};
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
