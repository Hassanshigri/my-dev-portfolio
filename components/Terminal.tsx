// "use client";

// import { useState, useEffect, useRef, useCallback } from 'react';
// import { portfolioData } from '@/models/portfolioData';

// interface TerminalLine {
//   id: string;
//   content: string;
//   type: 'input' | 'output' | 'error';
//   timestamp: Date;
// }

// interface TerminalProps {
//   className?: string;
// }

// export default function Terminal({ className = "" }: TerminalProps) {
//   const [lines, setLines] = useState<TerminalLine[]>([]);
//   const [currentInput, setCurrentInput] = useState('');
//   const [commandHistory, setCommandHistory] = useState<string[]>([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const [isTyping, setIsTyping] = useState(false);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const terminalRef = useRef<HTMLDivElement>(null);

//   // Load command history from localStorage
//   useEffect(() => {
//     const savedHistory = localStorage.getItem('terminal-history');
//     if (savedHistory) {
//       setCommandHistory(JSON.parse(savedHistory));
//     }

//     // Add welcome message
//     addLine('Welcome to Muhammad Hassan\'s portfolio terminal!', 'output');
//     addLine('Type "help" to see available commands.', 'output');
//     addLine('', 'output');
//   }, []);

//   // Save command history to localStorage
//   useEffect(() => {
//     localStorage.setItem('terminal-history', JSON.stringify(commandHistory));
//   }, [commandHistory]);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [lines]);

//   // Focus input when clicking terminal
//   useEffect(() => {
//     const handleClick = () => {
//       inputRef.current?.focus();
//     };

//     const terminal = terminalRef.current;
//     if (terminal) {
//       terminal.addEventListener('click', handleClick);
//       return () => terminal.removeEventListener('click', handleClick);
//     }
//   }, []);

//   const addLine = useCallback((content: string, type: TerminalLine['type'] = 'output') => {
//     const newLine: TerminalLine = {
//       id: Date.now().toString(),
//       content,
//       type,
//       timestamp: new Date()
//     };
//     setLines(prev => [...prev, newLine]);
//   }, []);

//   const typewriterEffect = useCallback(async (text: string, delay = 30) => {
//     setIsTyping(true);
//     const lines = text.split('\n');
    
//     for (const line of lines) {
//       let currentText = '';
//       for (const char of line) {
//         currentText += char;
//         addLine(currentText, 'output');
//         await new Promise(resolve => setTimeout(resolve, delay));
//         // Remove the last line and replace with updated one
//         setLines(prev => prev.slice(0, -1));
//       }
//       addLine(line, 'output');
//     }
//     setIsTyping(false);
//   }, [addLine]);

//   const executeCommand = useCallback(async (command: string) => {
//     const cmd = command.toLowerCase().trim();
    
//     // Add command to history
//     if (cmd && !commandHistory.includes(cmd)) {
//       setCommandHistory(prev => [...prev, cmd]);
//     }

//     addLine(`$ ${command}`, 'input');

//     switch (cmd) {
//       case 'help':
//         await typewriterEffect(`Available commands:
//   help        - Show this help message
//   about       - Learn about me
//   projects    - View my recent projects
//   skills      - See my technical skills
//   experience  - View my work experience
//   education   - See my educational background
//   social      - Find me on social media
//   clear       - Clear the terminal
//   whoami      - Display current user info`);
//         break;

//       case 'about':
//         await typewriterEffect(`${portfolioData.personal.name}
// ${portfolioData.personal.title}

// ${portfolioData.personal.bio}

// Location: ${portfolioData.personal.location}`);
//         break;

//       case 'projects':
//         let projectsText = 'Recent Projects:\n\n';
//         portfolioData.projects.forEach((project, index) => {
//           projectsText += `${index + 1}. ${project.name} [${project.status}]\n`;
//           projectsText += `   ${project.description}\n`;
//           projectsText += `   Tech: ${project.technologies.join(', ')}\n`;
//           if (project.github) projectsText += `   GitHub: ${project.github}\n`;
//           if (project.demo) projectsText += `   Demo: ${project.demo}\n`;
//           projectsText += '\n';
//         });
//         await typewriterEffect(projectsText);
//         break;

//       case 'skills':
//         let skillsText = 'Technical Skills:\n\n';
//         skillsText += `Languages: ${portfolioData.skills.languages.join(', ')}\n\n`;
//         skillsText += `Frameworks: ${portfolioData.skills.frameworks.join(', ')}\n\n`;
//         skillsText += `Tools: ${portfolioData.skills.tools.join(', ')}\n\n`;
//         skillsText += `Databases: ${portfolioData.skills.databases.join(', ')}`;
//         await typewriterEffect(skillsText);
//         break;

