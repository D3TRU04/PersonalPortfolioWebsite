import React, { useState } from "react";
import "../app/globals.css"; // Adjusted path

interface NavBarProps {
  activePath: string;
  search?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ activePath, search }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-xl top-0 z-50 py-1 border-b border-black">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10">
        {/* NavBar content here */}
      </div>
    </nav>
  );
};

export default NavBar;
