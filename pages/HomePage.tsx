'use client'
import React from 'react';
import NavBar from './NavBar';
import { AuroraBackground } from '../components/aurora-background';
import Image from 'next/image';

function LandingPage() {
  return (
    <>
    <AuroraBackground>
      <NavBar />
      <div className="w-full h-screen bg-white dark:bg-black text-black flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-12 lg:px-24">
          {/* Left side: Image container */}
          <div className="relative max-w-xl w-full h-auto mt-4 mb-4 rounded-lg shadow-lg p-[3px] bg-[conic-gradient(from_90deg_at_50%_50%,#007AFF,#4B55D6,#9C52DE,#FF2D55,#FF7F00,#007AFF)] mt-10 mb-10">
            <div className="w-full h-auto rounded-lg bg-white dark:bg-black p-[2px]">
              <Image 
                src="/WebsitePFP.jpg" 
                alt="Dan's Portrait"
                className="w-full h-auto rounded-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right side: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl md:text-6xl font-semibold leading-tight text-black mb-4">
              Hi, I&#39;m Dan! 👋
            </h3>
            <p className="text-xl md:text-2xl text-black mb-4">
              I&#39;m a passionate Computer Science student at UT Austin.
            </p>
            <p className="text-xl md:text-2xl text-black mb-4">
              Explore the sections above to learn more about my projects, skills, and experiences. Let&#39;s connect and create something amazing!
            </p>

            {/* Links for LinkedIn and GitHub */}
            <div className="mt-6 flex justify-center gap-6">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/dantruong04/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#007AFF,#5856D6,#AF52DE,#FF2D55,#FF9500,#007AFF)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-2 text-lg font-medium text-black backdrop-blur-3xl hover:bg-blue-700 transition-all duration-300">
                LinkedIn
              </span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/D3TRU04"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#007AFF,#5856D6,#AF52DE,#FF2D55,#FF9500,#007AFF)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-2 text-lg font-medium text-black backdrop-blur-3xl hover:bg-gray-900 transition-all duration-300">
                GitHub
              </span>
            </a>
          </div>
          </div>
        </div>
      </div>
      </AuroraBackground>
    </>
  );
}

export default LandingPage;
