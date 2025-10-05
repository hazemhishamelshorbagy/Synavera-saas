"use client"

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

// App-wide client providers (auth, theming, etc.)
export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
