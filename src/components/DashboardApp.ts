import { Chart } from 'chart.js'
import { competitiveData, consumerData, opportunities, executiveMetrics, platformSentiment } from '../data/dashboardData'

export class DashboardApp {
  private barChart: Chart | null = null

  constructor() {
    this.init()
  }

  private init(): void {
    this.renderExecutiveSummary()
    this.renderCompetitiveAnalysis()
    this.renderConsumerInsights()
    this.renderMarketOpportunities()
    this.renderStrategicRecommendations()
    this.setupEventListeners()
  }

  private renderExecutiveSummary(): void {
    const summarySection = document.getElementById('summary')
    if (!summarySection) return

    // Update metrics
    const metrics = summarySection.querySelectorAll('.metric-value')
    if (metrics.length >= 6) {
      metrics[0].textContent = executiveMetrics.marketShare
      metrics[1].textContent = platformSentiment.reddit.toString()
      metrics[2].textContent = executiveMetrics.averagePrice
      metrics[3].textContent = executiveMetrics.growthRate
    }

    // Charts will be initialized in their respective sections
  }


  private renderCompetitiveAnalysis(): void {
    this.initCompetitiveRadar()
    this.initCompetitiveBar()
  }

  private initCompetitiveRadar(): void {
    const canvas = document.getElementById('competitorRadarChart') as HTMLCanvasElement
    if (!canvas) return

    new Chart(canvas, {
      type: 'radar',
      data: competitiveData.radar,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        },
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 10
          }
        }
      }
    })
  }

  private initCompetitiveBar(): void {
    const canvas = document.getElementById('competitorBarChart') as HTMLCanvasElement
    if (!canvas) return

    this.barChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: competitiveData.bar.social.labels,
        datasets: [{
          label: competitiveData.bar.social.title,
          data: competitiveData.bar.social.values,
          backgroundColor: 'rgba(45, 80, 22, 0.8)',
          borderColor: '#2d5016',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        },
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 10
          }
        }
      }
    })
  }

  private renderConsumerInsights(): void {
    this.renderWordCloud()
    this.renderFAQ()
  }

  private renderWordCloud(): void {
    const container = document.getElementById('word-cloud')
    if (!container) return

    container.innerHTML = ''
    consumerData.topics.forEach(topic => {
      const chip = document.createElement('button')
      chip.className = `topic-chip ${topic.category}`
      chip.textContent = topic.text
      chip.style.fontSize = `${Math.max(12, topic.size / 8)}px`
      chip.addEventListener('click', () => this.filterByTopic(topic.text))
      container.appendChild(chip)
    })
  }

  private renderFAQ(): void {
    const container = document.getElementById('faq-accordion')
    if (!container) return

    container.innerHTML = ''
    consumerData.faqs.forEach((faq) => {
      const faqItem = document.createElement('div')
      faqItem.className = 'faq-item'
      faqItem.innerHTML = `
        <button class="faq-toggle w-full text-left p-4 bg-stone-100 rounded-md font-semibold flex justify-between items-center">
          <span>${faq.q}</span>
          <span class="icon font-light text-xl">+</span>
        </button>
        <div class="faq-content hidden mt-2 p-4 bg-white rounded-md text-stone-600 border border-stone-200">
          ${faq.a}
        </div>
      `
      container.appendChild(faqItem)
    })
  }

  private renderMarketOpportunities(): void {
    this.initOpportunityBubble()
  }

  private initOpportunityBubble(): void {
    const canvas = document.getElementById('opportunityBubbleChart') as HTMLCanvasElement
    if (!canvas) return

    new Chart(canvas, {
      type: 'bubble',
      data: {
        datasets: opportunities.map(opp => ({
          label: opp.label,
          data: [{ x: opp.x, y: opp.y, r: opp.r }],
          backgroundColor: opp.backgroundColor,
          borderColor: opp.backgroundColor.replace('0.15', '1'),
          borderWidth: 2
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        },
        scales: {
          x: {
            title: { display: true, text: 'Effort Required (1 = Low)' },
            min: 0,
            max: 10
          },
          y: {
            title: { display: true, text: 'Market Impact (1 = Low)' },
            min: 0,
            max: 10
          }
        }
      }
    })
  }

  private renderStrategicRecommendations(): void {
    // Recommendations are already in the HTML, just need to add event listeners
    this.setupRecommendationToggles()
  }

  private setupEventListeners(): void {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const target = (e.target as HTMLAnchorElement).getAttribute('href')
        if (target) {
          document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })

    // Mobile navigation
    const mobileNav = document.getElementById('mobile-nav') as HTMLSelectElement
    if (mobileNav) {
      mobileNav.addEventListener('change', (e) => {
        const target = (e.target as HTMLSelectElement).value
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
      })
    }

    // Metric buttons
    document.querySelectorAll('.metric-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement
        const metric = target.dataset.metric
        
        // Remove active class from all buttons
        document.querySelectorAll('.metric-button').forEach(btn => {
          btn.classList.remove('active-btn')
        })
        
        // Add active class to clicked button
        target.classList.add('active-btn')
        
        // Update chart data based on metric
        this.updateBarChart(metric || 'social')
      })
    })

    // FAQ toggles
    document.querySelectorAll('.faq-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement
        const content = target.nextElementSibling as HTMLElement
        const icon = target.querySelector('.icon')
        
        if (content && icon) {
          content.classList.toggle('hidden')
          icon.textContent = content.classList.contains('hidden') ? '+' : '−'
        }
      })
    })
  }

  private setupRecommendationToggles(): void {
    document.querySelectorAll('.recommendation-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement
        const content = target.nextElementSibling as HTMLElement
        const icon = target.querySelector('.icon')
        
        if (content && icon) {
          content.classList.toggle('hidden')
          icon.textContent = content.classList.contains('hidden') ? '+' : '−'
        }
      })
    })
  }

  private updateBarChart(metric: string): void {
    if (!this.barChart) return

    const data = competitiveData.bar[metric as keyof typeof competitiveData.bar]
    if (data) {
      this.barChart.data.datasets[0].label = data.title
      this.barChart.data.datasets[0].data = data.values
      this.barChart.update()
    }
  }

  private filterByTopic(topic: string): void {
    // Filter FAQ by topic
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach(item => {
      const content = item.querySelector('.faq-content')
      if (content && content.textContent?.toLowerCase().includes(topic.toLowerCase())) {
        item.classList.add('highlighted')
      } else {
        item.classList.remove('highlighted')
      }
    })
  }
}