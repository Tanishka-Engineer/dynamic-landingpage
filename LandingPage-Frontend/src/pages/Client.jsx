import React from 'react';

// Import your images
  import Logo1 from '../assets/img/Logo (6).png';
  import Logo2 from '../assets/img/Logo (2).png';
  import Logo3 from '../assets/img/Logo (3).png';
  import Logo4 from '../assets/img/Logo (4).png';
  import Logo5 from '../assets/img/Logo (5).png';
  import Logo6 from '../assets/img/Logo (1).png';
  import Logo7 from '../assets/img/Logo (2).png';

function Client() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

  return (
    <div className="client-section text-center py-12 px-4">
      <h2 className="text-3xl font-bold font-roboto">Our Clients</h2>
      <p className="text-sm py-3">
        We have been working with some Fortune 500+ clients
      </p>

      {/* Responsive flex/grid */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 mt-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-6 sm:h-8 md:h-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Client;
