const portfolioData = {
  profile: {
    name: "Candra",
    title: "UI/UX Student & Developer",
    words: ["UI/UX Student", "Web Developer", "Designer", "Problem Solver"],
    bio: "I am a passionate designer and developer specializing in building high-quality, modern interfaces. With a strong eye for UI/UX details and user-centered design, I bridge the gap between visual design and front-end layout.",
    resumeUrl: "#",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "candra@example.com"
    }
  },
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5 / CSS3 / ES6+", level: 95, icon: "ri-html5-fill" },
        { name: "JavaScript (React / Next.js)", level: 85, icon: "ri-reactjs-line" },
        { name: "Tailwind CSS / Flexbox", level: 90, icon: "ri-css3-fill" },
        { name: "Responsive Systems", level: 95, icon: "ri-responsive-fill" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "PHP / Laravel Ecosystem", level: 90, icon: "ri-php-line" },
        { name: "Node.js / RESTful APIs", level: 80, icon: "ri-node-js-line" },
        { name: "SQL Databases (MySQL)", level: 85, icon: "ri-database-2-line" },
        { name: "Git & Version Control", level: 90, icon: "ri-git-branch-line" }
      ]
    },
    {
      category: "Design & UX Strategy",
      items: [
        { name: "Figma UI/UX Prototyping", level: 80, icon: "ri-figma-line" },
        { name: "Wireframing & User Flows", level: 85, icon: "ri-layout-masonry-line" },
        { name: "Micro-interactions & Animation", level: 80, icon: "ri-magic-line" }
      ]
    }
  ],
  services: [
    {
      title: "Custom Web Applications",
      icon: "ri-code-s-slash-line",
      description: "Building robust, scalable, and secure web applications tailored to your business needs using Laravel, Next.js, and modern APIs."
    },
    {
      title: "UI/UX & Interactive Design",
      icon: "ri-layout-masonry-line",
      description: "Designing modern, intuitive, and high-fidelity interfaces in Figma with a strong emphasis on micro-interactions and accessibility."
    },
    {
      title: "E-Commerce Development",
      icon: "ri-shopping-bag-3-line",
      description: "Setting up and customizing conversion-focused e-commerce storefronts with integrated payment gateways and administrative dash panels."
    },
    {
      title: "Performance & SEO Tuning",
      icon: "ri-speed-up-line",
      description: "Improving page load speeds, optimizing database queries, and maximizing SEO scores to rank higher on search engines."
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
      duration: "2024 - Present",
      role: "Lead Full-Stack Developer",
      company: "TechNova Solutions",
      description: "Mentoring junior engineers, designing distributed systems using PHP/Laravel and React, and improving continuous deployment pipelines."
    },
    {
      type: "work",
      duration: "2022 - 2024",
      role: "Frontend Developer",
      company: "InnoWeb Studio",
      description: "Developed semantic, responsive interfaces for large client websites. Collaborated closely with UI/UX designers to implement design assets."
    },
    {
      type: "education",
      duration: "2018 - 2022",
      role: "Bachelor of Computer Science",
      company: "Aperture University",
      description: "Graduated with honors. Specialized in Software Engineering, Web Technologies, and Database Administration."
    }
  ]
};

// Make it available on window.portfolioData for vanilla JS loading without bundlers
window.portfolioData = portfolioData;
