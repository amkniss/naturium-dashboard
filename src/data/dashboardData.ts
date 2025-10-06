import { BrandData, CompetitiveData, ConsumerData, Opportunity } from '../types'

// Naturium-specific brand data
export const brandData: BrandData[] = [
  {
    color: '#2d5016'
  }
]

// Competitive landscape data for skincare brands
export const competitiveData: CompetitiveData = {
  radar: {
    labels: ['Clinical Credibility', 'Accessibility', 'Innovation', 'Brand Trust', 'Social Presence', 'Value Perception'],
    datasets: [
      {
        label: 'Naturium',
        data: [8, 7, 8, 5, 8, 7],
        backgroundColor: 'rgba(45, 80, 22, 0.1)',
        borderColor: '#2d5016',
        borderWidth: 2,
        pointBackgroundColor: '#2d5016'
      },
      {
        label: 'CeraVe',
        data: [9, 9, 6, 9, 6, 8],
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: '#3b82f6',
        borderWidth: 2,
        pointBackgroundColor: '#3b82f6'
      },
      {
        label: 'The Ordinary',
        data: [7, 10, 8, 8, 7, 10],
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderColor: '#22c55e',
        borderWidth: 2,
        pointBackgroundColor: '#22c55e'
      },
      {
        label: 'La Roche-Posay',
        data: [9, 7, 7, 9, 6, 6],
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderColor: '#a855f7',
        borderWidth: 2,
        pointBackgroundColor: '#a855f7'
      }
    ]
  },
  bar: {
    social: {
      labels: ['Naturium', 'CeraVe', 'The Ordinary', 'La Roche-Posay', 'Paula\'s Choice'],
      values: [8.2, 7.8, 7.5, 6.9, 6.2],
      title: 'Social Media Reach Score'
    },
    sentiment: {
      labels: ['Naturium', 'CeraVe', 'The Ordinary', 'La Roche-Posay', 'Paula\'s Choice'],
      values: [6.2, 8.5, 7.8, 8.1, 7.9],
      title: 'Brand Sentiment Score'
    },
    price: {
      labels: ['Naturium', 'CeraVe', 'The Ordinary', 'La Roche-Posay', 'Paula\'s Choice'],
      values: [18, 12, 8, 25, 32],
      title: 'Average Price Point ($)'
    }
  }
}

// Consumer insights data
export const consumerData: ConsumerData = {
  topics: [
    { text: 'Susan Yara Controversy', size: 95, category: 'negative' },
    { text: 'Product Quality Mixed', size: 75, category: 'mixed' },
    { text: 'Clinical Formulations', size: 85, category: 'positive' },
    { text: 'Target Availability', size: 70, category: 'positive' },
    { text: 'FTC Violations', size: 90, category: 'negative' },
    { text: 'Ingredient Transparency', size: 60, category: 'mixed' },
    { text: 'Value Proposition', size: 80, category: 'positive' },
    { text: 'Trust Issues', size: 88, category: 'negative' }
  ],
  faqs: [
    {
      q: 'Is Naturium worth the controversy?',
      a: 'While the founder controversy has impacted trust, the clinical formulations and Target partnership provide value. The brand offers effective skincare at a reasonable price point.',
      category: 'trust'
    },
    {
      q: 'How does Naturium compare to CeraVe?',
      a: 'Naturium offers more clinical ingredients and modern formulations, while CeraVe has stronger dermatologist backing and mass market appeal. Naturium is positioned as a clinical masstige brand.',
      category: 'comparison'
    },
    {
      q: 'What are Naturium\'s best products?',
      a: 'The Niacinamide Gel Cleanser, Vitamin C Complex Serum, and Retinol Complex are highly rated for their clinical formulations and effectiveness.',
      category: 'products'
    },
    {
      q: 'Is Naturium cruelty-free?',
      a: 'Yes, Naturium is cruelty-free and many products are vegan. The brand emphasizes clean, clinical ingredients without animal testing.',
      category: 'ethics'
    }
  ]
}

// Market opportunities data
export const opportunities: Opportunity[] = [
  {
    label: 'Trust Rebuilding',
    x: 6,
    y: 8,
    r: 14,
    backgroundColor: 'rgba(185, 28, 28, 0.15)'
  },
  {
    label: 'International Expansion',
    x: 8,
    y: 9,
    r: 20,
    backgroundColor: 'rgba(45, 80, 22, 0.15)'
  },
  {
    label: 'Men\'s Skincare',
    x: 7,
    y: 7,
    r: 16,
    backgroundColor: 'rgba(59, 130, 246, 0.15)'
  },
  {
    label: 'Professional Channel',
    x: 8,
    y: 9,
    r: 18,
    backgroundColor: 'rgba(168, 85, 247, 0.15)'
  },
  {
    label: 'Anti-Aging Line',
    x: 6,
    y: 7,
    r: 14,
    backgroundColor: 'rgba(34, 197, 94, 0.15)'
  },
  {
    label: 'Sustainability',
    x: 5,
    y: 6,
    r: 12,
    backgroundColor: 'rgba(249, 115, 22, 0.15)'
  },
  {
    label: 'Prescription-Strength',
    x: 9,
    y: 8,
    r: 22,
    backgroundColor: 'rgba(139, 69, 19, 0.15)'
  }
]

// Executive summary metrics
export const executiveMetrics = {
  acquisitionPrice: '$355M',
  annualSales2023: '$90M',
  averagePrice: '$18',
  ebitda2023: '$17M',
  growthRate: '80%',
  marketShare: '2.1%'
}

// Platform sentiment scores
export const platformSentiment = {
  tiktok: 8.4,
  instagram: 7.8,
  reddit: 6.2,
  youtube: 7.5
}

// Technology stack data
export const techStack = {
  platform: 'Shopify Plus',
  analytics: ['Google Analytics', 'Microsoft Clarity'],
  marketing: ['Klaviyo', 'Facebook Pixel', 'TikTok Pixel'],
  support: ['Gorgias', 'Smile IO'],
  commerce: ['OrderGroove', 'Firework Video']
}