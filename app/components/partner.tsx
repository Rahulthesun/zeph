import React from 'react';

const sponsors = [
  {
    name: 'Coin Ex Wallet',
    logo: 'https://miro.medium.com/v2/resize:fit:1400/0*E1Et8hunvOUDHT7E',
  },
  {
    name: 'Kanini',
    logo: 'https://www.texus.io/_next/image?url=%2Fassets%2Fsponsors205%2Fhackathon%2Fkan-logo.webp&w=384&q=75',
  },
  {
    name: 'dff black',
    logo: 'https://www.texus.io/_next/image?url=%2Fassets%2Fsponsors205%2Fhackathon%2FOffblack.png&w=384&q=75',
  },
  {
    name: 'Rise In',
    logo: 'https://www.texus.io/_next/image?url=%2Fassets%2Fsponsors205%2Fhackathon%2FRisein.png&w=384&q=75',
  },
  
];


export default function Sponsors() {
  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-left gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-left hover:grayscale-0 opacity-100 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}