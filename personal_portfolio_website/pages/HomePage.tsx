'use client'
import React from 'react';
import NavBar from './NavBar';

function LandingPage() {
  return (
    <>
      <NavBar activePath="" />
      <div className="w-full h-screen bg-white dark:bg-black text-black dark:text-white flex md:grid place-items-center items-center justify-center">
        <div className="text-center">
          <h3 className="mt-8 mb-1 text-4xl lg:text-6xl leading-tight">a brief introduction</h3>
          <h3 className="text-lg leading-tight pb-2">computer science @ ut austin</h3>
          <h3 className="text-lg leading-tight pb-2">austin • houston</h3>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
