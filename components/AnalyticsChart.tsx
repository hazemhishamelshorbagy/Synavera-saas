"use client"

import { useEffect, useRef } from 'react'
import { Chart, ChartConfiguration } from 'chart.js/auto'
import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then(m => m.motion.div), { ssr: false })

export function AnalyticsChart({ labels, data }: { labels: string[]; data: number[] }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Engagement',
            data,
            borderColor: '#3b82f6',
            tension: 0.35,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    }

    const chart = new Chart(canvasRef.current, config)
    return () => chart.destroy()
  }, [labels, data])

  return (
    <MotionDiv initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <canvas ref={canvasRef} height={120} />
    </MotionDiv>
  )
}
