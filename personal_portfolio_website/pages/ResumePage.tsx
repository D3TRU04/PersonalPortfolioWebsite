'use client'
import React from 'react';
import NavBar from './NavBar';

const ResumePage: React.FC = () => {
  return (
    <>
      <NavBar activePath="" />
      <div className="w-full h-screen bg-white dark:bg-black text-black dark:text-white flex md:grid place-items-center items-center justify-center">
        <div className="text-center">
          <h3 className="mt-4 mb-8 text-2xl lg:text-4xl leading-tight">My Resume</h3>

          {/* Display resized resume image with black border */}
          <img
            src="/WebsiteResume.jpg"
            alt="Resume"
            className="max-w-xl w-full h-auto mt-4 mb-4 border-2 border-black rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default ResumePage;
