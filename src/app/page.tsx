'use client';

import React from 'react';
import ChannelGrid from './components/ChannelGrid';
import PartnershipCTA from './components/PartnershipCTA';

export default function Home() {
  interface Channel {
    name: string;
    // Add other properties as needed
  }

  const handleChannelClick = (channel: Channel) => {
    console.log('Opening channel:', channel.name);
    // Add navigation to player page here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-700 min-h-[70vh]">
          {/* Background Video */}
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/StockFightBoxing.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full 
                            bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.2),transparent_50%)]"></div>
          </div>
          
          <div className="relative p-8 md:p-16 flex items-center min-h-[70vh] pb-32 md:pb-40">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-white">PREMIUM</span>
                <br />
                <span className="text-yellow-400">FIGHT STREAMS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                Watch exclusive SIR ROC boxing events and world-class combat sports 
                in ultra-high definition. Live fights, instant replays, multi-angle coverage.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <button 
                  onClick={() => window.location.href = '/watch'}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black 
                           px-10 py-4 rounded-lg font-bold uppercase tracking-wide text-lg
                           transition-all duration-200 transform hover:scale-105
                           shadow-lg shadow-yellow-400/50"
                >
                  🔴 Watch Live Now
                </button>
                <button 
                  onClick={() => window.location.href = '/browse'}
                  className="border-2 border-yellow-400 text-yellow-400 
                           hover:bg-yellow-400 hover:text-black
                           px-10 py-4 rounded-lg font-bold uppercase tracking-wide text-lg
                           transition-all duration-200"
                >
                  Browse Schedule
                </button>
              </div>
            </div>
          </div>
          
          {/* Stats Bar at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-gray-700">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-yellow-400">247K+</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Live Viewers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-yellow-400">8</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Live Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-yellow-400">4K</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Ultra HD</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">Live Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Grid */}
      <ChannelGrid onChannelClick={handleChannelClick} />

      {/* Features Section */}
      <div className="mt-16 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
            Why Choose <span className="text-yellow-400">SIR ROC Stream</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional fight broadcasting with premium features that put you ringside
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 
                          hover:border-yellow-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center 
                            justify-center mb-4">
              <span className="text-2xl">🥊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">EXCLUSIVE CONTENT</h3>
            <p className="text-gray-400">
              Access to SIR ROC championship fights, behind-the-scenes content, 
              and fighter interviews you won&apos;t find anywhere else.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 
                          hover:border-yellow-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center 
                            justify-center mb-4">
              <span className="text-2xl">📺</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">4K ULTRA HD</h3>
            <p className="text-gray-400">
              Crystal clear picture quality with multiple camera angles, 
              slow-motion replays, and professional broadcast production.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 
                          hover:border-yellow-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center 
                            justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ZERO DELAY</h3>
            <p className="text-gray-400">
              Lightning-fast streaming with no buffering or lag. 
              Experience every knockout punch in real-time.
            </p>
          </div>
        </div>
        <PartnershipCTA />
      </div>
    </div>
  );
}