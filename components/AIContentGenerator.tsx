"use client"

import { useState } from 'react'
import { Button } from './ui/Button'

export function AIContentGenerator({ onGenerated }: { onGenerated: (text: string) => void }) {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    setLoading(true)
    try {
      const res = await fetch('/api/ai/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      onGenerated(data.text)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your product and audience..."
        className="w-full rounded-md border p-3"
        rows={4}
      />
      <Button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating…' : 'Generate Text with AI'}
      </Button>
    </div>
  )
}
