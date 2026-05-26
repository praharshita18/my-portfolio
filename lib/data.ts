export interface CaseStudy {
  slug: string
  company: string
  category: string
  industry: string
  headline: string
  description: string
  coverGradient: string
  context: string
  role: string
  whatIDid: string[]
  results: { metric: string; label: string }[]
  keyInsight: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'devflow',
    company: 'DevFlow', // [PLACEHOLDER] Replace with actual company name
    category: 'SEO + Content Strategy',
    industry: 'DevTools',
    headline: '340% increase in organic traffic in 4 months',
    description:
      'Built a developer-first content moat that drove qualified pipeline without a single paid dollar.',
    coverGradient: 'from-[#7C8C6C]/22 via-[#ECE4D8] to-[#C96C4A]/10',
    context:
      '[PLACEHOLDER] DevFlow is a developer tooling startup building infrastructure-as-code tooling for platform engineering teams. When they came to me, they had great product traction but near-zero organic presence — their website got 800 monthly visits, mostly branded. Zero non-branded keyword rankings. The product team was incredible but had no dedicated growth function.',
    role: 'Sole growth marketer, embedded for 4 months. Reported directly to the Head of Product.',
    whatIDid: [
      'Ran a full SEO audit and competitive gap analysis across 6 direct and indirect competitors',
      'Built a keyword universe of 300+ terms mapped to the developer buyer journey (awareness → consideration → decision)',
      'Created a 12-month editorial calendar prioritising high-intent, low-competition keywords',
      'Wrote and published 18 long-form articles (2,000–4,500 words each) on technical infrastructure topics',
      'Built a distribution system: LinkedIn, dev Slack communities, Hacker News, and Reddit r/devops',
      'Implemented schema markup, internal linking strategy, and Core Web Vitals optimisations',
    ],
    results: [
      { metric: '340%', label: 'Increase in organic traffic (month 1 → month 4)' },
      { metric: '1,200+', label: 'New monthly organic visitors by month 4' },
      { metric: '28', label: 'Keywords ranking in Google top 10' },
      { metric: '14', label: 'Demo requests directly attributed to organic content' },
    ],
    keyInsight:
      '[PLACEHOLDER] Developer content works when it genuinely teaches, not when it sells. Every single article that drove pipeline was a how-to that mentioned the product only once — at the end, as a natural next step. The moment content starts feeling like a brochure, developers close the tab.',
  },
  {
    slug: 'sage-ai',
    company: 'Sage AI', // [PLACEHOLDER] Replace with actual company name
    category: 'Social-Led Distribution',
    industry: 'Generative AI',
    headline: '0 to 12K LinkedIn followers in 6 months',
    description:
      'Created an AI-native thought leadership engine that turned the founders into the voice of a new category.',
    coverGradient: 'from-[#C96C4A]/18 via-[#ECE4D8] to-[#7C8C6C]/14',
    context:
      '[PLACEHOLDER] Sage AI builds document intelligence software for legal and compliance teams. Their founders had deep domain expertise but zero social presence. Competitors were already dominating the LinkedIn conversation, and the team knew that founders who owned the narrative in their category would win deals their competitors never even heard about.',
    role: 'Fractional content and distribution strategist, 3 days/week for 6 months.',
    whatIDid: [
      'Developed a founder thought leadership framework: 4 content pillars, 12 repeatable content formats',
      'Ran weekly 45-minute founder interviews to extract ideas, contrarian opinions, and untold stories',
      'Ghostwrote and published 90+ LinkedIn posts across 2 founder profiles',
      'Built a content repurposing engine: long-form → LinkedIn → newsletter → X/Twitter thread',
      'Launched "The AI Legal Brief" — a weekly newsletter that reached 1,400 subscribers in 5 months',
      'Secured 3 podcast appearances and 2 bylined articles in industry publications',
    ],
    results: [
      { metric: '12K+', label: 'LinkedIn followers across 2 founder profiles' },
      { metric: '1,400', label: 'Newsletter subscribers in 5 months' },
      { metric: '3.8×', label: 'Increase in inbound demo requests' },
      { metric: '6', label: 'Inbound partnership inquiries sourced from content' },
    ],
    keyInsight:
      "[PLACEHOLDER] The best-performing posts were never product updates. They were founder opinions about what was happening in the industry — the takes other people were afraid to publish. People follow people, not companies. And the more specific and polarising the opinion, the higher the reach.",
  },
  {
    slug: 'stacklayer',
    company: 'StackLayer', // [PLACEHOLDER] Replace with actual company name
    category: 'GTM Strategy',
    industry: 'B2B SaaS',
    headline: 'Launched into 3 new verticals in 90 days',
    description:
      'Rebuilt the entire go-to-market motion — from ICP definition to content to first-touch conversion.',
    coverGradient: 'from-[#7C8C6C]/20 via-[#ECE4D8] to-transparent',
    context:
      "[PLACEHOLDER] StackLayer provides workflow automation for operations teams. They had strong PMF in fintech but wanted to expand into healthcare and manufacturing. The challenge: completely different buyers, different language, different pain points, different procurement cycles. Copying their existing playbook into new markets wasn't working.",
    role: 'Fractional Growth Partner, 6-month engagement. Cross-functional with sales, product, and CS.',
    whatIDid: [
      'Led 22 customer discovery interviews across 3 verticals to deeply map jobs-to-be-done',
      'Defined 3 new ICP profiles with full persona cards, buying journey maps, and decision criteria',
      'Rewrote the website homepage and 3 product pages with vertical-specific messaging',
      'Built a content engine: 1 flagship piece per vertical (case study + landing page + email nurture sequence)',
      'Created a sales enablement kit: battle cards, objection handling guide, discovery call script',
      'Set up LinkedIn Ads to rapidly test messaging hypotheses before doubling down with organic',
    ],
    results: [
      { metric: '3', label: 'New verticals entered in 90 days' },
      { metric: '47%', label: 'Higher demo-to-close rate with new vertical messaging' },
      { metric: '22', label: 'Pipeline opportunities created in new verticals' },
      { metric: '$180K', label: 'New ARR attributed to the expansion strategy' },
    ],
    keyInsight:
      '[PLACEHOLDER] Most expansion failures happen because teams copy-paste their existing positioning into new markets. It never works. Buyers in different verticals have different fears, different language, and different definitions of "good." You need to speak to the fear, not just the feature set.',
  },
  {
    slug: 'veritas-labs',
    company: 'Veritas Labs', // [PLACEHOLDER] Replace with actual company name
    category: 'Demand Generation',
    industry: 'AI / GenAI',
    headline: '2.1× pipeline from content-led outbound',
    description:
      'Designed a warm outbound system where content pre-qualified leads before the first sales email landed.',
    coverGradient: 'from-[#B7BDC7]/22 via-[#ECE4D8] to-[#7C8C6C]/12',
    context:
      "[PLACEHOLDER] Veritas Labs builds AI-powered compliance monitoring for financial institutions. Their sales team was running cold outbound with below-average reply rates. The product was strong — the problem was that prospects had zero context when a cold email arrived. It felt like an interruption, not a solution.",
    role: 'Growth consultant, scoped 10-week engagement with full handoff documentation.',
    whatIDid: [
      'Audited existing outbound sequences and identified 3 core conversion blockers',
      'Built a "content before contact" system: target accounts see content before receiving outreach',
      'Created 8 high-value ungated resources (ROI calculators, checklists, benchmark reports)',
      'Set up LinkedIn retargeting to identify content viewers for prioritised sales follow-up',
      'Wrote 3 tiered outbound email sequences (cold → warm → hot) mapped to content consumption stage',
      'Ran a 2-hour sales training on social selling signals and referencing content in outreach',
    ],
    results: [
      { metric: '2.1×', label: 'Increase in qualified pipeline over 10 weeks' },
      { metric: '34%', label: 'Email reply rate on content-aware outbound sequences' },
      { metric: '8', label: 'High-value content assets built and deployed' },
      { metric: '19 days', label: 'Average time from first content touch to booked demo' },
    ],
    keyInsight:
      "[PLACEHOLDER] Warm outbound isn't about personalisation. It's about relevance. When a prospect has already consumed your content, the sales email becomes a logical next step rather than an uninvited interruption. The content does the qualification work so the salesperson doesn't have to.",
  },
]

