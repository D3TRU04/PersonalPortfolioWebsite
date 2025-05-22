'use client'
import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';

const ResumePage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-full bg-white dark:bg-black text-black dark:text-white flex md:grid place-items-center items-center justify-center">
        <div className="text-center">
          {/* Display resized resume image with black border */}
          <div className="relative max-w-xl w-full h-auto mt-4 mb-4 rounded-lg shadow-lg p-[3px] bg-[conic-gradient(from_90deg_at_50%_50%,#007AFF,#4B55D6,#9C52DE,#FF2D55,#FF7F00,#007AFF)] mt-10 mb-10">
            <div className="w-full h-auto rounded-lg bg-white dark:bg-black p-[2px]">
              <Image src="/WebsiteResume.jpg" alt="Resume" width={800} height={1000} />
            </div>
          </div>


          {/* Border Magic download button */}
          <a
            href="/WebsiteResume.pdf" // Replace with the actual path to your resume file
            download="My_Resume.pdf" // Specify the downloaded file name
            className="relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-8 mb-16"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#007AFF,#5856D6,#AF52DE,#FF2D55,#FF9500,#007AFF)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-6 py-2 text-lg font-medium text-black backdrop-blur-3xl">
              Download
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
