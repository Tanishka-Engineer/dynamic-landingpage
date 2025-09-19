import React from 'react';
import Frame35 from '../assets/img/Frame 35.png';

function Community() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-roboto">
            Manage your entire community
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-8">
            in a single system
          </h2>
          <p className="text-lg text-gray-600">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* Three Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Membership Organizations */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-8" viewBox="0 0 40 32" fill="none">
                <circle cx="8" cy="8" r="4" fill="#4ADE80" />
                <ellipse cx="8" cy="22" rx="6" ry="4" fill="#4ADE80" />
                <circle cx="20" cy="8" r="4" fill="#22C55E" />
                <ellipse cx="20" cy="22" rx="6" ry="4" fill="#22C55E" />
                <circle cx="32" cy="8" r="4" fill="#16A34A" />
                <ellipse cx="32" cy="22" rx="6" ry="4" fill="#16A34A" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Membership <br /> Organisations
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          {/* National Associations */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect x="12" y="8" width="16" height="24" fill="#22C55E" rx="1" />
                <rect x="8" y="16" width="6" height="16" fill="#4ADE80" rx="1" />
                <rect x="26" y="16" width="6" height="16" fill="#4ADE80" rx="1" />
                <rect x="14" y="12" width="2" height="2" fill="white" />
                <rect x="18" y="12" width="2" height="2" fill="white" />
                <rect x="22" y="12" width="2" height="2" fill="white" />
                <rect x="14" y="16" width="2" height="2" fill="white" />
                <rect x="18" y="16" width="2" height="2" fill="white" />
                <rect x="22" y="16" width="2" height="2" fill="white" />
                <rect x="18" y="28" width="4" height="4" fill="white" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              National <br /> Associations
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          {/* Clubs And Groups */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path
                  d="M8 20 C8 18, 10 16, 12 16 C14 16, 16 18, 16 20 L16 28 C16 30, 14 32, 12 32 C10 32, 8 30, 8 28 Z"
                  fill="#4ADE80"
                />
                <path
                  d="M32 20 C32 18, 30 16, 28 16 C26 16, 24 18, 24 20 L24 28 C24 30, 26 32, 28 32 C30 32, 32 30, 32 28 Z"
                  fill="#4ADE80"
                />
                <circle cx="20" cy="22" r="4" fill="#22C55E" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Clubs And <br /> Groups
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-roboto">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>

        {/* Bottom Section with Illustration */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Illustration */}
          <div className="flex-1 flex justify-center relative">
            <div className="absolute -z-10 w-72 h-72 bg-green-200 rounded-2xl opacity-20 rotate-6"></div>
            <img
              src={Frame35}
              alt="Frame 35"
              className="w-full max-w-sm h-auto"
            />
          </div>

          {/* Content */}
          <div className="flex-1 lg:max-w-md">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              The unseen of spending three years at Pixelgrade
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
