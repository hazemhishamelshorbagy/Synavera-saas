"use client"

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const res = await signIn('credentials', {
      redirect: true,
      callbackUrl: '/',
      email,
      password
    })
    if (res?.error) setError(res.error)
  }

  return (
    <div className="mx-auto max-w-md">
      <Card className="p-6">
        <h1 className="text-xl font-semibold mb-4">Login</h1>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full rounded-md border p-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="w-full rounded-md border p-3" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {error && <div className="text-sm text-red-600">{error}</div>}
          <Button type="submit" className="w-full">Sign In</Button>
          <Button type="button" className="w-full bg-slate-200 text-slate-900 hover:bg-slate-300" onClick={() => { setEmail(process.env.NEXT_PUBLIC_DEMO_EMAIL || 'demo@saas.dev'); setPassword(process.env.NEXT_PUBLIC_DEMO_PASSWORD || 'demo1234') }}>Use Demo Credentials</Button>
        </form>
      </Card>
    </div>
  )
}
