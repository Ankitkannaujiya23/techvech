// Blog posts live here as structured blocks (no markdown dependency needed).
// Block types: h2, p, ul (items), callout.
// These starter articles are general-purpose guides — edit freely, add your
// own experience, and append new posts to the array. Newest first.

export const posts = [
  {
    slug: "what-drives-the-cost-of-a-mobile-app-in-india",
    title: "What Drives the Cost of Building a Mobile App in India?",
    description:
      "Planning a mobile app? Here are the factors that actually decide the cost of app development in India, and how to budget without surprises.",
    category: "Mobile Apps",
    date: "2026-11-05",
    readingTime: "5 min read",
    blocks: [
      { t: "p", c: "Almost every founder asks the same first question: how much will my app cost? The honest answer is that there is no single number — cost is the result of a handful of decisions you control. Understanding them lets you budget realistically and cut scope intelligently instead of cutting quality." },
      { t: "h2", c: "1. Platforms: iOS, Android or both" },
      { t: "p", c: "Building separately for each platform roughly doubles the engineering effort. Cross-platform frameworks such as Flutter and React Native let one team ship both from a shared codebase, which is why they are the default choice for most MVPs." },
      { t: "h2", c: "2. Feature complexity" },
      { t: "p", c: "A login screen and a list of items is a very different project from live location tracking, in-app payments, chat and an admin dashboard. Every feature adds design, development, testing and maintenance time." },
      { t: "h2", c: "3. Design depth" },
      { t: "p", c: "Standard components are faster than custom animations and bespoke illustrations. Good design is worth paying for, but decide which screens deserve polish at launch and which can follow later." },
      { t: "h2", c: "4. Backend and integrations" },
      { t: "p", c: "Most apps need servers, databases, authentication and an admin panel. Third-party integrations — payment gateways, SMS, maps, KYC providers, analytics — each add setup, testing and sometimes recurring fees." },
      { t: "h2", c: "5. Team model" },
      { t: "ul", items: ["Freelancer: lowest cost, but you carry the project-management and quality risk.", "Agency: higher cost, with design, QA and project management included.", "Dedicated developers: a middle path where you manage the roadmap and hire only the engineering capacity you need."] },
      { t: "h2", c: "6. Post-launch costs" },
      { t: "p", c: "Budget for app-store fees, cloud hosting, bug fixes, OS updates and new features. A common rule of thumb is to plan for ongoing maintenance every year rather than treating launch as the finish line." },
      { t: "callout", c: "How to keep costs under control: launch an MVP with the three features that prove your idea, measure real usage, and expand based on data." },
      { t: "h2", c: "Get a number that fits your product" },
      { t: "p", c: "The fastest way to a reliable estimate is a short scoping session where features are listed, prioritised and phased. That is how we quote at TechVech — a fixed price against a clear scope." },
    ],
  },
  {
    slug: "how-to-hire-a-react-developer",
    title: "How to Hire a React Developer: A Practical Checklist",
    description:
      "A practical guide to hiring a React developer: skills to test, red flags to avoid, engagement models and the interview questions that actually work.",
    category: "Hiring",
    date: "2026-10-28",
    readingTime: "6 min read",
    blocks: [
      { t: "p", c: "Hiring a React developer sounds simple until you read fifty near-identical resumes. The difference between a developer who ships and one who struggles shows up in how they think about components, state and performance — not in the list of libraries on their CV." },
      { t: "h2", c: "Decide the engagement model first" },
      { t: "ul", items: ["Contract: best for a defined project or sprint.", "Contract-to-hire: reduces risk if you eventually want the person on payroll.", "Full-time dedicated: right when you have a long roadmap and need someone embedded in your team."] },
      { t: "h2", c: "Skills worth testing" },
      { t: "ul", items: ["Solid JavaScript and TypeScript fundamentals, not just React syntax.", "Component design: when to split, when to lift state, how to avoid prop-drilling.", "Data fetching and caching with tools like React Query.", "Performance: memoisation, code-splitting and measuring with real tools.", "Next.js knowledge if SEO or server rendering matters for your product.", "Testing habits and comfort with code review."] },
      { t: "h2", c: "Interview questions that reveal depth" },
      { t: "ul", items: ["Walk me through the last component you refactored and why.", "How would you debug a page that re-renders too often?", "How do you decide between local state, context and a state library?", "Show me a pull request you are proud of."] },
      { t: "h2", c: "Red flags" },
      { t: "ul", items: ["Cannot explain how their own projects were structured.", "No opinion on trade-offs — every answer is 'it depends' without follow-up.", "Portfolio contains only tutorial clones."] },
      { t: "callout", c: "Always give a small, paid, real-world task. One hour of working together tells you more than five hours of questions." },
      { t: "h2", c: "Skip the screening with a vetted network" },
      { t: "p", c: "If you would rather not run the entire process yourself, TechVech shortlists pre-vetted React developers within about 48 hours. You still interview them directly before you decide." },
    ],
  },
  {
    slug: "native-vs-cross-platform-app-development",
    title: "Native vs Cross-Platform App Development: Which Should You Choose?",
    description:
      "Native iOS/Android or Flutter and React Native? Compare performance, cost, speed and maintenance to choose the right approach for your app.",
    category: "Mobile Apps",
    date: "2026-10-20",
    readingTime: "5 min read",
    blocks: [
      { t: "p", c: "Choosing between native and cross-platform development is one of the first big decisions in any mobile project. It affects cost, speed, hiring and what your app can do. Here is a clear way to decide." },
      { t: "h2", c: "What 'native' and 'cross-platform' mean" },
      { t: "p", c: "Native apps are built separately for each platform — Swift for iOS and Kotlin for Android. Cross-platform apps use a single codebase, most commonly with Flutter or React Native, and compile to run on both." },
      { t: "h2", c: "When cross-platform is the better choice" },
      { t: "ul", items: ["You need iOS and Android quickly and want to validate an MVP.", "Your app is mostly forms, lists, content, payments and standard device features.", "You want one team and one codebase to maintain.", "Budget matters — a single codebase usually reduces both build and maintenance effort."] },
      { t: "h2", c: "When native is worth it" },
      { t: "ul", items: ["Heavy use of advanced camera, AR, Bluetooth or other hardware features.", "Graphics-intensive experiences or games.", "You need day-one support for the newest platform features.", "Your product depends on deep OS integration."] },
      { t: "h2", c: "Flutter vs React Native in one paragraph" },
      { t: "p", c: "Flutter gives you pixel-consistent custom UI and strong performance. React Native lets teams reuse JavaScript and React skills, which is attractive if you already have a web team. Both are mature and production-proven." },
      { t: "callout", c: "A good default: start cross-platform, and go native only for the specific features that require it." },
      { t: "p", c: "Not sure which fits your idea? Share your requirements with us and we will recommend an approach based on features, budget and timeline." },
    ],
  },
  {
    slug: "what-is-rag-and-how-businesses-use-it",
    title: "What Is RAG? How Businesses Use AI Chatbots on Their Own Data",
    description:
      "RAG (retrieval-augmented generation) lets AI answer questions using your company's documents. Learn how it works, where it fits and what to watch out for.",
    category: "AI",
    date: "2026-10-12",
    readingTime: "5 min read",
    blocks: [
      { t: "p", c: "Large language models are impressive, but out of the box they know nothing about your company's policies, products or customers. Retrieval-augmented generation — RAG — fixes that by letting the model look up relevant information from your own documents before it answers." },
      { t: "h2", c: "How RAG works, simply" },
      { t: "ul", items: ["Your documents (PDFs, help articles, wikis, tickets) are split into chunks and stored in a searchable index.", "When someone asks a question, the system retrieves the most relevant chunks.", "Those chunks are given to the language model as context, so the answer is grounded in your data.", "The answer can cite its sources so users can verify it."] },
      { t: "h2", c: "Where businesses use it" },
      { t: "ul", items: ["Customer-support assistants that answer from help-centre content.", "Internal knowledge search across policies, SOPs and past projects.", "Sales enablement tools that surface product details instantly.", "Compliance and legal teams searching long documents."] },
      { t: "h2", c: "RAG vs fine-tuning" },
      { t: "p", c: "Fine-tuning changes how a model behaves; RAG changes what it knows at answer time. For most business knowledge use cases, RAG is faster to build, cheaper to update and easier to audit — you update the documents, not the model." },
      { t: "h2", c: "What makes a RAG system good" },
      { t: "ul", items: ["Clean, well-structured source content.", "Sensible chunking and retrieval tuning.", "Evaluation on real questions, not just demos.", "Guardrails for questions the system should not answer.", "Access controls so people only retrieve what they are allowed to see."] },
      { t: "callout", c: "Start with one narrow, high-value use case and a measurable goal, such as reducing repeat support tickets." },
      { t: "p", c: "If you are exploring an AI assistant for your team or customers, our AI development service can scope a proof of concept around your data." },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
