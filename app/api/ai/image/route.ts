import { NextResponse } from 'next/server'
import { generateImage } from '@/lib/ai'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const url = await generateImage(prompt)
  return NextResponse.json({ url })
}
