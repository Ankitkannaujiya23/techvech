// Hire-developer landing pages are generated from this array
// (app/hire-developers/[role]). Each page targets a "hire X developers" search.

export const hireSteps = [
  { n: "1", title: "Tell us the role", description: "Skills, stack, seniority and how long you need them for." },
  { n: "2", title: "Get a shortlist in 48 hours", description: "2–3 vetted profiles matched to your brief, with sample work." },
  { n: "3", title: "Interview & confirm", description: "Talk to them directly before you decide — no blind hiring." },
  { n: "4", title: "Onboard in days", description: "Contracts, timesheets and payments handled by us." },
];

export const engagementModels = [
  {
    title: "Contract",
    description: "Hire for a fixed duration or project. Ideal for sprints, MVPs and filling a skill gap quickly.",
  },
  {
    title: "Contract-to-hire",
    description: "Work together first, then convert the developer to your own payroll once you are confident.",
  },
  {
    title: "Full-time dedicated",
    description: "A developer who works only on your product, inside your tools, standups and timezone overlap.",
  },
];

export const roles = [
  {
    slug: "react-developers",
    name: "React Developers",
    stack: "React",
    metaTitle: "Hire React Developers in India",
    metaDescription:
      "Hire vetted React and Next.js developers on contract, contract-to-hire or full-time. Shortlist in 48 hours, interview before you decide, onboard in days.",
    h1: "Hire React developers who ship production code",
    lead:
      "Get pre-vetted React and Next.js engineers for your product team. They work inside your tools and timezone overlap, with contracts, timesheets and payments handled by TechVech.",
    skills: ["React 18 & hooks", "Next.js (App Router, SSR/SSG)", "TypeScript", "State management (Redux, Zustand, React Query)", "Tailwind CSS & design systems", "Testing with Jest and Playwright", "Performance & Core Web Vitals"],
    suits: ["SaaS dashboards and web apps", "E-commerce and marketplace front-ends", "Marketing sites that need to rank", "Migrating legacy front-ends to React"],
    faqs: [
      { q: "How fast can I hire a React developer through TechVech?", a: "We share a shortlist of matched profiles within about 48 hours of understanding your brief. After interviews, most developers can start within days." },
      { q: "Can I interview the developer before hiring?", a: "Yes. You speak with every shortlisted developer directly and decide yourself — there is no blind hiring." },
      { q: "Do the developers work in my timezone?", a: "We match on timezone overlap as part of the brief, so your developer is available during your working hours for standups and reviews." },
      { q: "What if the developer is not the right fit?", a: "Tell us early. We arrange a replacement so your project does not lose momentum." },
    ],
  },
  {
    slug: "nodejs-developers",
    name: "Node.js Developers",
    stack: "Node",
    metaTitle: "Hire Node.js Developers in India",
    metaDescription:
      "Hire experienced Node.js backend developers for APIs, microservices and real-time apps. Flexible contract, contract-to-hire and full-time engagement models.",
    h1: "Hire Node.js developers for scalable backends",
    lead:
      "Add experienced backend engineers who build secure, well-tested APIs and services in Node.js — from MVP backends to high-traffic production systems.",
    skills: ["Node.js, Express and NestJS", "REST and GraphQL APIs", "PostgreSQL, MongoDB and Redis", "Authentication & security best practices", "Microservices and message queues", "AWS, Docker and CI/CD", "Real-time features with WebSockets"],
    suits: ["Backends for web and mobile apps", "Third-party and payment integrations", "Real-time chat and notification systems", "Performance tuning of existing APIs"],
    faqs: [
      { q: "Can your Node.js developers work with our existing codebase?", a: "Yes. They can join an existing codebase, follow your conventions and review process, or build new services from scratch." },
      { q: "Do they write tests and documentation?", a: "We screen for engineering discipline, including testing, code review habits and clear API documentation." },
      { q: "What engagement models are available?", a: "Contract, contract-to-hire and full-time dedicated, depending on your timeline and budget." },
      { q: "How is my code and data protected?", a: "Every engagement is covered by an NDA and IP assignment, and developers work inside your repositories and accounts." },
    ],
  },
  {
    slug: "flutter-developers",
    name: "Flutter Developers",
    stack: "Flutter",
    metaTitle: "Hire Flutter Developers in India",
    metaDescription:
      "Hire vetted Flutter developers to build iOS and Android apps from one codebase. Shortlist in 48 hours with flexible contract or full-time models.",
    h1: "Hire Flutter developers for iOS and Android apps",
    lead:
      "Build beautiful, high-performance cross-platform apps with Flutter engineers who have shipped to the App Store and Play Store and know how to keep apps fast and maintainable.",
    skills: ["Flutter & Dart", "State management (Bloc, Riverpod, Provider)", "REST APIs, Firebase and local storage", "Push notifications, payments and maps", "Custom animations and responsive UI", "App Store and Play Store releases", "Unit, widget and integration testing"],
    suits: ["Consumer and marketplace apps", "MVPs that need both platforms fast", "Rebuilding slow hybrid apps", "Internal and field-team mobile tools"],
    faqs: [
      { q: "Why choose Flutter over native development?", a: "Flutter delivers near-native performance from a single codebase, which shortens delivery time and reduces cost for most products." },
      { q: "Can the developer also handle store submission?", a: "Yes. Our Flutter developers manage build signing, store listings and releases." },
      { q: "Can I hire a single developer or a full team?", a: "Both. Start with one developer or build a squad with a designer, QA and a lead as your product grows." },
      { q: "How quickly can a Flutter developer start?", a: "After you confirm a profile, onboarding typically takes a few days." },
    ],
  },
  {
    slug: "python-developers",
    name: "Python Developers",
    stack: "Python",
    metaTitle: "Hire Python Developers in India",
    metaDescription:
      "Hire skilled Python developers for backend, automation, data and API projects. Vetted engineers, flexible engagement models, quick onboarding.",
    h1: "Hire Python developers for backend, data and automation",
    lead:
      "Python engineers who build reliable backends, data pipelines and automation — comfortable with Django, FastAPI and the wider data ecosystem.",
    skills: ["Django and FastAPI", "REST APIs and async services", "PostgreSQL and data modelling", "Data pipelines and ETL", "Task queues with Celery", "Cloud deployment on AWS", "Automated testing and CI/CD"],
    suits: ["API backends and admin systems", "Data processing and reporting", "Scraping and workflow automation", "Back-ends for AI-powered products"],
    faqs: [
      { q: "Django or FastAPI — which should I choose?", a: "Django suits full-featured products with admin panels; FastAPI suits lightweight, high-performance APIs. Our developers will recommend what fits your product." },
      { q: "Can Python developers also help with AI features?", a: "Many can. For model-heavy work, see our AI/ML engineers." },
      { q: "How are developers vetted?", a: "Candidates go through technical screening and code review by our own engineers before they reach your shortlist." },
      { q: "Can I scale the team later?", a: "Yes. You can add or reduce developers as your roadmap changes." },
    ],
  },
  {
    slug: "ai-ml-engineers",
    name: "AI / ML Engineers",
    stack: "Python",
    metaTitle: "Hire AI & Machine Learning Engineers",
    metaDescription:
      "Hire AI and machine learning engineers for LLM apps, RAG pipelines, model fine-tuning and MLOps. Vetted talent with flexible engagement models.",
    h1: "Hire AI and machine learning engineers",
    lead:
      "Bring in engineers who can take AI from prototype to production: LLM applications, retrieval pipelines, model evaluation and the infrastructure to run them reliably.",
    skills: ["LLM applications and prompt engineering", "RAG and vector databases", "PyTorch and scikit-learn", "Model fine-tuning and evaluation", "MLOps, monitoring and cost control", "Computer vision and NLP", "Python, FastAPI and cloud deployment"],
    suits: ["Chatbots and copilots on company data", "Document and image processing", "Recommendation and forecasting systems", "Productionising an existing AI prototype"],
    faqs: [
      { q: "Do your AI engineers work with LLM APIs and open-source models?", a: "Yes. They are model-agnostic and select tools based on accuracy, latency, cost and data-privacy requirements." },
      { q: "Can they help move our prototype into production?", a: "Yes — evaluation, guardrails, monitoring and scaling are part of what we screen for." },
      { q: "Can I hire an AI engineer for a short project?", a: "Yes. Contract engagements are common for proof-of-concept and integration work." },
      { q: "How do you vet AI talent?", a: "Through technical interviews, practical exercises and review of real project work before profiles reach you." },
    ],
  },
];

export const getRole = (slug) => roles.find((r) => r.slug === slug);
