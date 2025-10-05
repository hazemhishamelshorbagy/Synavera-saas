"use client"

import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then(m => m.motion.div), { ssr: false })
import Link from 'next/link'
import { Card } from './ui/Card'

export type Campaign = {
  id: string
  title: string
  status: 'scheduled' | 'draft' | 'published'
  scheduledAt?: string
  performance?: {
    clicks: number
    impressions: number
    ctr: number
  }
}

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <MotionDiv whileHover={{ y: -2, scale: 1.01 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Link href={`/campaigns/${campaign.id}`}>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{campaign.title}</h3>
              <div className="text-sm text-slate-500 capitalize">{campaign.status}</div>
            </div>
            {campaign.scheduledAt && (
              <div className="text-xs text-slate-500">{new Date(campaign.scheduledAt).toLocaleString()}</div>
            )}
          </div>
          {campaign.performance && (
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-xl font-bold">{campaign.performance.clicks}</div>
                <div className="text-xs text-slate-500">Clicks</div>
              </div>
              <div>
                <div className="text-xl font-bold">{campaign.performance.impressions}</div>
                <div className="text-xs text-slate-500">Impressions</div>
              </div>
              <div>
                <div className="text-xl font-bold">{(campaign.performance.ctr * 100).toFixed(1)}%</div>
                <div className="text-xs text-slate-500">CTR</div>
              </div>
            </div>
          )}
        </Card>
      </Link>
    </MotionDiv>
  )
}
