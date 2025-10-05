"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export function Navbar() {
  const pathname = usePathname()
  const link = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={clsx(
        'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-100',
        pathname === href && 'bg-slate-200'
      )}
    >
      {label}
    </Link>
  )

  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold text-brand">AIMarketer</span>
        <div className="hidden md:flex gap-1">
          {link('/', 'Dashboard')}
          {link('/campaigns/create', 'Create')}
          {link('/calendar', 'Calendar')}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/auth/login" className="px-3 py-2 text-sm hover:underline">Login</Link>
        <Link href="/auth/signup" className="px-3 py-2 text-sm rounded-md bg-brand text-white hover:bg-brand-dark">Sign Up</Link>
      </div>
    </nav>
  )
}
