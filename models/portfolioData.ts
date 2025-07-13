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
    title: "Full-Stack Developer ", //& Cybersecurity Enthusiast
    bio: "Passionate developer with 5+ years of experience building scalable web applications and exploring cybersecurity. Love hacking problems and creating elegant solutions.",
    location: "San Francisco, CA"
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "C++"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Django"],
    tools: ["Docker", "Kubernetes", "AWS", "Git", "Linux", "Vim"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch"]
  },
  projects: [
    {
      id: "1",
      name: "SecureChat",
      description: "End-to-end encrypted messaging app with perfect forward secrecy",
      technologies: ["React", "Node.js", "WebRTC", "Socket.io", "Cryptography"],
      github: "https://github.com/johndoe/securechat",
      demo: "https://securechat-demo.com",
      status: "completed"
    },
    {
      id: "2", 
      name: "VulnScanner",
      description: "Automated vulnerability scanner for web applications",
      technologies: ["Python", "Selenium", "SQLMap", "Nmap", "Docker"],
      github: "https://github.com/johndoe/vulnscanner",
      status: "in-progress"
    },
    {
      id: "3",
      name: "DeepCode",
      description: "AI-powered code review tool using machine learning",
      technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/johndoe/deepcode",
      status: "completed"
    }
  ],
  experience: [
    {
      id: "1",
      company: "CyberTech Solutions",
      position: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      description: "Leading development of security-focused web applications and penetration testing tools",
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"]
    },
    {
      id: "2",
      company: "StartupX",
      position: "Full-Stack Developer",
      duration: "2020 - 2022", 
      description: "Built scalable e-commerce platform serving 100K+ users",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Celery"]
    },
    {
      id: "3",
      company: "TechCorp",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Developed internal tools and maintained legacy systems",
      technologies: ["JavaScript", "PHP", "MySQL", "jQuery", "Bootstrap"]
    }
  ],
  education: [
    {
      id: "1",
      institution: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      duration: "2015 - 2019",
      description: "Focused on algorithms, data structures, and cybersecurity"
    },
    {
      id: "2",
      institution: "Certified Ethical Hacker (CEH)",
      degree: "Cybersecurity Certification",
      duration: "2021",
      description: "Advanced penetration testing and vulnerability assessment"
    }
  ],
  social: [
    {
      platform: "GitHub",
      username: "johndoe",
      url: "https://github.com/johndoe"
    },
    {
      platform: "LinkedIn", 
      username: "john-doe-dev",
      url: "https://linkedin.com/in/john-doe-dev"
    },
    {
      platform: "Twitter",
      username: "@johndhacker",
      url: "https://twitter.com/johndhacker"
    },
    {
      platform: "Email",
      username: "john@example.com",
      url: "mailto:john@example.com"
    }
  ]
};