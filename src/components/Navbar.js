import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="logo">
        <img src="logo.png" alt="Logo" className="w-12" />
      </div>
      <div className="nav-links flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-400">
          Home
        </Link>
        <Link to="/country" className="text-white hover:text-gray-400">
          Countries
        </Link>
        <Link to="/compare" className="text-white hover:text-gray-400">
          Compare
        </Link>
        <Link to="/about" className="text-white hover:text-gray-400">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
