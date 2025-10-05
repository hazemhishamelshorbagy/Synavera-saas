"use client"

import { useState } from 'react'
import { Button } from './ui/Button'

export function AIGraphicGenerator({ onGenerated }: { onGenerated: (url: string) => void }) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    setLoading(true)
    try {
      const res = await fetch('/api/ai/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      onGenerated(data.url)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the visual you want..."
        className="w-full rounded-md border p-3"
      />
      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating…' : 'Generate Image with AI'}
      </Button>
    </div>
  )
}