//       case 'experience':
//         let expText = 'Work Experience:\n\n';
//         portfolioData.experience.forEach((exp, index) => {
//           expText += `${index + 1}. ${exp.position} at ${exp.company}\n`;
//           expText += `   Duration: ${exp.duration}\n`;
//           expText += `   ${exp.description}\n`;
//           expText += `   Technologies: ${exp.technologies.join(', ')}\n\n`;
//         });
//         await typewriterEffect(expText);
//         break;

//       case 'education':
//         let eduText = 'Education:\n\n';
//         portfolioData.education.forEach((edu, index) => {
//           eduText += `${index + 1}. ${edu.degree}\n`;
//           eduText += `   ${edu.institution}\n`;
//           eduText += `   Duration: ${edu.duration}\n`;
//           if (edu.description) eduText += `   ${edu.description}\n`;
//           eduText += '\n';
//         });
//         await typewriterEffect(eduText);
//         break;

//       case 'social':
//         let socialText = 'Find me online:\n\n';
//         portfolioData.social.forEach(social => {
//           socialText += `${social.platform}: ${social.url}\n`;
//         });
//         await typewriterEffect(socialText);
//         break;

//       case 'whoami':
//         await typewriterEffect(`guest@portfolio:~$ whoami
// guest

// You are currently viewing ${portfolioData.personal.name}'s portfolio.
// Access level: READ-ONLY
// Type 'help' for available commands.`);
//         break;

//       case 'clear':
//         setLines([]);
//         break;

//       case '':
//         break;

//       default:
//         await typewriterEffect(`Command not found: ${command}
// Type 'help' to see available commands.`);
//         break;
//     }
//   }, [commandHistory, addLine, typewriterEffect]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (currentInput.trim() && !isTyping) {
//       await executeCommand(currentInput);
//       setCurrentInput('');
//       setHistoryIndex(-1);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (isTyping) return;

