import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/img/Illustration.png';

function Hero() {
  const navigate = useNavigate(); // Initialize React Router navigation

  const handleRegisterClick = () => {
    navigate('/registration'); // Redirect to registration page
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-3xl font-bold text-gray-800 leading-tight font-Montserrat">
              Lessons and insights{' '}
              <span className="text-green-500">from 8 years</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Where to grow your business as a photographer, site or social media?
            </p>
          </div>
          
          <button
            onClick={handleRegisterClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-10 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Register
          </button>
        </div>
        
        {/* Right Illustration */}
        <img
          src={img}
          alt="Illustration"
          className="w-full max-w-sm h-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
