"use client"

import { CalendarScheduler } from '@/components/CalendarScheduler'
import { useMemo } from 'react'

export default function CalendarPage() {
  const posts = useMemo(() => [
    { id: 'p1', title: 'Twitter Teaser', date: new Date().toISOString() },
    { id: 'p2', title: 'LinkedIn Post', date: new Date(Date.now() + 86400000).toISOString() },
  ], [])

  return (
    <div className="space-y-4">
      <CalendarScheduler initialPosts={posts} />
    </div>
  )
}
