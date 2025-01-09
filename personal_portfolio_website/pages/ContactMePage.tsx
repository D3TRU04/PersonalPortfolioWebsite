'use client'
import React from 'react';
import NavBar from './NavBar';

const ContactMePage: React.FC = () => {
  return (
    <>
      <NavBar activePath="resume" />
      <div className="w-full h-screen bg-white dark:bg-black text-black dark:text-white flex md:grid place-items-center items-center justify-center">
        <div className="text-center">
          <h3 className="mt-4 mb-8 text-2xl lg:text-4xl leading-tight">
            Reach out to discuss a project, opportunity, or just to say hello.
          </h3>

          {/* Contact details on separate rows */}
          <p className="text-xl mb-4">+1 (713) 474-6641</p>
          <p className="text-xl mb-4">dantruongg_@utexas.edu</p>
        </div>
      </div>
    </>
  );
};

export default ContactMePage;
