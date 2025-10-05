import { MetricStat } from '@/components/MetricStat'
import { CampaignCard } from '@/components/CampaignCard'
import { Card } from '@/components/ui/Card'
import { demoCampaigns } from '@/data/demo'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const stats = [
    { label: 'Total Impressions', value: 28450 },
    { label: 'Total Clicks', value: 1460 },
    { label: 'Conversion', value: 320 }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <MetricStat key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          <div className="text-sm text-slate-500">Recent Campaigns</div>
          {demoCampaigns.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
        <div>
          <Card className="p-4">
            <div className="text-sm text-slate-500 mb-2">AI Insights</div>
            <motion.ul initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
              {['Post around 10 AM for best CTR', 'Use visuals with product screenshot', 'Try #buildinpublic'].map((tip) => (
                <motion.li key={tip} variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} className="text-sm mb-2">
                  • {tip}
                </motion.li>
              ))}
            </motion.ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
