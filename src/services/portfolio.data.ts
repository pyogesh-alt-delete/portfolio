export const PORTFOLIO = {
  identity: {
    name: 'P Yogesh',
    role: 'Specialist Programmer',
    company: 'Infosys',
    location: 'Hyderabad, IN',
    status: 'Open to Work',
    tagline: 'Full-Stack AI Engineer specialized in building scalable agentic AI systems and high performance applications with Angular, Spring Boot, and LLMs.',
    handle: 'mrgeraffe',
    cv: '/P Yogesh.pdf',
    socials: [
      { label: 'github',   handle: '@pyogesh-alt-delete',          href: 'https://github.com/pyogesh-alt-delete' },
      { label: 'linkedin', handle: 'in/pyogesh2810',       href: 'https://linkedin.com/in/pyogesh2810' },
      { label: 'medium',   handle: '@yogeshthinks',          href: 'https://medium.com/@yogeshthinks' },
      { label: 'email',    handle: 'pyogesh2810@gmail.com', href: 'mailto:pyogesh2810@gmail.com' }
    ]
  },

  about: {
    body: [
      "I am a Full-Stack AI Engineer with over 5 years of experience dedicated to bridging the gap between robust software architecture and cutting-edge Artificial Intelligence.",
      "My expertise lies in the Full-Stack + AI intersection, building seamless frontends with Angular, resilient microservices using Spring Boot, and integrating LLMs through advanced RAG and agentic workflows.",
      "I am a Microsoft Certified Azure AI Fundamentals professional and a winner of the 2023 Generative AI Makeathon, where I led a team to develop an innovative contract analysis engine. Whether it's modernizing legacy codebases or implementing complex unit testing frameworks with Karma and Jasmine, I am committed to high code quality and performant engineering."
    ],
    facts: [
      { k: 'Domain',  v: 'FullStack AI Engineer' },
      { k: 'Experience', v: '5+ years' },
      { k: 'Based in',   v: 'Hyderabad, IN' }
    ]
  },

  stack: [
    {
      group: 'Frontend',
      icon: 'frontend',
      color: '220',
      items: ['Angular', 'TypeScript', 'HTML5', 'SCSS']
    },
    {
      group: 'Backend',
      icon: 'backend',
      color: '160',
      items: ['Spring Boot', 'Java', 'Python', 'REST APIs']
    },
    {
      group: 'AI / ML',
      icon: 'ai',
      color: '280',
      items: ['LLM Engineering', 'Agentic AI', 'RAG', 'Prompt Engineering']
    },
    {
      group: 'Data',
      icon: 'data',
      color: '30',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'Kafka', 'StreamSets']
    },
    {
      group: 'Cloud & DevOps',
      icon: 'cloud',
      color: '195',
      items: ['AWS', 'Azure', 'Docker', 'CI/CD']
    },
    {
      group: 'Testing',
      icon: 'testing',
      color: '130',
      items: ['Karma', 'Jasmine', 'Unit Testing', 'Integration Testing']
    }
  ],

  experience: [
    {
      role: 'Specialist Programmer',
      org: 'Infosys',
      period: 'June 2023 — Present',
      now: true,
      summary: 'Building enterprise full-stack platforms and introducing applied-AI capabilities into existing product lines.',
      points: [
        ' Designed and launched an AI-powered customer support platform using Angular and Spring Boot to provide seamless communication across multiple channels.',
        'Architected a multi-agent AI system, coordinating specialized agents for natural language understanding, automated ticket classification, and efficient knowledge retrieval.',
        'Developed a natural language query builder that allows non-technical users to create complex support requests using intuitive, everyday language.',
        'Managed end-to-end responsibilities including design, development, integration testing, quality assurance, and production deployment of distributed application modules.',
      ],
      tags: ['Angular', 'Spring Boot', 'AWS', 'LLM', 'Kafka']
    },
    {
      role: 'Digital Specialist Engineer',
      org: 'Infosys',
      period: 'May 2021 — June 2023',
      now: false,
      summary: 'Shipped customer-facing modules and hardened the services behind them.',
      points: [
        'Architected and deployed a multi-level telemetry dashboard using Angular and Apache ECharts to provide interactive, real-time visualizations for various application services.',
        'Engineered a robust validator microservice to ensure data integrity across high-throughput Kafka and StreamSets pipelines.',
        'Led a major migration of the Angular framework to the latest version, modernizing the codebase and enabling new security and performance features.',
        'Implemented a comprehensive unit testing framework using Karma and Jasmine to ensure high code quality across dozens of frontend components.'
      ],
      tags: ['TypeScript', 'Java', 'PostgreSQL', 'Redis']
    },
  ],

  articles: [
    { title: 'From Good to Great: Transform Your Projects with TypeScript Utility Types! ( Part 1 )', read: '5 min', date: 'Apr 2025', claps: '', tag: 'Web' },
    { title: 'Unveiling the Art of Instant Portrait Enhancement for a Visually Stunning Website', read: '4 min', date: 'Aug 2023', claps: '18', tag: 'Design' },
    { title: 'Using Svelte to build an eCommerce shopping cart', read: '8 min', date: 'Aug 2022', claps: '3', tag: 'Frontend' },
    { title: 'Getting Started with Regular Expressions in JavaScript', read: '4 min', date: 'May 2022', claps: '4', tag: 'Backend' }
  ],

  music: [
    { title: 'Nee En Replay', kind: 'Indie Pop', year: '2026', len: '2:09', color: '699', file: "replay.wav" },
  ],

  research: [
    { title: 'Self-correcting agent loops with bounded tool budgets', stat: 'in progress', pct: 62 },
    { title: 'Cheap evals for RAG groundedness in production traffic', stat: 'exploring', pct: 38 },
    { title: 'Streaming feature stores for near-real-time inference', stat: 'drafting', pct: 18 }
  ]
};

export type PortfolioData = typeof PORTFOLIO;
