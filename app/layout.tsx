import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Blogr',
  description: 'Cloned by Russel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='nav-hero'>
          <Navbar />
          <Hero />
        </div>
        {/* children is the page.tsx content */}
        {children} 
        <Footer />
      </body>
    </html>
  )
}
