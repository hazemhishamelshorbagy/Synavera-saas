import { NextResponse } from 'next/server'
import { demoCampaigns } from '@/data/demo'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const found = demoCampaigns.find(c => c.id === params.id)
  if (!found) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(found)
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const updates = await req.json()
  // Placeholder: update in DB and return updated campaign
  return NextResponse.json({ ok: true, id: params.id, ...updates })
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  // Placeholder: delete from DB
  return NextResponse.json({ ok: true, id: params.id })
}
