export const projects = [
  {
    number: '01', name: 'GoThreadly', category: 'Product / AI-Powered Growth Platform',
    status: 'Currently building', headline: 'Helping businesses find the right customers.',
    description: "I'm building GoThreadly for customer discovery and growth. Current work focuses on lead generation and search visibility.",
    detail: 'The broader plan brings lead qualification, outreach, and campaigns into one workspace for founders, startups, and growing businesses. These are planned capabilities.',
    tags: ['Customer discovery', 'Lead generation', 'Search visibility'],
    link: 'https://www.gothreadly.live/', label: 'Explore GoThreadly', visual: 'growth',
  },
  {
    number: '02', name: 'PropTech', category: 'Research / Workflow Automation',
    status: 'Research + tested workflow', headline: 'Turning real estate research into a working automation.',
    description: "I researched India's PropTech ecosystem, then built and tested a Make.com workflow for property visit notifications.",
    detail: 'The nine-page presentation, “Where is value and momentum moving in India’s PropTech ecosystem?”, covers market structure, business opportunities, and automation applications. The research also examined customer enquiries, follow-ups, and property management workflows.',
    tags: ['Industry research', 'Make.com', 'Customer notifications'],
    link: 'https://eu1.make.com/public/shared-scenario/UIApBIQz0dG/property-visit-notify-customer-of-poc',
    label: 'View Automation', visual: 'workflow',
  },
  {
    number: '03', name: 'Crystal & Gemstone\nBusiness', category: 'Business / E-commerce',
    status: 'Five-member team', headline: 'Selling crystals and gemstones at DLF CyberHub.',
    description: "With a five-member team at Masters' Union, I helped build a crystal and gemstone business over 30–40 days, ending with a one-day sales event.",
    detail: 'My work covered product selection, supplier negotiations, e-commerce setup, Razorpay integration, marketing, and logistics.',
    result: '₹97,000', resultLabel: 'Team revenue · one-day event',
    tags: ['Product sourcing', 'E-commerce setup', 'Customer sales'], visual: 'crystal',
  },
  {
    number: '04', name: 'StockFlow', category: 'Product / AI-Assisted Development',
    status: 'Built + published', headline: 'An idea turned into working software.',
    description: 'I built and published a sports inventory application using AI-assisted tools, covering stock tracking, suppliers, and procurement.',
    detail: 'A classroom experiment built with Google Stitch, Google AI Studio, and Render. It includes stock movements, reporting, and AI-assisted inventory planning. It also covers product management and supplier records.',
    tags: ['Inventory tracking', 'Procurement', 'AI-assisted building'],
    link: 'https://stockflow-inventory-gfw0.onrender.com/', label: 'Explore StockFlow', visual: 'inventory',
  },
];

export const experiences = [
  {
    company: 'Doodlez', role: 'Supply Chain & Order Management Intern',
    period: 'October 2025 – December 2025', location: 'Bengaluru',
    description: 'Handled e-commerce orders, supplier coordination, and delivery issues across fulfilment operations.',
  },
  {
    company: 'VYBN', role: 'Operations Support Intern',
    period: 'June 2025 – August 2025', location: 'Chennai',
    description: 'Supported order fulfilment, customer enquiries, and delivery coordination.',
  },
  {
    company: 'Vel Solution', role: 'Management Trainee',
    period: 'April 2024 – June 2024', location: 'Chennai',
    description: 'Prepared business reports, organised documentation, and supported management decisions.',
  },
];

export const capabilities = [
  {
    name: 'Building products', icon: 'product',
    description: 'Taking an idea to a working application with AI-assisted tools.',
    examples: [{ name: 'GoThreadly', href: '#project-01' }, { name: 'StockFlow', href: '#project-04' }],
  },
  {
    name: 'Research & automation', icon: 'workflow',
    description: 'Studying an industry and building workflows around practical problems.',
    examples: [{ name: 'PropTech research & workflow', href: '#project-02' }],
  },
  {
    name: 'Business & operations', icon: 'business',
    description: 'Sourcing, pricing, customer sales, order fulfilment, and supplier coordination.',
    examples: [{ name: 'Crystal business', href: '#project-03' }, { name: 'Internships', href: '#experience' }],
  },
];

export const toolGroups = [
  { name: 'Business & presentation', items: [
    { name: 'Microsoft Excel', mark: 'X', brand: 'excel' },
    { name: 'PowerPoint', mark: 'P', brand: 'powerpoint' },
    { name: 'Zoho ERP', mark: 'Z', brand: 'zoho' },
    { name: 'Zoho OMS', mark: 'Z', brand: 'zoho' },
  ] },
  { name: 'Design & content', items: [
    { name: 'Canva', mark: 'C', brand: 'canva' },
    { name: 'Google Stitch', mark: 'S', brand: 'stitch' },
    { name: 'Figma', mark: 'F', brand: 'figma' },
    { name: 'Midjourney', mark: 'MJ', brand: 'midjourney' },
  ] },
  { name: 'Building & automation', items: [
    { name: 'n8n', mark: 'n8n', brand: 'n8n' },
    { name: 'Make', mark: 'M', brand: 'make' },
    { name: 'Google AI Studio', mark: 'AI', brand: 'aistudio' },
    { name: 'Lovable', mark: 'L', brand: 'lovable' },
    { name: 'Cursor', mark: '↗', brand: 'cursor' },
  ] },
];

export type ProjectMediaItem = { src: string; alt: string; caption: string; width: number; height: number };
export const projectMedia: Record<string, ProjectMediaItem[]> = {
  growth: [{ src: '/images/projects/gothreadly-landing.png', alt: 'GoThreadly landing page and product interface preview', caption: 'Current landing page · interface demo', width: 1280, height: 720 }],
  workflow: [{ src: '/images/projects/make-workflow.png', alt: 'Make.com property-visit workflow linking Google Sheets, a router, and Gmail notifications', caption: 'Make.com · public workflow preview', width: 1280, height: 720 }],
  crystal: [
    { src: '/images/projects/crystal-customer-interaction.jpg', alt: 'Customer interaction at the crystal and gemstone stall', caption: 'Customer interaction · DLF CyberHub', width: 960, height: 1280 },
    { src: '/images/projects/crystal-stall.jpg', alt: 'Full stall setup for the Masters’ Union business event', caption: 'The stall setup', width: 704, height: 960 },
  ],
  inventory: [{ src: '/images/projects/stockflow-dashboard.png', alt: 'StockFlow inventory dashboard showing stock tracking and procurement features', caption: 'StockFlow · application interface', width: 1280, height: 720 }],
};
