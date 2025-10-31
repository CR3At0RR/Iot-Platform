// components/Navbar.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineLogout } from 'react-icons/ai'; // You can use any icon library, e.g., react-icons

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear cookies, remove tokens)
    console.log("Logging out...");
    // Redirect to login page after logout
    router.push('/');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          {/* <img
            src="/logo.png" // Replace with your logo URL
            alt="Logo"
            className="h-8 w-auto"
          /> */}
          <span className="text-xl font-semibold">CypherWave</span> {/* Replace with app name or text */}
        </div>

        {/* Logout icon on the right */}
        <div>
          <button 
            onClick={handleLogout} 
            className="hover:text-gray-100">
            <AiOutlineLogout size={24} /> {/* Logout icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
