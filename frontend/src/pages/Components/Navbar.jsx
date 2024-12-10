import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <ul className="flex space-x-4 text-white">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
