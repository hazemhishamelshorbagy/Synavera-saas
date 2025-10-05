"use client"

import { useState } from 'react'
import { AIContentGenerator } from '@/components/AIContentGenerator'
import { AIGraphicGenerator } from '@/components/AIGraphicGenerator'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function CreateCampaignPage() {
  const [title, setTitle] = useState('New Campaign')
  const [text, setText] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [schedule, setSchedule] = useState<string>('')

  async function handleSchedule() {
    await fetch('/api/campaigns', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, text, image, schedule })
    })
    alert('Scheduled (placeholder).')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <Card className="p-4 space-y-3">
          <input className="w-full rounded-md border p-3" value={title} onChange={e => setTitle(e.target.value)} />
          <AIContentGenerator onGenerated={setText} />
          <AIGraphicGenerator onGenerated={setImage as (url: string) => void} />
        </Card>

        <Card className="p-4 space-y-3">
          <div className="text-sm text-slate-500">Schedule</div>
          <input type="datetime-local" className="w-full rounded-md border p-3" value={schedule} onChange={e => setSchedule(e.target.value)} />
          <Button onClick={handleSchedule}>Schedule Post</Button>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="p-4 space-y-3">
          <div className="text-sm text-slate-500">Preview</div>
          <div className="rounded-md border p-3">
            <div className="font-semibold mb-2">{title}</div>
            {image && <img src={image} alt="preview" className="rounded-md mb-2" />}
            <p className="whitespace-pre-wrap text-sm">{text}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
