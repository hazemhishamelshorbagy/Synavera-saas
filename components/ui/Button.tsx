"use client"

import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-white shadow-soft transition hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
    />
  )
}
