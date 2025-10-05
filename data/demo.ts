import { Campaign } from '@/components/CampaignCard'

export const demoCampaigns: Campaign[] = [
  {
    id: 'cmp_1',
    title: 'Launch Beta on Product Hunt',
    status: 'scheduled',
    scheduledAt: new Date(Date.now() + 86400000).toISOString(),
    performance: { clicks: 342, impressions: 14500, ctr: 0.023 }
  },
  {
    id: 'cmp_2',
    title: 'Founders Twitter Thread',
    status: 'draft',
    performance: { clicks: 120, impressions: 5400, ctr: 0.022 }
  },
  {
    id: 'cmp_3',
    title: 'LinkedIn Case Study',
    status: 'published',
    scheduledAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    performance: { clicks: 980, impressions: 22000, ctr: 0.044 }
  }
]
