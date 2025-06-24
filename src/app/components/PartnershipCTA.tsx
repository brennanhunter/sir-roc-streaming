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
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 
                      border-2 border-cyan-400 shadow-lg shadow-cyan-400/25 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 via-blue-600/50 to-cyan-400/20 
                        animate-pulse"></div>
        
        <div className="relative text-center">
          <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
            🚀 MAKE YOUR STREAM <span className="text-cyan-400">PROFITABLE</span>
          </h3>
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold py-3 px-6 
                       rounded-lg transition-all duration-300 transform ${
              isHovered ? 'scale-105 shadow-lg shadow-cyan-400/50' : ''
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
      <div className="relative bg-gradient-to-br from-purple-600 to-blue-700 rounded-xl p-4 
                      border border-cyan-400 shadow-lg shadow-purple-500/20">
        <div className="text-center">
          <div className="text-2xl mb-2">💼</div>
          <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wide">
            Business Opportunity
          </h4>
          <p className="text-gray-200 text-xs mb-3">
            Turn your content into revenue
          </p>
          <button
            onClick={handleClick}
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold py-2 px-4 
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
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 
                    rounded-2xl p-8 md:p-12 border-2 border-cyan-400 shadow-2xl 
                    shadow-cyan-400/30 overflow-hidden my-12">
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 
                      animate-pulse"></div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full 
                      animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-400/10 rounded-full 
                      animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      
      <div className="relative text-center">
        {/* Eye-catching header */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 
                         tracking-wider leading-tight">
            💰 STOP LEAVING
            <br />
            <span className="text-cyan-400 text-5xl md:text-7xl 
                           bg-gradient-to-r from-cyan-400 to-cyan-200 
                           bg-clip-text text-transparent animate-pulse">
              MONEY
            </span>
            <br />
            ON THE TABLE
          </h2>
        </div>

        {/* Compelling subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your fights could generate <span className="text-cyan-400 font-bold">$3,000+ per event</span>.
          <br />
          See exactly how our streaming platform pays for itself.
        </p>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold text-cyan-400">200</div>
            <div className="text-gray-300 text-sm">Viewers Needed</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold text-cyan-400">$15</div>
            <div className="text-gray-300 text-sm">Per Pay-Per-View</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <div className="text-3xl font-bold text-cyan-400">$2,900</div>
            <div className="text-gray-300 text-sm">Profit Per Event</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-black py-4 px-8 
                       rounded-xl text-xl uppercase tracking-wide transition-all duration-300 
                       transform shadow-lg shadow-cyan-400/50 ${
              isHovered ? 'scale-105 shadow-2xl shadow-cyan-400/70' : ''
            }`}
          >
            🚀 See The Numbers
          </button>
          
          <button
            onClick={handleClick}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 
                     hover:text-gray-900 font-bold py-4 px-8 rounded-xl text-xl 
                     uppercase tracking-wide transition-all duration-300"
          >
            💼 Partnership Details
          </button>
        </div>

        {/* Urgency text */}
        <div className="mt-8 bg-gray-900/50 backdrop-blur rounded-lg p-4 border border-cyan-400/50">
          <p className="text-cyan-400 font-bold text-lg">
            ⚡ Limited Time: Lock in partnership rates before we launch with other promotions
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCTA;