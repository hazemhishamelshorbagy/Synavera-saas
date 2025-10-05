import { AnalyticsChart } from '@/components/AnalyticsChart'
import { Card } from '@/components/ui/Card'
import { notFound } from 'next/navigation'
import { demoCampaigns } from '@/data/demo'

export default async function CampaignDetailPage({ params }: { params: { id: string } }) {
  const campaign = demoCampaigns.find(c => c.id === params.id)
  if (!campaign) return notFound()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{campaign.title}</h1>
          <div className="text-sm text-slate-500 capitalize">{campaign.status}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-4 lg:col-span-2">
          <div className="text-sm text-slate-500 mb-2">Engagement</div>
          <AnalyticsChart labels={["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]} data={[5,9,6,10,12,7,11]} />
        </Card>
        <Card className="p-4 space-y-2">
          <div className="text-sm text-slate-500">AI Suggestions</div>
          <ul className="text-sm list-disc pl-5">
            <li>Post at 10 AM for better reach</li>
            <li>Include a strong CTA: Try free for 7 days</li>
            <li>Use hashtags: #startup #marketing</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
