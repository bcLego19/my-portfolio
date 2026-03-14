// ES6+ Export: Makes this object available to other files
export const portfolioData = {
  // Personal Info (Object with nested properties)
  personal: {
    name: "Conner Batson",
    title: "Frontend Developer",
    tagline: "Quality-first engineering with a passion for scalable architecture",
    phone: "360-842-4748",
    email: "cjbatson2@gmail.com",
    github: "https://github.com/bcLego19",
    linkedin: "https://www.linkedin.com/in/conner-batson-9b4614203/"
  },

  // About Section (Strings)
  summary: "Frontend developer with a CS degree and a background in software testing. I build React applications with a focus on state management, accessibility, and clean architecture. My most recent work includes a 4-month browser-based flowchart editor featuring keyboard accessibility, undo/redo history, and multi-format export — built with React and developed collaboratively with AI tooling as part of the engineering process.\n\nI hold an Oracle Cloud Infrastructure Generative AI certification and bring a quality-first perspective from professional software testing at Core Commissions.",

  // Technical Skills (Array of Objects)
  skills: [
    {
      category: "Primary Frontend",
      items: ["Javascript/TypeScript", "React", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Tools and Workflow",
      items: ["Git", "Docker", "Figma", "Trello", "Agile", "CI/CD"]
    },
    {
      category: "Familiar With",
      items: ["Node.js", "Python (FastAPI, Django)", "PostgreSQL", "REST APIs"]
    }
  ],

  // Projects (Array of Objects - each project is an object!)
  projects: [
    {
      id: 1,
      title: "Flowchart Builder",
      description: "Browser-based flowchart editor built over 4 months with React and Vite.",
      technologies: ["TypeScript", "React", "Vite"],
      highlights: [
        "Custom keyboard accessibility with ARIA labels and full focus management"
        "Undo/redo history implemented via useReducer",
        "Multi-type nodes with drag-and-drop canvas positioning",
        "Import/export as JSON; export to PDF and PNG",
        "Built incrementally using AI as a collaborative development tool"
      ],
      github: "https://github.com/bcLego19/flowchart-builder",
      liveDemo: null
    },
    {
      id: 2,
      title: "Currency Converter",
      description: "ontainerized currency allocation tool with real-time exchange rates.",
      technologies: ["JavaScript", "Docker", "REST APIs"],
      highlights: [
        "Dockerized for consistent local and cloud deployment",
        "Real-time exchange rate integration via external API",
        "Budget validation logic with dynamic field allocation"
      ],
      github: "https://github.com/bcLego19/currency-converter",
      liveDemo: null
    },
    {
      id: 3,
      title: "Retro Game Library",
      description: "Classic arcade games built with dependency-free vanilla JavaScript.",
      technologies: ["HTML5 Canvas", "Vanilla JavaScript", "CSS"],
      highlights: [
        "Frame-by-frame rendering using Canvas API",
        "Responsive design maintaining aspect ratio across screen sizes",
        "Currently features Classic Pong"
      ],
      github: "https://github.com/bcLego19/game-library",
      liveDemo: "https://bcLego19.github.io/game-library" // Assuming GitHub Pages deployment
    }
  ]
}