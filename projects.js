const portfolioData = {
  profile: {
    name: "Candra",
    title: "UI/UX Student & Web Designer",
    words: ["UI/UX Designer", "Web Designer", "Figma Enthusiast", "Student"],
    bio: "I am a passionate UI/UX Design and Web Design student. My focus lies in designing visually stunning, highly intuitive, and user-centered digital interfaces. I am currently studying human-computer interaction, interface design guidelines, wireframing, high-fidelity prototyping in Figma, and front-end engineering to bridge the gap between design concepts and live code.",
    resumeUrl: "#",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "candra18123@gmail.com"
    },
    web3formsKey: "YOUR_ACCESS_KEY_HERE"
  },
  skills: [
    {
      category: "UI/UX & Interface Design",
      items: [
        { name: "Figma UI/UX Prototyping", level: 90, icon: "ri-figma-line" },
        { name: "Wireframing & User Flows", level: 85, icon: "ri-layout-masonry-line" },
        { name: "Design Systems & Components", level: 80, icon: "ri-instance-line" },
        { name: "User Research & Persona Creation", level: 80, icon: "ri-user-search-line" }
      ]
    },
    {
      category: "Web Design & Frontend Development",
      items: [
        { name: "HTML5 / CSS3 Layouts", level: 90, icon: "ri-html5-fill" },
        { name: "CSS Flexbox & Grid Systems", level: 95, icon: "ri-grid-fill" },
        { name: "Tailwind CSS / Responsive Design", level: 90, icon: "ri-css3-fill" },
        { name: "JavaScript (Dynamic Interfaces)", level: 75, icon: "ri-javascript-fill" }
      ]
    },
    {
      category: "Design Software & Tools",
      items: [
        { name: "Adobe Illustrator & Photoshop", level: 75, icon: "ri-paint-brush-line" },
        { name: "VS Code & Design Handoff", level: 85, icon: "ri-code-box-line" },
        { name: "Git & Version Control", level: 80, icon: "ri-git-branch-line" }
      ]
    }
  ],
  services: [
    {
      title: "UI/UX & Interactive Design",
      icon: "ri-layout-masonry-line",
      description: "Designing modern, intuitive, and high-fidelity interfaces in Figma with a strong emphasis on user patterns, micro-interactions, and accessibility."
    },
    {
      title: "Web Design & Frontend Layouts",
      icon: "ri-code-s-slash-line",
      description: "Converting high-fidelity mockups into clean, semantic, and fully responsive web layouts using modern CSS structures and basic interactivity."
    },
    {
      title: "Design System Engineering",
      icon: "ri-instance-line",
      description: "Creating standardized color palettes, typography systems, and reusable component libraries to speed up development work."
    },
    {
      title: "Website Auditing & Redesign",
      icon: "ri-speed-up-line",
      description: "Analyzing existing websites for user experience flaws, responsiveness bottlenecks, and slow loading speeds to redesign them for growth."
    }
  ],
  projects: [
    {
      title: "Sisakti Plus Portal",
      category: "Web Dev",
      tags: ["Laravel", "Blade", "MySQL", "Tailwind"],
      description: "An administrative management portal designed to digitize SKP cards, track user credentials, and automate PDF document generation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fintech Dashboard - WealthWise",
      category: "UI/UX",
      tags: ["Figma", "React", "Chart.js", "Tailwind CSS"],
      description: "A financial planning platform featuring clean analytics dashboards, live market data feeds, and glassmorphic card elements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce API Service",
      category: "Backend",
      tags: ["Node.js", "Express", "MongoDB", "Docker"],
      description: "A robust RESTful API with automated Stripe checkouts, inventory synchronization, JWT-based authentication, and structured error boundaries.",
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=800&h=500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "MindFlow Productivity App",
      category: "Mobile",
      tags: ["Flutter", "Dart", "Firebase"],
      description: "A minimalist focus and workspace management application for Android & iOS designed to limit digital distractions and boost daily efficiency.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=500",
      demoUrl: "#",
      githubUrl: "#"
    }
  ],
  experience: [
    {
      type: "work",
      duration: "2025 - Present",
      role: "Freelance UI/UX & Web Designer",
      company: "Self-Employed",
      description: "Designing high-fidelity landing page prototypes, user flows, and UI component wireframes for small startup clients. Ensuring responsive developer handoffs."
    },
    {
      type: "work",
      duration: "2024 - 2025",
      role: "Junior UI/UX Designer (Intern)",
      company: "Creative Minds Studio",
      description: "Assisted in executing UX audits, creating wireframes, building color scheme assets, and maintaining component libraries in Figma."
    },
    {
      type: "education",
      duration: "2023 - Present",
      role: "Information Systems & Design Student",
      company: "State University",
      description: "Currently pursuing an undergraduate degree. Actively studying Human-Computer Interaction (HCI), user interaction patterns, web technologies, and front-end system layouts."
    }
  ]
};

// Make it available on window.portfolioData for vanilla JS loading without bundlers
window.portfolioData = portfolioData;

