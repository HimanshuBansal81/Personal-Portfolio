export type BlogPostData = {
  title: string;
  slug: string;
  date: string;
  displayDate: string;
  category: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPostData[] = [
  {
    title: "Starting My Developer Portfolio as a Proof-of-Work Hub",
    slug: "starting-my-developer-portfolio-proof-of-work-hub",
    date: "2026-04-15",
    displayDate: "Apr 15, 2026",
    category: "Portfolio",
    readTime: "5 min read",
    summary:
      "Why I started building my personal portfolio, how I planned the structure, and why a developer portfolio should be more than a static resume page.",
    tags: ["Portfolio", "Next.js", "Developer Branding", "Career"],
    content: `
## Intro

I started building my portfolio because I wanted something more useful than a static resume page. A resume is important, but it compresses too much context into short bullet points. It can say that I work with .NET, SQL, backend systems, and full-stack projects, but it does not show how I think, how I explain technical decisions, or how I connect learning with actual project work.

The goal was to create a proof-of-work hub. I wanted one place that connects my resume, GitHub, LinkedIn, project case studies, writing, services, and contact information. I did not want the site to look fancy for its own sake. I wanted it to help someone understand what I am building and what direction I am growing in.

## Why I worked on this

I worked on this because I wanted recruiters and collaborators to see more than a list of technologies. My experience includes enterprise .NET work, SQL-heavy systems, jQuery, Kendo UI, and newer personal projects with .NET 8, React, Next.js, PostgreSQL, Docker, and cloud deployment. Without a portfolio, those things can look disconnected.

A portfolio gives me a way to explain the connection. It shows that I am using my professional backend experience as a base while actively building modern projects. It also gives me a place to write about the process, not only the final result.

## What problem I was trying to solve

The problem was presentation and context. A project card can show a title and tech stack, but it does not explain why the project matters. A GitHub repository can show code, but it may not explain the problem, the tradeoffs, or what I learned.

I wanted the portfolio to solve that gap by giving each project a case study page. A good case study can explain:

- what the project is
- what problem it solves
- what I built or planned
- what technologies I used
- what was difficult
- what I would improve next

That context is more valuable than a random list of links.

## How I approached it

I started with the structure. The homepage needed to communicate my direction quickly: backend-focused full-stack development, .NET, SQL, system design, and business applications. After that, the site needed deeper sections for projects, blogs, services, and contact.

I built it with Next.js, React, TypeScript, Tailwind CSS, Resend, and Vercel. Next.js gave me a clean routing model, TypeScript helped keep shared data structured, Tailwind made it easier to stay consistent visually, Resend handled the contact form, and Vercel gave me a simple deployment path.

I also made project and blog data shared instead of duplicating content across pages. That keeps the homepage, project listing, project detail pages, and blog pages from drifting apart.

## What I learned technically

The biggest technical lesson was that even a portfolio benefits from architecture. It is easy to treat a personal site as a collection of pages, but once projects, blogs, and detail pages are added, the content model matters.

I also learned that design consistency matters more than visual effects. Reusable sections, cards, labels, tags, and buttons make the site feel more professional without making it noisy.

Another useful lesson was that writing is part of engineering presentation. If I cannot explain a project clearly, the project is harder for other people to evaluate.

## Mistakes or confusing parts

At first, it was tempting to make the content sound like a resume. That made the site feel generic. The better direction was to write in a practical way: what I built, why I built it, what I learned, and what I would improve.

Another confusing part was deciding how much detail to include. Too little detail makes the site shallow. Too much detail can overwhelm visitors. I am still trying to balance skimmable pages with useful explanations.

## What I would improve next

I want to keep improving the case studies with diagrams, screenshots, and more concrete technical decisions. I also want to keep the blog active as a learning timeline instead of treating it like a generic SEO section.

The portfolio should keep changing as my projects mature. That is the point of a proof-of-work hub: it should grow with the work.

## Final takeaway

A developer portfolio should not only say what you know. It should show how you work. For me, the portfolio is a practical way to connect projects, writing, experience, and learning into one place that is easier for recruiters and collaborators to understand.
`,
  },
  {
    title: "What I Learned Deploying a Full-Stack URL Shortener",
    slug: "deploying-full-stack-url-shortener-dotnet-react",
    date: "2026-04-29",
    displayDate: "Apr 29, 2026",
    category: "Full Stack Development",
    readTime: "8 min read",
    summary:
      "A practical breakdown of building and deploying a URL shortener with .NET 8, PostgreSQL, JWT authentication, React, Render, and Vercel.",
    tags: [".NET 8", "React", "PostgreSQL", "Deployment", "JWT"],
    content: `
## Intro

The URL shortener was one of the most useful full-stack projects I built because it looked simple at first and then quickly became real. Creating a short link is not difficult by itself. The interesting part starts when users need accounts, custom aliases, expiry support, analytics, QR codes, ownership rules, and deployment.

This project helped me practice the full path from backend API design to frontend integration and production deployment. It also reminded me that local success does not guarantee production success.

## Why I worked on this

I wanted a project that was small enough to complete but serious enough to include real backend concerns. A URL shortener is a good fit for that because the core idea is easy to understand, but the implementation still requires careful decisions.

I also wanted hands-on practice with a modern stack: .NET 8 Web API, PostgreSQL, Entity Framework Core, JWT authentication, React, Tailwind CSS, Render, and Vercel.

## What problem I was trying to solve

The product problem was to let users create and manage short links. The backend problem was to make that safe and predictable.

A real URL shortener has to handle:

- user authentication with JWT
- short-code generation and uniqueness
- custom aliases
- expiry dates
- redirect flow
- click analytics
- user-owned URLs
- API rate limiting
- logging and production configuration

If these rules are not handled carefully, users can collide on aliases, access links they do not own, or create links that behave differently in production than they did locally.

## How I approached it

I treated the backend as the source of truth. The React frontend is responsible for the user experience, but ownership, validation, expiry checks, alias uniqueness, and redirects belong on the server.

The redirect flow is the most important part. A request comes in with a short code. The API looks up the matching URL, checks whether it exists, verifies that it has not expired, records analytics, and then redirects to the original destination.

For authenticated dashboard actions, JWT protects the user routes. PostgreSQL stores users, URLs, aliases, expiry metadata, and click events. Entity Framework Core handles database access, while constraints help protect the data model.

Deployment added another layer. The backend and frontend were deployed separately, so CORS, environment variables, API base URLs, JWT settings, database connection strings, logging, and production configs all had to line up.

## What I learned technically

I learned that a small app still needs clear boundaries. Redirect logic should be narrow and fast. Dashboard logic should care about ownership and management. Analytics should not make redirects fragile.

I also learned how much deployment changes the way you think. Locally, it is easy to assume everything is connected. In production, the frontend, backend, database, and environment variables all need to agree.

Render and Vercel made deployment approachable, but they also forced me to understand configuration more clearly. That was a good thing.

Another useful lesson was that logs and rate limiting are not optional extras. When an app is deployed publicly, I need some way to understand what happened when a request fails, and I need basic protection so the API is not completely open to abuse. Even simple structured logs make debugging less stressful.

The project also made frontend and backend contracts more important. The frontend should not guess how errors work. The API needs predictable responses so the dashboard can show useful messages instead of generic failure states.

## Mistakes or confusing parts

One confusing part was deciding how much work should happen during a redirect. Recording analytics is useful, but redirects should stay quick. That is an area where Redis caching and better background processing could help later.

Another mistake was underestimating CORS and environment configuration. The code can be correct, but if production URLs or allowed origins are wrong, the app still fails.

## What I would improve next

I would add Redis caching for high-traffic short-code lookups, improve analytics with charts and filters, and add more automated tests around alias uniqueness, expiry, ownership, and redirects.

I would also improve CI/CD so build and deployment checks are more repeatable. The project is live, but there is still room to make it more production-minded.

## Final takeaway

A URL shortener is not just a beginner CRUD project when it is built end to end. Authentication, redirects, analytics, ownership, deployment, and production configuration make it a practical full-stack learning project.
`,
  },
  {
    title: "Structuring My GitHub and Java DSA Preparation",
    slug: "structuring-github-java-dsa-preparation",
    date: "2026-05-06",
    displayDate: "May 6, 2026",
    category: "Interview Preparation",
    readTime: "6 min read",
    summary:
      "How I am organizing my Java DSA preparation repository around patterns, explanations, clean code, and interview revision.",
    tags: ["Java", "DSA", "GitHub", "Interview Prep"],
    content: `
## Intro

I started structuring my Java DSA preparation because I did not want another random LeetCode dump. Solving problems is important, but if the work is not organized, it becomes hard to revise and even harder to explain later.

The goal is to build a preparation repository that helps me practice consistently, recognize patterns, and return to older problems with useful notes.

## Why I worked on this

Interview preparation can become noisy. It is easy to solve one array problem, then one tree problem, then a dynamic programming problem, and still feel unsure about what is improving.

I wanted a GitHub structure that supports actual revision. It should show consistency, but it should also help me learn. The repository should make it clear which patterns I have practiced and where I still need work.

## What problem I was trying to solve

The problem is not only solving DSA questions. The problem is retaining the approach.

If I solve a problem today and cannot explain it after two weeks, the solution did not help much. A good preparation system should capture:

- the problem pattern
- the approach
- time and space complexity
- edge cases
- clean Java implementation
- mistakes or alternate approaches

That turns the repository into a revision tool instead of only a code archive.

## How I approached it

I chose Java as the language for DSA because it is explicit and common in interviews. It forces me to think about types, classes, collections, method signatures, and edge cases.

I plan to organize the repository by patterns and topics such as arrays, two pointers, sliding window, binary search, recursion, trees, graphs, dynamic programming, heaps, stacks, queues, and linked lists.

Each problem should have a consistent format:

- problem name
- approach explanation
- Java solution
- complexity
- edge cases
- revision notes

This is slower than dumping code, but it is much more useful for interview preparation.

The structure is also meant to make progress visible. If every topic has a checklist, I can see what I have practiced and what I am avoiding. That matters because interview preparation often feels vague. A visible roadmap turns it into smaller, trackable work.

I want the repository to be useful even when I am tired or revising quickly. If I open a problem after a month, the notes should remind me of the core idea without forcing me to rediscover everything from the code alone.

## What I learned technically

I learned that pattern recognition matters more than memorizing individual solutions. Many problems become easier when I can identify the shape: sliding window, hashing, recursion, graph traversal, or dynamic programming.

I also learned that clean code matters in DSA. A solution that passes is not always a solution I can explain. Naming, helper methods, and edge-case handling make a difference when someone else is reading the answer.

This is especially true in Java because the code can become verbose if I am not careful. I want the solutions to stay simple enough for interview discussion, not just accepted by an online judge.

I am also learning to pay more attention to edge cases. Empty arrays, duplicate values, integer limits, null nodes, disconnected graphs, and off-by-one boundaries are where many solutions fail. Writing those notes beside the solution makes revision more practical.

## Mistakes or confusing parts

One mistake is chasing streaks instead of understanding. Streaks can be motivating, but they can also push me to move too quickly.

Another confusing part is deciding how much explanation to write. If I write too much, practice slows down. If I write too little, revision becomes weak. I am trying to keep notes short but useful.

## What I would improve next

I want to add a progress tracker, topic-wise checklists, README navigation, and revision notes. I also want to mark problems by pattern and difficulty so that revision can be more targeted.

Eventually, the repository should show both consistency and growth. It should be useful for me and readable for someone reviewing how I approach problems.

## Final takeaway

Good DSA preparation is not only about solving more problems. It is about building a system that helps me recognize patterns, explain my thinking, and revise without starting from zero every time.
`,
  },
  {
    title: "Designing FreightRate AI: A Logistics-Focused Backend Project",
    slug: "designing-freightrate-ai-logistics-backend-project",
    date: "2026-05-11",
    displayDate: "May 11, 2026",
    category: "Backend System Design",
    readTime: "10 min read",
    summary:
      "How I am designing a multi-carrier freight quote system with .NET 8, PostgreSQL, Redis, Docker, and an AI-assisted explanation layer.",
    tags: [".NET 8", "System Design", "Logistics", "Redis", "Docker"],
    content: `
## Intro

FreightRate AI is an in-progress backend project focused on logistics rate calculation. I wanted to build something stronger than a generic CRUD app, and freight pricing gives me that opportunity because the rules are real.

The project connects my logistics exposure with modern backend engineering. It lets me practice .NET 8 Web API, PostgreSQL, Docker, Redis caching plans, Google Cloud Run deployment planning, and AI-assisted explanations.

## Why I worked on this

I worked on this because freight pricing is a business problem with enough complexity to make the backend meaningful. It is not only about saving and fetching records. The system has to calculate, compare, and explain.

I also wanted a project that reflects the kind of systems I care about: backend-heavy applications where rules, data modeling, correctness, and clear service boundaries matter.

## What problem I was trying to solve

Freight pricing is not a simple fixed-rate calculation. A quote can depend on origin, destination, pincode or zone, actual weight, volumetric weight, chargeable weight, carrier, service type, surcharge, GST, and business-specific rules.

A useful quote system should compare carrier-wise rates and help the user understand the recommendation. The recommendation could be cheapest, fastest, or balanced depending on the business goal.

The challenge is making the calculation deterministic while still making the output understandable.

## How I approached it

I am designing the quote flow around clear backend steps. A request comes in with shipment details. The API validates the input, resolves zones, calculates chargeable weight, selects carrier pricing rules, applies surcharges and taxes, and returns a structured quote breakdown.

The quote service is responsible for deterministic calculation. AI should not invent pricing. Instead, the AI explanation layer should explain why a carrier was selected or why one option is cheaper than another.

Redis is planned for caching data that is read often, such as zone mappings, carrier data, and frequently used rate configurations. Docker helps keep local development consistent. Google Cloud Run is planned as the deployment target once the core flow is stable.

I am also thinking about quote comparison as a separate concern from quote calculation. The calculation should produce reliable carrier-wise results. The comparison layer can then decide whether to recommend the cheapest, fastest, or balanced option. Keeping those responsibilities separate should make the system easier to test and change later.

## What I learned technically

I am learning that pricing systems need careful boundaries. Zone resolution, chargeable weight calculation, carrier rule selection, surcharge calculation, and recommendation logic should not be mixed into one large method.

I am also learning to think about caching more practically. Redis is useful, but only if I understand what data is repeated and how often it changes.

The AI part is also teaching me an important boundary: AI can explain a result, but the business calculation should remain testable and deterministic.

Another technical lesson is that every calculated value should be traceable. If the final quote includes chargeable weight, surcharge, GST, and a minimum charge adjustment, the response should expose enough of that breakdown to debug and explain the result. That is useful for developers and for users.

This also affects database design. Carrier rules, zones, and charges need to be stored in a way that supports change. If the tables are too close to one hard-coded scenario, every new rule becomes painful. If they are too generic, the system becomes hard to reason about. I am trying to stay in the middle.

## Mistakes or confusing parts

One confusing part is deciding how flexible the rate model should be. If it is too rigid, future carrier rules become hard to add. If it is too abstract, the system becomes difficult to understand.

Another risk is adding AI too early. The pricing engine must work first. The explanation layer should come after the quote breakdown is reliable.

## What I would improve next

Next improvements include authentication, admin rate upload, Excel import for rate sheets, more test cases, better quote comparison, and a clearer recommendation model.

I also want to add sample data and diagrams so the case study becomes easier to understand for recruiters and other developers.

## Final takeaway

FreightRate AI is valuable because it practices real backend design. It combines business rules, data modeling, caching, deployment planning, and explainability without pretending AI should replace deterministic logic.
`,
  },
  {
    title: "Moving from Legacy .NET Work to Modern Backend Engineering",
    slug: "legacy-dotnet-to-modern-backend-engineering",
    date: "2026-05-14",
    displayDate: "May 14, 2026",
    category: "Career Growth",
    readTime: "7 min read",
    summary:
      "What I am learning while moving from enterprise .NET, SQL Server, jQuery, and stored procedures toward modern backend development with .NET 8, cloud deployment, and cleaner architecture.",
    tags: [".NET", "Backend", "Career", "Cloud", "Clean Architecture"],
    content: `
## Intro

My professional work has given me exposure to enterprise .NET systems, SQL Server, stored procedures, jQuery, Kendo UI, WCF, XML-based UI configuration, and business workflows. These are not always modern or trendy technologies, but they teach real engineering lessons.

At the same time, I am actively moving toward modern backend development with .NET 8 Web API, PostgreSQL, Docker, Redis, cloud deployment, React, Next.js, and cleaner architecture.

## Why I worked on this

I wanted to write this because the transition is important to me. I do not see legacy work as something to hide. It has taught me debugging, edge cases, data consistency, business rules, and the patience required to work inside mature systems.

But I also know that I need to keep growing. Modern backend engineering has different expectations around APIs, tests, deployments, observability, and architecture.

## What problem I was trying to solve

The problem is how to connect my current professional experience with the direction I want to grow in. Enterprise systems often contain valuable lessons, but the tooling and architecture may be older.

I wanted a learning path that builds on what I already know instead of pretending I am starting from zero. SQL-heavy workflows, stored procedures, and business rules still matter. The goal is to combine that experience with modern practices.

## How I approached it

I started building projects that carry familiar business complexity into newer stacks. For example, FreightRate AI has pricing rules and logistics thinking, but it uses .NET 8, PostgreSQL, Docker, Redis planning, and cloud deployment ideas.

The URL shortener helped me practice full-stack deployment, JWT authentication, PostgreSQL, frontend/backend integration, CORS, environment variables, logging, and rate limiting.

The portfolio itself helps me explain the journey. It connects older professional experience with newer proof-of-work projects.

This approach feels practical because it keeps learning connected to real systems. Instead of learning Docker, Redis, or cloud deployment in isolation, I am applying them to projects where the tradeoffs are easier to see.

## What I learned technically

Legacy systems teach that business logic is rarely clean in the real world. There are exceptions, old decisions, performance concerns, and users depending on existing behavior.

Modern projects are helping me learn cleaner service boundaries, better API design, Docker-based setup, PostgreSQL modeling, Redis caching, cloud deployment, and React or Next.js frontend integration.

The biggest lesson is that real engineering is about tradeoffs. Modern tools help, but they do not automatically create good architecture.

I am also learning that modernization is partly about habits. Tests, clearer API contracts, environment-specific configuration, logging, deployment checks, and documentation all make a system easier to change. Those habits matter as much as the framework version.

This is why I am using personal projects as practice. They let me try modern patterns without the risk of changing a production enterprise system. Then, when I return to professional work, I can bring better judgment about what is worth improving and what should be left stable.

## Mistakes or confusing parts

One mistake would be rejecting legacy experience completely. That experience is where I learned how messy real systems can become.

Another mistake would be assuming new tools solve everything. A .NET 8 API can still be badly structured if the business logic is scattered. Docker, Redis, and cloud deployment are useful only when applied with clear purpose.

The confusing part is prioritization. There is always more to learn: testing, CI/CD, clean architecture, system design, cloud deployment, and performance. I am trying to learn through projects rather than only tutorials.

## What I would improve next

I want to strengthen automated testing, CI/CD, clean architecture, system design, cloud deployment, and performance analysis in my projects. I also want to keep writing safe professional case studies that explain the kind of work I do without exposing confidential details.

Over time, I want my portfolio to show a clear progression from enterprise .NET work to modern backend engineering.

## Final takeaway

Moving from legacy .NET work to modern backend engineering is not a reset. It is a progression. The business-rule discipline from enterprise systems can become a strong base for cleaner APIs, better deployments, and more thoughtful architecture.
`,
  },
];
