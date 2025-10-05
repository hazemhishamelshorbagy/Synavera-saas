import { ReactNode } from 'react'
import clsx from 'clsx'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('rounded-xl bg-white shadow-soft border p-4', className)}>
      {children}
    </div>
  )
}
