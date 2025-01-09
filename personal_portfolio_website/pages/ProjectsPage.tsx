'use client'
import React from 'react';
import NavBar from './NavBar';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <NavBar activePath="" />
      <div className="w-full h-screen bg-white dark:bg-black text-black dark:text-white flex md:grid place-items-center items-center justify-center">
        <div className="text-center">
          <h3 className="mt-4 mb-8 text-2xl lg:text-4xl leading-tight">Work in progress...</h3>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
