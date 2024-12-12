// /src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Optional, if you're using React Router

const Navbar = () => (
  <nav className="bg-blue-600 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo or Title */}
      <h1 className="text-2xl font-semibold">Department Management</h1>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-lg hover:text-blue-200 transition-all">Home</Link>
        <Link to="/AddDepartment" className="text-lg hover:text-blue-200 transition-all">Departments</Link>
        <Link to="/about" className="text-lg hover:text-blue-200 transition-all">About</Link>
        <Link to="/contact" className="text-lg hover:text-blue-200 transition-all">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-lg hover:text-blue-200 focus:outline-none">
          <i className="fas fa-bars"></i> {/* You can use an icon library like Font Awesome */}
        </button>
      </div>
    </div>

    {/* Dropdown Menu for Mobile */}
    <div className="md:hidden bg-blue-500 text-white space-y-4 px-6 py-4">
      <Link to="/" className="block text-lg hover:text-blue-200">Home</Link>
      <Link to="/departments" className="block text-lg hover:text-blue-200">Departments</Link>
      <Link to="/about" className="block text-lg hover:text-blue-200">About</Link>
      <Link to="/contact" className="block text-lg hover:text-blue-200">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
