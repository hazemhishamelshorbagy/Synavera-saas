import { NextResponse } from 'next/server'
import { demoCampaigns } from '@/data/demo'

export async function GET() {
  return NextResponse.json(demoCampaigns)
}

export async function POST(req: Request) {
  const body = await req.json()
  // In a real app, persist to DB
  return NextResponse.json({ ok: true, id: 'cmp_new', ...body })
}
