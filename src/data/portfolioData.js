// ES6+ Export: Makes this object available to other files
export const portfolioData = {
  // Personal Info (Object with nested properties)
  personal: {
    name: "Conner Batson",
    title: "Full Stack Software Engineer",
    tagline: "Quality-first engineering with a passion for scalable architecture",
    phone: "360-842-4748",
    email: "cjbatson2@gmail.com",
    github: "https://github.com/bcLego19",
    linkedin: "https://www.linkedin.com/in/conner-batson-9b4614203/"
  },

  // About Section (Strings)
  summary: "Resourceful Full Stack Software Engineer with a solid foundation in TypeScript, React/Next.js, and Python (Django/FastAPI). Possesses a unique, quality-first perspective developed as a Software Testing Specialist, enabling methodical debugging, full-stack troubleshooting, and robust system design.",

  // Technical Skills (Array of Objects)
  skills: [
    {
      category: "Primary Frontend",
      items: ["TypeScript", "React", "Next.js", "JavaScript", "HTML", "CSS (Tailwind)"]
    },
    {
      category: "Primary Backend",
      items: ["Python (FastAPI, Django)", "Node.js (Nest.js)", "RESTful APIs"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "SQL", "Prisma/SQLAlchemy"]
    },
    {
      category: "Quality & Tools",
      items: ["Git", "Agile", "Test Automation", "CI/CD", "Docker"]
    }
  ],

  // Projects (Array of Objects - each project is an object!)
  projects: [
    {
      id: 1,
      title: "Currency Converter",
      description: "Containerized currency allocation tool with real-time exchange rates and budget validation logic.",
      technologies: ["JavaScript", "Docker", "REST APIs"],
      highlights: [
        "Docker containerization for consistent deployment",
        "Real-time state management with dynamic field allocation",
        "Front-end validation preventing data corruption"
      ],
      github: "https://github.com/bcLego19/currency-converter",
      liveDemo: null
    },
    {
      id: 2,
      title: "Flowchart Builder",
      description: "Full-stack SaaS application for creating interactive flowcharts with advanced state management.",
      technologies: ["TypeScript", "React", "Vite"],
      highlights: [
        "Undo/redo functionality with complex state management",
        "CRUD operations for nodes and connections",
        "JSON import/export and PNG export capabilities",
        "Keyboard accessibility features"
      ],
      github: "https://github.com/bcLego19/flowchart-builder",
      liveDemo: null
    },
    {
      id: 3,
      title: "Retro Game Library",
      description: "Collection of classic arcade games built with dependency-free vanilla JavaScript, featuring responsive design.",
      technologies: ["HTML5 Canvas", "Vanilla JavaScript", "CSS"],
      highlights: [
        "High-performance frame-by-frame rendering",
        "Adaptive design maintaining aspect ratio across devices",
        "Single-file application architecture",
        "Currently features Classic Pong"
      ],
      github: "https://github.com/bcLego19/game-library",
      liveDemo: "https://bcLego19.github.io/game-library" // Assuming GitHub Pages deployment
    }
  ]
}