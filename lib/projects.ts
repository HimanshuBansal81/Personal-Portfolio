export const projectCategories = [
  "Backend",
  "Full Stack",
  "Professional",
  "Learning",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectLinks = {
  caseStudy?: string;
  live?: string;
  github?: string;
};

export type ProjectTechGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  slug: string;
  timeline: string;
  status: string;
  type: string;
  category: ProjectCategory;
  summary: string;
  overview: string[];
  problem: string;
  contribution: string;
  features: string[];
  architecture: string[];
  challenges: string[];
  learnings: string[];
  nextImprovements: string[];
  techStack: string[];
  techGroups: ProjectTechGroup[];
  links: ProjectLinks;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "FreightRate AI",
    slug: "freightrate-ai",
    timeline: "May 2026 - In Progress",
    status: "In Progress",
    type: "Backend / Logistics SaaS",
    category: "Backend",
    summary:
      "A cloud-native multi-carrier freight quote system designed to calculate shipment rates using zones, carrier pricing rules, chargeable weight, surcharges, and AI-assisted explanations.",
    overview: [
      "FreightRate AI is an in-progress backend-focused logistics SaaS project for calculating and comparing freight quotes across multiple carriers. The project is designed around practical logistics rules: zones, carrier pricing, chargeable weight, minimum charges, surcharges, and taxes.",
      "The goal is not only to return a number. A useful freight quote system should explain why a rate was selected and how the final amount was built. That is where the AI explanation layer fits: the deterministic backend calculates the quote, and the AI layer helps turn the breakdown into clear language.",
      "I am using this project to practice modern backend architecture with .NET 8, PostgreSQL, Docker, Redis caching plans, and deployment thinking around Google Cloud Run.",
    ],
    problem:
      "Freight pricing is rarely a fixed-rate calculation. A quote can change based on origin and destination, zone mapping, actual weight, volumetric weight, chargeable weight, carrier-specific rules, fuel surcharge, GST, minimum charges, and business-specific exceptions. If those rules are not modeled clearly, the system becomes hard to test and harder to explain to users.",
    contribution:
      "I am designing the backend architecture, quote flow, data model, service boundaries, Docker setup, Redis caching plan, and AI explanation layer. My focus is on keeping the pricing calculation deterministic and testable while using AI only to explain the calculated result.",
    features: [
      "Multi-carrier quote flow for comparing freight rates.",
      "Origin, destination, and zone-based pricing support.",
      "Chargeable weight calculation using actual and volumetric weight.",
      "Surcharge, minimum charge, fuel, and tax-aware rate composition.",
      "Carrier pricing rule modeling for different shipment scenarios.",
      "Dockerized backend setup for consistent local development.",
      "Redis caching plan for repeated lookup data such as zones and carrier rules.",
      "AI-assisted explanation layer for making quote outputs easier to understand.",
    ],
    architecture: [
      "A quote request comes into the ASP.NET Core Web API with shipment details such as origin, destination, dimensions, and weight.",
      "Validation checks required fields and rejects invalid shipment inputs before pricing begins.",
      "The service layer resolves the shipment zone and selects applicable carrier pricing rules.",
      "Pricing services calculate volumetric weight, chargeable weight, base charges, surcharges, taxes, and final totals.",
      "PostgreSQL stores carrier, zone, and pricing configuration, while Redis is planned for hot lookup data that is read often.",
      "The API returns a structured quote breakdown, and the AI explanation layer turns that breakdown into a plain-language explanation.",
      "The application is being designed for containerized deployment with Docker and Google Cloud Run.",
    ],
    challenges: [
      "Keeping pricing logic explicit enough to test while still flexible for carrier-specific rules.",
      "Designing data models that can support changing zones, charges, and date-bound pricing without brittle conditionals.",
      "Separating calculation correctness from explanation generation so AI does not become the source of truth.",
      "Planning Redis caching around real lookup patterns instead of adding caching prematurely.",
    ],
    learnings: [
      "Backend-heavy SaaS products need clear service boundaries around business rules.",
      "Caching plans should start from real read patterns, not from adding Redis by default.",
      "AI features work best as explainability layers when deterministic business logic remains authoritative.",
      "Pricing systems become easier to reason about when each calculation step produces a clear intermediate result.",
    ],
    nextImprovements: [
      "Add realistic carrier and zone seed data for better testing.",
      "Build quote history and comparison views.",
      "Add unit tests around chargeable weight, surcharge, and minimum charge rules.",
      "Deploy the API to Google Cloud Run once the core quote flow is stable.",
    ],
    techStack: [
      ".NET 8",
      "ASP.NET Core Web API",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT",
      "Google Cloud Run",
      "AI-assisted Development",
    ],
    techGroups: [
      {
        title: "Backend",
        items: [".NET 8", "ASP.NET Core Web API", "JWT"],
      },
      {
        title: "Data & Caching",
        items: ["PostgreSQL", "Redis"],
      },
      {
        title: "Deployment & Tooling",
        items: ["Docker", "Google Cloud Run", "AI-assisted Development"],
      },
    ],
    links: {
      caseStudy: "/projects/freightrate-ai",
    },
    featured: true,
  },
  {
    title: "URL Shortener Platform",
    slug: "url-shortener",
    timeline: "April 2026",
    status: "Live",
    type: "Full Stack Web Application",
    category: "Full Stack",
    summary:
      "A full-stack URL shortener with authentication, custom aliases, expiry support, QR generation, click analytics, and user-owned URL management.",
    overview: [
      "The URL Shortener Platform is a completed full-stack web application for creating and managing shortened links. It includes user authentication, custom aliases, expiry dates, QR generation, click analytics, and a user dashboard.",
      "I built it as a practical project because a URL shortener looks simple but quickly becomes a real application once ownership, redirects, analytics, and deployment are included.",
      "The project connects a .NET 8 backend, PostgreSQL database, and React frontend deployed across Render and Vercel, with real production concerns such as CORS, environment variables, and API configuration.",
    ],
    problem:
      "A useful URL shortener has to do more than store a long URL and return a short one. It must generate unique short codes, support custom aliases, enforce authenticated ownership, handle redirects quickly, check expiry rules, track analytics, and stay reliable after deployment. Small mistakes in these flows can lead to broken redirects, duplicate aliases, or users seeing data they do not own.",
    contribution:
      "I built the backend APIs, JWT authentication, PostgreSQL schema, redirect logic, analytics tracking, frontend dashboard, and deployment flow. I also handled the integration details between the React frontend and .NET API, including CORS, environment variables, and production endpoint configuration.",
    features: [
      "Authenticated URL management with user-owned links.",
      "Custom aliases and generated short codes.",
      "Expiry support for temporary links.",
      "QR code generation for sharing shortened URLs.",
      "Click analytics and redirect tracking.",
      "Dashboard for managing a user's own links.",
      "PostgreSQL-backed constraints for aliases and URL ownership.",
      "Rate limiting and structured logging for safer API behavior.",
    ],
    architecture: [
      "The React frontend handles login, URL creation, URL management, and analytics screens.",
      "Requests go to the ASP.NET Core Web API, where validation and authentication are applied.",
      "The service layer handles short-code generation, custom alias checks, expiry rules, and user ownership.",
      "PostgreSQL stores users, URLs, aliases, expiry metadata, and click events.",
      "Public redirect requests resolve the short code, check expiry, record click analytics, and return the destination URL.",
      "Serilog captures structured logs, rate limiting protects API endpoints, and Docker keeps backend setup reproducible.",
      "The backend is deployed on Render and the frontend is deployed on Vercel, which required careful CORS and environment variable setup.",
    ],
    challenges: [
      "Balancing short-code uniqueness with simple, maintainable generation logic.",
      "Keeping redirects fast while still recording analytics reliably.",
      "Handling ownership, custom aliases, and expiry checks without creating scattered validation paths.",
      "Making frontend and backend deployments communicate correctly across different hosting platforms.",
      "Managing production configuration for API URLs, CORS origins, JWT settings, and database connections.",
    ],
    learnings: [
      "Small products still need careful domain modeling once authentication and analytics are added.",
      "Redirect flows benefit from narrow, predictable API paths and strong database constraints.",
      "Deployment details are part of the product when the app has separate frontend and backend surfaces.",
      "CORS and environment variables are easier to handle when deployment configuration is planned early.",
    ],
    nextImprovements: [
      "Add more analytics views such as referrers, devices, and time-based charts.",
      "Introduce caching for high-traffic redirect lookups.",
      "Add more automated tests around alias uniqueness, expiry, and ownership rules.",
      "Improve error states and empty states in the frontend dashboard.",
    ],
    techStack: [
      ".NET 8",
      "ASP.NET Core Web API",
      "EF Core",
      "PostgreSQL",
      "JWT",
      "Rate Limiting",
      "Docker",
      "Serilog",
      "React",
      "Vite",
      "Tailwind CSS",
      "Render",
      "Vercel",
    ],
    techGroups: [
      {
        title: "Backend",
        items: [".NET 8", "ASP.NET Core Web API", "EF Core", "JWT", "Rate Limiting", "Serilog"],
      },
      {
        title: "Data",
        items: ["PostgreSQL"],
      },
      {
        title: "Frontend",
        items: ["React", "Vite", "Tailwind CSS"],
      },
      {
        title: "Deployment",
        items: ["Docker", "Render", "Vercel"],
      },
    ],
    links: {
      caseStudy: "/projects/url-shortener",
      live: "https://urlshortener.himanshubansal.dev",
      github: "https://github.com/HimanshuBansal81/Url-Shortener",
    },
    featured: true,
  },
  {
    title: "Door-to-Door Logistics Platform",
    slug: "dtd-logistics-platform",
    timeline: "Feb 2024 - Present",
    status: "Professional Experience",
    type: "Enterprise Logistics System",
    category: "Professional",
    summary:
      "A logistics platform case study covering booking workflows, rate management, tariff logic, document uploads, shipment tracking, and business configuration modules.",
    overview: [
      "This is a professional experience case study based on work with a Door-to-Door logistics platform. The system supports operational workflows such as bookings, rate management, tariff logic, document uploads, shipment tracking, and configurable business modules.",
      "The case study is intentionally high-level. It avoids private company details, client names, internal URLs, database schema, and proprietary implementation details while still explaining the kind of engineering work involved.",
      "The work is valuable because enterprise logistics systems contain many edge cases. Correctness, data consistency, and workflow reliability matter more than surface-level UI polish.",
    ],
    problem:
      "Enterprise logistics systems need to support real operational rules: booking flows, customer-specific configurations, duplicate tariff handling, shipment state changes, document workflows, and rate applicability checks. These systems often have legacy layers and dense SQL logic, so even small changes require careful understanding of existing behavior and edge cases.",
    contribution:
      "I worked on backend APIs, SQL Server stored procedures, rate duplication logic, rate applicability checks, document upload workflows, shipment tracking states, and database changes. My role involved understanding existing workflows, making scoped changes, and validating behavior without exposing confidential business logic.",
    features: [
      "Booking and operational workflow support.",
      "Rate management with applicability and duplicate-rate checks.",
      "Shipment tracking state updates.",
      "Document upload workflows for operational records.",
      "Configurable UI and business modules for logistics operations.",
      "Tariff duplication and rate applicability validation.",
      "SQL Server stored procedure changes for data-heavy workflows.",
      "Edge-case handling for operational data updates.",
      "Scheduled background processing and structured logging.",
    ],
    architecture: [
      "Operational users interact with ASP.NET screens that coordinate bookings, rates, documents, and shipment states.",
      "Frontend interactions use jQuery and Kendo UI for grid-heavy workflows and enterprise forms.",
      "Backend APIs and WCF services coordinate workflow actions and integration points.",
      "SQL Server stored procedures handle business-heavy data operations, tariff checks, and rate-related updates.",
      "Validation and duplicate checks run before sensitive rate or tariff changes are saved.",
      "Quartz supports scheduled processing, while Serilog helps with operational diagnostics.",
      "The architecture reflects a real enterprise system where newer changes must work safely with existing legacy patterns.",
    ],
    challenges: [
      "Working safely around complex existing business rules without exposing private implementation details.",
      "Handling overlapping rates, customer-specific configuration, and date-sensitive logic consistently.",
      "Making changes in workflow-heavy areas where data correctness matters more than visual polish.",
      "Improving performance and reliability without rewriting large existing modules.",
      "Testing edge cases around tariffs, documents, and shipment states in a mature system.",
    ],
    learnings: [
      "Enterprise systems reward careful reading of existing behavior before changing code.",
      "Stored procedures and backend APIs need clear contracts when business rules are distributed across layers.",
      "Professional case studies should explain impact and complexity without revealing confidential company, client, schema, or internal system details.",
      "Enterprise logistics work builds discipline around reading existing behavior before changing code.",
    ],
    nextImprovements: [
      "Continue improving performance in data-heavy workflows where safe and measurable.",
      "Document business rules more clearly around rates, tariff duplication, and shipment states.",
      "Strengthen regression checks for edge cases in operational workflows.",
      "Look for opportunities to simplify older flows without disrupting existing users.",
    ],
    techStack: [
      "ASP.NET",
      "C#",
      "SQL Server",
      "Stored Procedures",
      "jQuery",
      "Kendo UI",
      "WCF",
      "XML-based UI Configuration",
      "Quartz",
      "Serilog",
    ],
    techGroups: [
      {
        title: "Backend",
        items: ["ASP.NET", "C#", "WCF", "Quartz", "Serilog"],
      },
      {
        title: "Data",
        items: ["SQL Server", "Stored Procedures"],
      },
      {
        title: "Frontend",
        items: ["jQuery", "Kendo UI", "XML-based UI Configuration"],
      },
    ],
    links: {
      caseStudy: "/projects/dtd-logistics-platform",
    },
    featured: true,
  },
  {
    title: "Developer Portfolio Website",
    slug: "portfolio-website",
    timeline: "April 2026",
    status: "Live",
    type: "Personal Branding Website",
    category: "Full Stack",
    summary:
      "A personal portfolio website for showcasing projects, blogs, services, and professional experience.",
    overview: [
      "This portfolio website is my proof-of-work hub. It brings together my projects, case studies, blog posts, services, contact form, and professional positioning in one place.",
      "I built it because a resume alone does not show enough context. The site gives recruiters and collaborators a clearer way to see what I am building, what I am learning, and how I explain technical decisions.",
      "The portfolio is also a living project. As my backend and full-stack projects mature, the site can grow with better case studies, writing, and project evidence.",
    ],
    problem:
      "A resume is useful, but it compresses too much context into bullet points. I wanted a recruiter-friendly structure where someone can quickly understand my backend focus, inspect real projects, read technical writing, and contact me without searching through disconnected links.",
    contribution:
      "I built the website structure, homepage sections, project showcase, project detail pages, blog timeline, blog detail pages, services page, contact page, and contact form integration. I also deployed it with Vercel and connected it to a custom domain.",
    features: [
      "Homepage with hero, about, skills, featured projects, services, and contact sections.",
      "Projects page with category filters and detailed project cards.",
      "Blog pages powered by Markdown content.",
      "Services and contact pages for professional positioning.",
      "Contact form integration using Resend.",
      "Project detail pages for recruiter-friendly case studies.",
      "Blog timeline with individual readable articles.",
      "Custom domain and production deployment.",
      "Dark, minimal visual style focused on backend-heavy engineering work.",
    ],
    architecture: [
      "Next.js App Router organizes public pages such as home, projects, blog, services, and contact.",
      "Reusable section and layout primitives keep spacing, typography, and cards consistent.",
      "Shared project data feeds the homepage, project listing, and detail pages.",
      "Shared blog data feeds the blog timeline and dynamic article pages.",
      "The contact form posts to an API route and uses Resend for email delivery.",
      "Vercel hosts the app and connects it to the custom domain.",
    ],
    challenges: [
      "Presenting technical depth without turning the site into a keyword-stuffed resume.",
      "Keeping project descriptions specific while leaving room for future case study expansion.",
      "Maintaining consistency across homepage cards, project listings, and detail pages.",
      "Balancing visual polish with the practical feel of a backend-focused portfolio.",
      "Making the content honest and defensible instead of inflated.",
    ],
    learnings: [
      "A portfolio is strongest when it explains decisions, not only lists technologies.",
      "Shared data structures prevent homepage and project pages from drifting apart.",
      "Small design constraints make a personal site feel more focused and professional.",
      "A portfolio becomes more useful when it is treated as a product, not a static profile.",
    ],
    nextImprovements: [
      "Add richer visuals or diagrams to selected case studies.",
      "Improve blog article depth as more projects mature.",
      "Add stronger accessibility and metadata checks.",
      "Keep project content current as live apps and repositories evolve.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Markdown",
      "Resend",
      "Vercel",
    ],
    techGroups: [
      {
        title: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Content & Forms",
        items: ["Markdown", "Resend"],
      },
      {
        title: "Deployment",
        items: ["Vercel", "Custom Domain"],
      },
    ],
    links: {
      caseStudy: "/projects/portfolio-website",
      live: "https://himanshubansal.dev",
      github: "https://github.com/HimanshuBansal81/Personal-Portfolio",
    },
    featured: true,
  },
  {
    title: "DSA Java Interview Prep",
    slug: "dsa-java-interview-prep",
    timeline: "May 2026 - In Progress",
    status: "In Progress",
    type: "Interview Preparation Repository",
    category: "Learning",
    summary:
      "A structured Java-based DSA preparation repository organized by problem-solving patterns instead of random problem dumping.",
    overview: [
      "DSA Java Interview Prep is a planned and in-progress learning repository for organizing Java interview preparation around patterns instead of random problem dumping.",
      "The purpose is to make revision easier. I want the repository to show clean Java solutions, short explanations, topic-wise notes, and progress tracking so it becomes useful during interview preparation.",
      "The repository is not linked publicly yet, so this case study explains the structure and direction rather than presenting it as a finished product.",
    ],
    problem:
      "Interview preparation can become messy when problems are solved randomly and saved without context. It becomes hard to revise patterns, compare approaches, or remember why a solution worked. A structured repository helps turn practice into a repeatable learning system.",
    contribution:
      "I planned the repository structure, topic-wise roadmap, Java solution template, README format, progress tracker, and explanation-first approach. The focus is on building a learning system that supports revision and pattern recognition over time.",
    features: [
      "Pattern-based organization for common interview problem types.",
      "Topic-wise roadmap for steady revision.",
      "Java solution template for consistent practice.",
      "Progress tracker to make preparation visible.",
      "Explanation-first notes focused on reasoning, not only final answers.",
      "Clean Java solution format for consistent practice.",
      "README navigation for topics, patterns, and revision status.",
      "Space for complexity notes and edge-case observations.",
    ],
    architecture: [
      "Repository is organized by topics and problem-solving patterns.",
      "Each topic can contain Java solutions, notes, and revision metadata.",
      "README files provide navigation, goals, and progress context.",
      "Solution templates encourage consistent naming, approach explanation, and problem breakdown.",
      "Revision notes capture mistakes, edge cases, and reusable patterns.",
      "Git history tracks incremental preparation rather than a one-time dump.",
    ],
    challenges: [
      "Keeping practice structured enough for revision without slowing down daily problem solving.",
      "Writing explanations that capture the pattern behind a problem, not only the implementation.",
      "Balancing breadth across topics with depth on core interview patterns.",
      "Avoiding over-documentation that slows down actual problem solving.",
    ],
    learnings: [
      "Interview preparation improves when problems are grouped by reusable patterns.",
      "Readable explanations make later revision faster than code-only notes.",
      "A public learning repo can show consistency, communication, and problem-solving habits.",
      "The best preparation system is one that is easy enough to maintain every week.",
    ],
    nextImprovements: [
      "Create the public GitHub repository once the initial structure is ready.",
      "Add topic READMEs and a progress tracker.",
      "Start with core patterns such as arrays, strings, hashing, two pointers, recursion, and trees.",
      "Add concise explanations and complexity notes for each solved problem.",
    ],
    techStack: [
      "Java",
      "Data Structures",
      "Algorithms",
      "GitHub Documentation",
      "Problem Solving",
    ],
    techGroups: [
      {
        title: "Language",
        items: ["Java"],
      },
      {
        title: "Practice Areas",
        items: ["Data Structures", "Algorithms", "Problem Solving"],
      },
      {
        title: "Documentation",
        items: ["GitHub Documentation", "Revision Notes"],
      },
    ],
    links: {
      caseStudy: "/projects/dsa-java-interview-prep",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
