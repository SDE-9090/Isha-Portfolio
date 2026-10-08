export const portfolioData = {
  personal: {
    name: "Isha Thakur",
    role: "Software Engineer",
    shortBio: "Software Engineer specializing in backend systems and AI-powered applications, with experience building production-grade services.",
    email: "ishathakur2504@gmail.com",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    stats: {
      yearsOfExperience: 1,
      projects: 15,
      technologies: 30,
      achievements: 3,
    }
  },
  projects: [
    {
      id: "01",
      title: "AI Customer Support Agent",
      description: "A multi-agent AI customer support system orchestrating specialized agents for ticket triage, knowledge retrieval, and troubleshooting.",
      tags: ["Python", "FastAPI", "React", "LangGraph", "ChromaDB", "WebSockets"],
      image: "/project1.png",
      link: "#"
    },
    {
      id: "02",
      title: "Sports Facility Platform",
      description: "Production-grade sports facility management platform with secure JWT authentication, RBAC, Redis caching, and real-time booking.",
      tags: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "React"],
      image: "/project2.png",
      link: "https://akolasportsarena.vercel.app/"
    }
  ],
  skills: {
    languages: ["Python", "C++", "Java", "JavaScript", "SQL", "TypeScript"],
    backend: ["FastAPI", "Django", "Node.js", "Express.js", "Celery", "REST APIs"],
    frontend: ["React", "HTML/CSS", "Tailwind CSS", "WebSockets", "SSE"],
    ai: ["OpenAI", "LangGraph", "LangChain", "RAG", "Prompt Engineering"],
    databases: ["PostgreSQL", "Redis", "pgvector", "ChromaDB", "SQLite"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
  },
  journey: [
    {
      year: "2025",
      title: "Associate Software Engineer at Synechron",
      description: "Working on data processing pipelines, data mapping, and leveraging Azure AI for semantic matching techniques."
    },
    {
      year: "2025",
      title: "B.Tech in Computer Engineering",
      description: "Graduated from MIT Academy of Engineering, Pune with a CGPA of 8.56."
    },

    {
      year: "2021",
      title: "Started Engineering Degree",
      description: "Began my Bachelor of Technology journey at MIT Academy of Engineering."
    }
  ],
  interests: [
    { icon: "💻", label: "System Design" },
    { icon: "🤖", label: "AI/LLMs" },
    { icon: "🚀", label: "Backend Dev" },
    { icon: "🎧", label: "Music" },
    { icon: "📚", label: "Reading" },
    { icon: "☕", label: "Coffee" },
    { icon: "💃", label: "Dancing" },
  ],
  gallery: [
    "/profile.jpg",
    "/about.png",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  ]
};
