'use client'
import React from 'react';
import NavBar from './NavBar';

function LandingPage() {
  return (
    <>
      <NavBar activePath="" />
      <div className="md:grid md:grid-cols-11 md:col-gap-16 lg:col-gap-8 mb-16 md:mb-16">
        <div className="col-span-5">
          <h3 className="mb-1 text-4xl lg:text-6xl leading-tight">a brief introduction</h3>
          <h3 className="text-lg leading-tight pb-2">computer science @ ut austin</h3>
          <h3 className="text-lg leading-tight pb-2">austin • houston</h3>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