//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       if (historyIndex < commandHistory.length - 1) {
//         const newIndex = historyIndex + 1;
//         setHistoryIndex(newIndex);
//         setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       }
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       if (historyIndex > 0) {
//         const newIndex = historyIndex - 1;
//         setHistoryIndex(newIndex);
//         setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       } else if (historyIndex === 0) {
//         setHistoryIndex(-1);
//         setCurrentInput('');
//       }
//     }
//   };

//   return (
//     <div className={`bg-black bg-opacity-90 backdrop-blur-sm neon-border rounded-lg p-4 h-full flex flex-col ${className}`}>
//       <div className="flex items-center mb-4 pb-2 border-b border-green-500">
//         <div className="flex space-x-2 mr-4">
//           <div className="w-3 h-3 rounded-full bg-red-500"></div>
//           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//           <div className="w-3 h-3 rounded-full bg-green-500"></div>
//         </div>
//         <span className="text-green-400 text-sm">guest@portfolio:~$</span>
//       </div>

//       <div 
//         ref={terminalRef}
//         className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-green-500 mb-4 space-y-1"
//       >
//         {lines.map((line) => (
//           <div
//             key={line.id}
//             className={`font-mono text-sm ${
//               line.type === 'input' 
//                 ? 'text-green-300' 
//                 : line.type === 'error'
//                 ? 'text-red-400'
//                 : 'text-green-400'
//             }`}
//           >
//             {line.content}
//           </div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit} className="flex items-center">
//         <span className="text-green-400 mr-2">$</span>
//         <input
//           ref={inputRef}
//           type="text"
//           value={currentInput}
//           onChange={(e) => setCurrentInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//           disabled={isTyping}
//           className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono placeholder-green-700"
//           placeholder={isTyping ? "Processing..." : "Type a command..."}
//           autoFocus
//         />
//         <span className="text-green-400 terminal-cursor">█</span>
//       </form>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { portfolioData } from '@/models/portfolioData';

interface TerminalLine {
  id: string;
  content: string;
  type: 'input' | 'output' | 'error';
  timestamp: Date;
}

interface TerminalProps {
  className?: string;
}

export default function Terminal({ className = "" }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('terminal-history');
    if (savedHistory) {
      setCommandHistory(JSON.parse(savedHistory));
    }

    addLine('Welcome to Muhammad Hassan\'s portfolio terminal!', 'output');
    addLine('Type "help" to see available commands.', 'output');
    addLine('', 'output');
  }, []);

  useEffect(() => {
    localStorage.setItem('terminal-history', JSON.stringify(commandHistory));
  }, [commandHistory]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleClick);
      return () => terminal.removeEventListener('click', handleClick);
    }
  }, []);

  const addLine = useCallback((content: string, type: TerminalLine['type'] = 'output') => {
    const newLine: TerminalLine = {
      id: Date.now().toString(),
      content,
      type,
      timestamp: new Date()
    };
    setLines(prev => [...prev, newLine]);
  }, []);

  const typewriterEffect = useCallback(async (text: string, delay = 30) => {
    setIsTyping(true);
    const lines = text.split('\n');

    for (const line of lines) {
      let currentText = '';
      for (const char of line) {
        currentText += char;
        addLine(currentText, 'output');
        await new Promise(resolve => setTimeout(resolve, delay));
        setLines(prev => prev.slice(0, -1));
      }
      addLine(line, 'output');
    }
    setIsTyping(false);
  }, [addLine]);

  const executeCommand = useCallback(async (command: string) => {
    const cmd = command.toLowerCase().trim();

    if (cmd && !commandHistory.includes(cmd)) {
      setCommandHistory(prev => [...prev, cmd]);
    }

    addLine(`$ ${command}`, 'input');

    switch (cmd) {
      case 'help':
        await typewriterEffect(`Available commands:
  help        - Show this help message
  about       - Learn about me
  projects    - View my recent projects
  skills      - See my technical skills
  experience  - View my work experience
  education   - See my educational background
  social      - Find me on social media
  clear       - Clear the terminal
  whoami      - Display current user info`);
        break;

      case 'about':
        await typewriterEffect(`${portfolioData.personal.name}
${portfolioData.personal.title}

${portfolioData.personal.bio}

Location: ${portfolioData.personal.location}`);
        break;

      case 'projects':
        let projectsText = 'Recent Projects:\n\n';
        portfolioData.projects.forEach((project, index) => {
          projectsText += `${index + 1}. ${project.name} [${project.status}]\n`;
          projectsText += `   ${project.description}\n`;
          projectsText += `   Tech: ${project.technologies.join(', ')}\n`;
          if (project.github) projectsText += `   GitHub: ${project.github}\n`;
          if (project.demo) projectsText += `   Demo: ${project.demo}\n`;
          projectsText += '\n';
        });
        await typewriterEffect(projectsText);
        break;

      case 'skills':
        let skillsText = 'Technical Skills:\n\n';
        skillsText += `Languages: ${portfolioData.skills.languages.join(', ')}\n\n`;
        skillsText += `Frameworks: ${portfolioData.skills.frameworks.join(', ')}\n\n`;
        skillsText += `Tools: ${portfolioData.skills.tools.join(', ')}\n\n`;
        skillsText += `Databases: ${portfolioData.skills.databases.join(', ')}`;
        await typewriterEffect(skillsText);
        break;

      case 'experience':
        let expText = 'Work Experience:\n\n';
        portfolioData.experience.forEach((exp, index) => {
          expText += `${index + 1}. ${exp.position} at ${exp.company}\n`;
          expText += `   Duration: ${exp.duration}\n`;
          expText += `   ${exp.description}\n`;
          expText += `   Technologies: ${exp.technologies.join(', ')}\n\n`;
        });
        await typewriterEffect(expText);
        break;

      case 'education':
        let eduText = 'Education:\n\n';
        portfolioData.education.forEach((edu, index) => {
          eduText += `${index + 1}. ${edu.degree}\n`;
          eduText += `   ${edu.institution}\n`;
          eduText += `   Duration: ${edu.duration}\n`;
          if (edu.description) eduText += `   ${edu.description}\n`;
          eduText += '\n';
        });
        await typewriterEffect(eduText);
        break;

      case 'social':
        let socialText = 'Find me online:\n\n';
        portfolioData.social.forEach(social => {
          socialText += `${social.platform}: ${social.url}\n`;
        });
        await typewriterEffect(socialText);
        break;

      case 'whoami':
        await typewriterEffect(`guest@portfolio:~$ whoami
guest

You are currently viewing ${portfolioData.personal.name}'s portfolio.
Access level: READ-ONLY
Type 'help' for available commands.`);
        break;

      case 'clear':
        setLines([]);
        break;

      case '':
        break;

      default:
        await typewriterEffect(`Command not found: ${command}
Type 'help' to see available commands.`);
        break;
    }
  }, [commandHistory, addLine, typewriterEffect]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isTyping) {
      await executeCommand(currentInput);
      setCurrentInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isTyping) return;

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return (
    <div className={`bg-black bg-opacity-90 backdrop-blur-sm neon-border rounded-lg p-4 h-full flex flex-col ${className}`}>
      <div className="flex items-center mb-4 pb-2 border-b border-green-500">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-green-400 text-sm">guest@portfolio:~$</span>
      </div>

      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-green-500 mb-4 space-y-1"
      >
        {lines.map((line) => (
          <div
            key={line.id}
            className={`font-mono text-sm ${
              line.type === 'input'
                ? 'text-green-300'
                : line.type === 'error'
                ? 'text-red-400'
                : 'text-green-400'
            }`}
          >
            <span>
              {line.content.split(' ').map((word, i) =>
                word.startsWith('http') || word.startsWith('mailto:') ? (
                  <a
                    key={i}
                    href={word}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-300"
                  >
                    {word}
                  </a>
                ) : (
                  <span key={i}> {word} </span>
                )
              )}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
          className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono placeholder-green-700"
          placeholder={isTyping ? "Processing..." : "Type a command..."}
          autoFocus
        />
        <span className="text-green-400 terminal-cursor">█</span>
      </form>
    </div>
  );
}
