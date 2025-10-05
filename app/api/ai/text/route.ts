import { NextResponse } from 'next/server'
import { generateText } from '@/lib/ai'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const text = await generateText(prompt)
  return NextResponse.json({ text })
}
