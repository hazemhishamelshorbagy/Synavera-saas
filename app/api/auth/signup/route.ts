import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  // Placeholder: store user in DB. For now, accept anything
  return NextResponse.json({ ok: true, message: 'User created (placeholder)' })
}
