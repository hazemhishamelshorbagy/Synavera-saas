"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [created, setCreated] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    await fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    setCreated(true)
  }

  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <h1 className="text-xl font-semibold mb-4">Create account</h1>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full rounded-md border p-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="w-full rounded-md border p-3" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" className="w-full">Sign Up</Button>
          {created && <div className="text-sm text-green-700">Account created (placeholder). You can login now.</div>}
        </form>
      </Card>
    </div>
  )
}
