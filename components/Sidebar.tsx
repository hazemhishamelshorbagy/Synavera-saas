"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export function Sidebar() {
  const pathname = usePathname()
  const Item = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={clsx(
        'block px-3 py-2 rounded-md text-sm hover:bg-slate-100',
        pathname === href && 'bg-slate-200 font-medium'
      )}
    >
      {label}
    </Link>
  )

  return (
    <aside className="hidden md:block w-64 shrink-0 border-r bg-white p-4 sticky top-16 h-[calc(100vh-4rem)]">
      <div className="text-xs uppercase text-slate-500 mb-2">Navigation</div>
      <div className="space-y-1">
        <Item href="/" label="Dashboard" />
        <Item href="/campaigns/create" label="Create Campaign" />
        <Item href="/calendar" label="Calendar" />
      </div>
    </aside>
  )
}
