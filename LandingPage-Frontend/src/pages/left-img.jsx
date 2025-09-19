import React from 'react';
import Logo1 from '../assets/img/Logo (6).png';
import Logo2 from '../assets/img/Logo (2).png';
import Logo3 from '../assets/img/Logo (3).png';
import Logo4 from '../assets/img/Logo (4).png';
import Logo5 from '../assets/img/Logo (5).png';
import Logo6 from '../assets/img/Logo (1).png';
import Logo7 from '../assets/img/Logo (2).png';

function LeftImg() {
  return (
    <div className="flex flex-col bg-gray-100 lg:flex-row items-center gap-8 p-8  mx-auto">
      {/* Left Side - Image */}
      <div className="flex-shrink-0 w-full lg:w-1/3">
        <div className="relative">
          <img 
            src="/src/assets/img/image 9.png" 
            alt="Tesla Logo"
            className="w-full h-auto max-w-sm mx-auto rounded-lg "
          />
        </div>
      </div>
      
      {/* Right Side - Content */}
      <div className="flex-1 w-full lg:w-2/3 space-y-6">
        {/* Main Text Content */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-sm font-Poppins">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus 
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida 
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie 
            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse 
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, 
            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum 
            id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
        </div>
        
        {/* Author Section */}
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Tim Smith</h3>
          <p className="text-gray-500 mb-6">British Dragon Boat Racing Association</p>
          
          {/* Company Logos */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        <img src={Logo1} alt="Logo 1" className="w-6 h-6 object-contain" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        <img src={Logo2} alt="Logo 2" className="w-6 h-6 object-contain" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded bg-white">
        <img src={Logo3} alt="Logo 3" className="w-6 h-6 object-contain" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded bg-gray-100">
        <img src={Logo4} alt="Logo 4" className="w-6 h-6 object-contain" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        <img src={Logo5} alt="Logo 5" className="w-6 h-6 object-contain" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        <img src={Logo6} alt="Logo 6" className="w-6 h-6 object-contain" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
        <img src={Logo7} alt="Logo 7" className="w-6 h-6 object-contain" />
      </div>
    </div>
          
          {/* Meet all customers link */}
          <div className="flex items-center">
            <a href="#" className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 transition-colors">
              Meet all customers
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;