export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Social {
  platform: string;
  username: string;
  url: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
  };
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    databases: string[];
  };
  projects: Project[];
  experience: Experience[];
  education: Education[];
  social: Social[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Muhammad Hassan",
    title: "Full Stack Developer | AI Enthusiast | Laravel Specialist ", //& Cybersecurity Enthusiast
    bio: "I am a full stack dev who loves building smart, clean web apps with AI. Always up for turning ideas into real tools!",
    location: "Islamabad, Pakistan"
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "php", "C++"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Django"],
    tools: ["React", "Nextjs", "Laravel", "GitHub", "Linux", "Vercel"],
    databases: ["MySQL", "MongoDB", "SQL"]
  },
  projects: [
    {
      id: "1",
      name: "Code-Canvas",
      description: " Code-Canvas is a collaborative, real-time code editor built for seamless coding, sharing, and teamwork in the browser. ",
      technologies: ["Nextjs", "Node.js", "WebRTC", "Socket.io", "Openai","vercel"],
      github: "https://github.com/Hassanshigri/Final_Year_Project",
      demo: "https://code-canvas-pink.vercel.app/",
      status: "completed"
    },
    {
      id: "2", 
      name: "my-dev-portfolio",
      description: "A terminal-inspired developer portfolio built with Next.js. Navigate my work and story through a command-line interface.",
      technologies: ["Nextjs", "React", "Tailwind CSS", "Framer Motion", "Vercel "],
      github: "https://github.com/Hassanshigri/my-dev-portfolio",
      status: "in-progress"
    }
    // {
    //   id: "3",
    //   name: "DeepCode",
    //   description: "AI-powered code review tool using machine learning",
    //   technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
    //   github: "https://github.com/johndoe/deepcode",
    //   status: "completed"
    // }
  ],
  experience: [
    {
      id: "1",
      company: "Alright Tech Private Limited",
      position: "Full-Stack Developer",
      duration: "2024 - 2025",
      description: "Full Stack Developer at Alright tech, building and maintaining scalable web applications using modern frontend and backend technologies.",
      technologies: ["React", "Node.js", "Python", "AWS", "Docker"]
    }
    // {
    //   id: "2",
    //   company: "StartupX",
    //   position: "Full-Stack Developer",
    //   duration: "2020 - 2022", 
    //   description: "Built scalable e-commerce platform serving 100K+ users",
    //   technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Celery"]
    // },
    // {
    //   id: "3",
    //   company: "TechCorp",
    //   position: "Junior Developer",
    //   duration: "2019 - 2020",
    //   description: "Developed internal tools and maintained legacy systems",
    //   technologies: ["JavaScript", "PHP", "MySQL", "jQuery", "Bootstrap"]
    // }
  ],
  education: [
    {
      id: "1",
      institution: "The University Institute of Information Technology (UIIT) rwp",
      degree: "B.S. Computer Science",
      duration: "2021 - 2025",
      description: "Focused on  strong foundation in software development, data structures, algorithms, databases, and emerging technologies."
    },
    {
      id: "2",
      institution: "Code Academy",
      degree: "Web Development Course",
      duration: "2021",
      description: "A hands-on course covering front-end and back-end technologies to build responsive, full-stack web applications."
    }
  ],
  social: [
    {
      platform: "GitHub",
      username: "Hassanshigri",
      url: "https://github.com/Hassanshigri"
    },
    {
      platform: "LinkedIn", 
      username: "muhammad hassan",
      url: "https://www.linkedin.com/in/shigri/"
    },
    {
      platform: "Email",
      username: "hassanshigri435@gmail.com",
      url: "mailto:hassanshigri435@gmail.com"
    }
  ]
};