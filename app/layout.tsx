import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'AI Marketing SaaS',
  description: 'Create, schedule, and track AI-generated marketing campaigns',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
