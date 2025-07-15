

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
    title: "Full Stack Developer | AI Enthusiast | Web Specialist",
    bio: "I am a full stack dev who loves building smart, clean web apps with AI. Always up for turning ideas into real tools!",
    location: "Islamabad, Pakistan"
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "PHP", "C++"],
    frameworks: ["React", "Next.js", "Node.js", "Laravel", "Express", "FastAPI", "Django"],
    tools: ["VoiceFlow", "N8N", "bolt.new", "GitHub", "Linux", "Vercel"],
    databases: ["MySQL", "MongoDB", "SQL"]
  },
  projects: [
    {
      id: "1",
      name: "Code-Canvas",
      description: "Code-Canvas is a collaborative, real-time code editor built for seamless coding, sharing, and teamwork in the browser.",
      technologies: ["Next.js", "Node.js", "WebRTC", "Socket.io", "OpenAI", "Vercel"],
      github: "https://github.com/Hassanshigri/Final_Year_Project",
      demo: "https://code-canvas-pink.vercel.app/",
      status: "completed"
    },
    {
      id: "2",
      name: "my-dev-portfolio",
      description: "A terminal-inspired developer portfolio built with Next.js. Navigate my work and story through a command-line interface.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "https://github.com/Hassanshigri/my-dev-portfolio",
      status: "in-progress"
    },
     {
      id: "3",
      name: "ShopVerse",
      description: "ShopVerse is a modern e-commerce platform offering a seamless and user-friendly shopping experience.",
      technologies: ["Vuejs", "React", "Tailwind CSS", "Vercel"],
      github: "https://github.com/Hassanshigri/ShopVerse.git",
      demo: "https://shop-verse-jet-mu.vercel.app/",
      status: "completed"
    }
  ],
  experience: [
    {
      id: "1",
      company: "Alright Tech Private Limited",
      position: "Full-Stack Developer",
      duration: "2024 - 2025",
      description: "Building and maintaining scalable web applications using modern frontend and backend technologies.",
      technologies: ["React", "Node.js", "Python", "AWS", "Docker"]
    }
  ],
  education: [
    {
      id: "1",
      institution: "The University Institute of Information Technology (UIIT), Rawalpindi",
      degree: "B.S. Computer Science",
      duration: "2021 - 2025",
      description: "Focused on software development, data structures, algorithms, databases, and emerging technologies."
    },
    {
      id: "2",
      institution: "Code Academy",
      degree: "Web Development Course",
      duration: "2021",
      description: "Hands-on course covering front-end and back-end technologies to build full-stack web apps."
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
      username: "Muhammad Hassan",
      url: "https://www.linkedin.com/in/shigri/"
    },
    {
      platform: "Email",
      username: "hassanshigri435@gmail.com",
      url: "mailto:hassanshigri435@gmail.com"
    }
  ]
};
