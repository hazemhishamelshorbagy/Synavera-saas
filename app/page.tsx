import { MetricStat } from '@/components/MetricStat'
import { CampaignCard } from '@/components/CampaignCard'
import { Card } from '@/components/ui/Card'
import { demoCampaigns } from '@/data/demo'
import dynamic from 'next/dynamic'
const AIInsights = dynamic(() => import('@/components/AIInsights').then(m => m.AIInsights), { ssr: false })

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
            <AIInsights tips={["Post around 10 AM for best CTR", "Use visuals with product screenshot", "Try #buildinpublic"]} />
          </Card>
        </div>
      </div>
    </div>
  )
}
