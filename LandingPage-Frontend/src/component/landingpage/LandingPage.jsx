import React from 'react';

// Import all the pages
import Hero from '../../pages/Hero';
import Client from '../../pages/Client';
import Cummunity from '../../pages/Cummunity';
import Helpalocal from '../../pages/Helpalocal';
import LeftContent from '../../pages/left-content';
import LeftImg from '../../pages/left-img';
import ThreeImg from '../../pages/ThreeImg';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Render sections in order */}
      <Hero />
      <Client />
      <Cummunity />
      <Helpalocal />
      <LeftContent />
      <LeftImg />
      <ThreeImg/>
    </div>
  );
};

export default LandingPage;
