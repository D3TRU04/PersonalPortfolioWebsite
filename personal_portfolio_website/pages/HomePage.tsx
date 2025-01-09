'use client'
import React from 'react';
import NavBar from './NavBar';

function LandingPage() {
  return (
    <>
      <NavBar activePath="" />
      <div className="w-full h-screen bg-white dark:bg-black text-black flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 sm:px-12 lg:px-24">
          {/* Left side: Image container */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img 
              src="/WebsitePFP.jpg" 
              alt="Dan's Portrait"
              className="max-w-lg w-full h-auto mt-4 mb-4 border-2 border-black rounded-lg shadow-lg"
            />
          </div>

          {/* Right side: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl md:text-6xl font-semibold leading-tight text-black mb-4">
              Hi, I'm Dan! 👋
            </h3>
            <p className="text-xl md:text-2xl text-black mb-4">
              I'm a passionate Computer Science student at UT Austin.
            </p>
            <p className="text-xl md:text-2xl text-black mb-4">
              Explore the sections above to learn more about my projects, skills, and experiences. Let's connect and create something amazing!
            </p>

            {/* Links for LinkedIn and GitHub */}
            <div className="mt-6 flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/dantruong04/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-lg bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/D3TRU04"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-lg bg-gray-800 text-white rounded-md shadow-lg hover:bg-gray-900 transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
