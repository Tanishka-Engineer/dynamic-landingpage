import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainlogo from '../../assets/img/mainlogo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src={mainlogo} alt="Nexcent Logo" className="h-8 w-auto" />
          <span className="ml-2 font-bold text-xl text-gray-800">Nexcent</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-gray-900 text-sm">Features</Link>
          <Link to="/community" className="text-gray-700 hover:text-gray-900 text-sm">Community</Link>
          <Link to="/blog" className="text-gray-700 hover:text-gray-900 text-sm">Blog</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-gray-900 text-sm">Pricing</Link>
        </nav>

        {/* Register Button */}
        <div className="hidden md:block">
          <Link
            to="/registration"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Register Now →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-gray-900 text-sm">Features</Link>
            <Link to="/community" className="text-gray-700 hover:text-gray-900 text-sm">Community</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 text-sm">Blog</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 text-sm">Pricing</Link>
            <Link
              to="/registration"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-center"
            >
              Register Now →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
