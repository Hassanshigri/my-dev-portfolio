"use client";

import { useEffect } from 'react';
import MatrixRain from '@/components/MatrixRain';
// import Avatar3D from '@/components/Avatar3D';
import Terminal from '@/components/Terminal';

export default function Home() {
  useEffect(() => {
    // Prevent default scrolling behavior
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10 h-screen flex">
        {/* Left Panel - 3D Avatar */}
        <div className="w-1/3 h-full flex flex-col items-center justify-center p-8 bg-black bg-opacity-50 backdrop-blur-sm border-r border-green-500">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold terminal-glow mb-2">Muhammad Hassan</h1>
            <p className="text-green-300 text-lg">Full-Stack Developer</p>
            {/* <p className="text-green-500 text-sm mt-2">Cybersecurity Enthusiast</p> */}
          </div>
          
         <div className="flex-1 flex items-center justify-center">
  <div className="bg-black border border-green-500 rounded-xl p-4 shadow-neon transition-transform transform hover:scale-105 hover:shadow-neon-bright animate-swing">
    <img
      src="/images/ppic.jpg"
      alt="My Avatar"
      className="h-72 w-72 object-cover rounded-md"
    />
  </div>
</div>

          
          <div className="text-center text-green-600 text-xs space-y-1">
            <p>STATUS: ONLINE</p>
            <p>SECURITY: ENCRYPTED</p>
            <p>LOCATION: ISLAMABAD, PAKISTAN</p>
          </div>
        </div>

        {/* Right Panel - Terminal */}
        <div className="flex-1 h-full p-8">
          <Terminal className="h-full" />
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-4 right-4 text-green-600 text-xs opacity-50">
        <p>© 2025 Muhammad Hassan. All rights reserved.</p>
      </div>
    </div>
  );
}