export interface Service {
  id: string
  title: string
  description: string
  deliverables: string[]
  whoFor: string
  priceRange: string
  icon: 'rocket' | 'cpu' | 'users' | 'map'
}

export const services: Service[] = [
  {
    id: 'organic-growth-sprint',
    icon: 'rocket',
    title: 'Organic Growth Sprint',
    description:
      'A focused 90-day engagement to build your organic growth foundation from scratch — keyword strategy, content, and distribution all in one motion.',
    deliverables: [
      'Full SEO audit + competitive gap analysis',
      'Keyword universe (200+ terms) mapped to buyer journey',
      '12-month editorial calendar',
      '6–10 long-form articles, fully written and published',
      'Distribution playbook + channel setup',
      'Analytics dashboard + tracking configuration',
    ],
    whoFor: 'Early-stage startups with strong product-market fit but near-zero organic presence.',
    priceRange: '$3,500 – $6,000',
  },
  {
    id: 'ai-content-system',
    icon: 'cpu',
    title: 'AI Content System Setup',
    description:
      'Build a scalable, AI-augmented content production system your team can run independently — without needing a full-time content hire.',
    deliverables: [
      'Custom AI prompt library (research, drafting, editing, repurposing)',
      'Content workflow SOPs and documentation',
      'First 30-day content batch, produced with the system',
      'Quality rubrics and editorial standards guide',
      'Platform-specific formatting and style templates',
      '2-hour team training session',
    ],
    whoFor: 'Teams that want to produce more content without proportionally growing headcount.',
    priceRange: '$2,000 – $3,500',
  },
  {
    id: 'fractional-growth-partner',
    icon: 'users',
    title: 'Fractional Growth Partner',
    description:
      'Your embedded senior growth team member — strategy, execution, and distribution — without the full-time cost or 6-month hiring process.',
    deliverables: [
      'Weekly strategy call + async Slack access',
      'Full content production and calendar management',
      'Distribution oversight across up to 3 channels',
      'Monthly growth report with insights and recommendations',
      'Quarterly strategy and positioning review',
      'Handoff-ready documentation throughout',
    ],
    whoFor: 'Startups that need a senior growth operator but aren\'t ready to hire full-time.',
    priceRange: '$2,500 – $4,000 / mo',
  },
  {
    id: 'gtm-strategy-session',
    icon: 'map',
    title: 'GTM Strategy Session',
    description:
      'A single deep-dive session to map your go-to-market — from ICP to positioning to the first channels worth investing in.',
    deliverables: [
      'Pre-session questionnaire and materials audit',
      '3-hour live strategy session (recorded)',
      'ICP definition + detailed persona cards',
      'Messaging and positioning framework',
      'Channel priority matrix with rationale',
      '90-day action plan with milestones and owners',
    ],
    whoFor: "Founders preparing for a launch or a growth push with unclear direction on where to start.",
    priceRange: '$800 – $1,200',
  },
]
