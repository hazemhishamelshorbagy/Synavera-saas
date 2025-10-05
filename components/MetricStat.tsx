"use client"

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Card } from './ui/Card'

export function MetricStat({ label, value }: { label: string; value: number }) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    let raf = 0
    const duration = 800
    const start = performance.now()
    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration)
      const n = Math.floor(value * t)
      setCount(n)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="p-4">
        <div className="text-sm text-slate-500">{label}</div>
        <div className="text-2xl font-bold">{count.toLocaleString()}</div>
      </Card>
    </motion.div>
  )
}
