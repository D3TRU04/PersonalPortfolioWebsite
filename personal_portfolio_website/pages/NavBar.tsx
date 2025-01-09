import React, { useState } from "react";
import Link from "next/link";
import "@/app/globals.css"; // Adjusted path

interface NavBarProps {
  activePath: string;
  search?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ activePath, search }) => {

  return (
    <nav className="w-full bg-white dark:bg-black shadow-xl top-0 z-50 py-4 border-b border-black">
      <div className="relative container mx-auto flex justify-between items-center px-2 lg:px-10">
        {/* Logo */}
          <Link href="/" className={`text-4xl md:text-10xl text-black dark:text-white text-center`}>
             dan truong.
          </Link>

        {/* Right-Aligned Links */}
        <div className="flex flex-1 justify-end items-center">
          <div className="hidden lg:flex space-x-40">
            <Link href="/ProjectsPage" className={`text-black font-medium text-lg`}>
              Projects
            </Link>
            <Link href="/ResumePage" className={`text-black font-medium text-lg`}>
              Resume
            </Link>
            <Link href="/ContactMePage" className={`text-black font-medium text-lg`}>
              Contact Me!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
