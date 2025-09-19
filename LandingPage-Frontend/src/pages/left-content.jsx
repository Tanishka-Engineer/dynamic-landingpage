// src/pages/LeftContent.jsx
import React from "react";
import leftimg from "../assets/img/Illustration.png"; // replace with your image path

const LeftContent = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left side image */}
        <div className="flex justify-center">
          <img
            src={leftimg}
            alt="Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Right side content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            How to design your site footer like <br /> we did
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeftContent;
