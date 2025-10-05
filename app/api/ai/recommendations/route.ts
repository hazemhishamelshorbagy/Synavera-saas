import { NextResponse } from 'next/server'
import { recommendHashtags, recommendPostingTime, improvePost } from '@/lib/ai'

export async function POST(req: Request) {
  const { text, topic } = await req.json()
  const [time, tags, improved] = await Promise.all([
    recommendPostingTime(),
    recommendHashtags(topic || 'marketing'),
    improvePost(text || '')
  ])
  return NextResponse.json({ time, tags, improved })
}
