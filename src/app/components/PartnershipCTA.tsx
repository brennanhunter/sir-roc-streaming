'use client';

import React, { useState } from 'react';

interface PartnershipCTAProps {
  variant?: 'default' | 'compact' | 'sidebar';
}

const PartnershipCTA: React.FC<PartnershipCTAProps> = ({ variant = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = '/pitch';
  };

  if (variant === 'compact') {
    return (
      <div className="relative bg-gradient-to-r from-secondary to-primary rounded-xl p-6 
                      border-2 border-primary shadow-lg shadow-primary/25 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-primary/50 to-primary/20 
                        animate-pulse"></div>
        
        <div className="relative text-center">
          <h3 className="text-xl font-bold text-light mb-3 tracking-wide">
            🚀 MAKE YOUR STREAM <span className="text-primary">PROFITABLE</span>
          </h3>
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`bg-primary hover:bg-primary/80 text-light font-bold py-3 px-6 
                       rounded-lg transition-all duration-300 transform ${
              isHovered ? 'scale-105 shadow-lg shadow-primary/50' : ''
            }`}
          >
            See Partnership Details
          </button>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className="relative bg-gradient-to-br from-secondary to-primary rounded-xl p-4 
                      border border-primary shadow-lg shadow-secondary/20">
        <div className="text-center">
          <div className="text-2xl mb-2">💼</div>
          <h4 className="text-light font-bold mb-2 text-sm uppercase tracking-wide">
            Business Opportunity
          </h4>
          <p className="text-light/80 text-xs mb-3">
            Turn your content into revenue
          </p>
          <button
            onClick={handleClick}
            className="w-full bg-primary hover:bg-primary/80 text-light font-bold py-2 px-4 
                     rounded text-sm transition-all duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    );
  }

  // Default variant - full size
  return (
    <div className="relative bg-gradient-to-r from-secondary via-primary to-secondary 
                    rounded-2xl p-8 md:p-12 border-2 border-primary shadow-2xl 
                    shadow-primary/30 overflow-hidden my-12">
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 
                      animate-pulse"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full 
                      animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary/10 rounded-full 
                      animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      
      <div className="relative text-center">
        {/* Eye-catching header */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-6xl font-black text-light mb-4 
                         tracking-wider leading-tight">
            💰 STOP LEAVING
            <br />
            <span className="text-primary text-5xl md:text-7xl 
                           bg-gradient-to-r from-primary to-primary/60 
                           bg-clip-text text-transparent animate-pulse">
              MONEY
            </span>
            <br />
            ON THE TABLE
          </h2>
        </div>

        {/* Compelling subtitle */}
        <p className="text-xl md:text-2xl text-light/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your fights could generate <span className="text-primary font-bold">$3,000+ per event</span>.
          <br />
          See exactly how our streaming platform pays for itself.
        </p>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-light/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">200</div>
            <div className="text-light/70 text-sm">Viewers Needed</div>
          </div>
          <div className="bg-light/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">$15</div>
            <div className="text-light/70 text-sm">Per Pay-Per-View</div>
          </div>
          <div className="bg-light/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold text-primary">$2,900</div>
            <div className="text-light/70 text-sm">Profit Per Event</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`bg-primary hover:bg-primary/80 text-light font-black py-4 px-8 
                       rounded-xl text-xl uppercase tracking-wide transition-all duration-300 
                       transform shadow-lg shadow-primary/50 ${
              isHovered ? 'scale-105 shadow-2xl shadow-primary/70' : ''
            }`}
          >
            🚀 See The Numbers
          </button>
          
          <button
            onClick={handleClick}
            className="border-2 border-primary text-primary hover:bg-primary 
                     hover:text-light font-bold py-4 px-8 rounded-xl text-xl 
                     uppercase tracking-wide transition-all duration-300"
          >
            💼 Partnership Details
          </button>
        </div>

        {/* Urgency text */}
        <div className="mt-8 bg-dark/50 backdrop-blur rounded-lg p-4 border border-primary/50">
          <p className="text-primary font-bold text-lg">
            ⚡ Limited Time: Lock in partnership rates before we launch with other promotions
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCTA;