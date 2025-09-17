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
        <div className="relative bg-dark rounded-2xl overflow-hidden border border-secondary min-h-[70vh]">
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
          <div className="absolute inset-0 bg-dark/60"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full 
                            bg-[radial-gradient(circle_at_30%_20%,rgba(27,152,224,0.2),transparent_50%)]"></div>
          </div>
          
          <div className="relative p-8 md:p-16 flex items-center min-h-[70vh] pb-32 md:pb-40">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="text-light">PREMIUM</span>
                <br />
                <span className="text-primary">FIGHT STREAMS</span>
              </h1>
              <p className="text-xl md:text-2xl text-light/80 mb-8 leading-relaxed max-w-3xl">
                Watch exclusive SIR ROC boxing events and world-class combat sports 
                in ultra-high definition. Live fights, instant replays, multi-angle coverage.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <button 
                  onClick={() => window.location.href = '/watch'}
                  className="bg-primary hover:bg-primary/80 text-light 
                           px-10 py-4 rounded-lg font-bold uppercase tracking-wide text-lg
                           transition-all duration-200 transform hover:scale-105
                           shadow-lg shadow-primary/50"
                >
                  🔴 Watch Live Now
                </button>
                <button 
                  onClick={() => window.location.href = '/browse'}
                  className="border-2 border-primary text-primary 
                           hover:bg-primary hover:text-light
                           px-10 py-4 rounded-lg font-bold uppercase tracking-wide text-lg
                           transition-all duration-200"
                >
                  Browse Schedule
                </button>
              </div>
            </div>
          </div>
          
          {/* Stats Bar at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-dark/80 backdrop-blur-sm border-t border-secondary">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-primary">247K+</div>
                  <div className="text-sm text-light/70 uppercase tracking-wide">Live Viewers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-primary">8</div>
                  <div className="text-sm text-light/70 uppercase tracking-wide">Live Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-primary">4K</div>
                  <div className="text-sm text-light/70 uppercase tracking-wide">Ultra HD</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-light/70 uppercase tracking-wide">Live Support</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4 uppercase tracking-wide">
            Why Choose <span className="text-primary">SIR ROC Stream</span>
          </h2>
          <p className="text-light/60 max-w-2xl mx-auto">
            Professional fight broadcasting with premium features that put you ringside
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark/50 rounded-xl p-6 border border-secondary 
                          hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center 
                            justify-center mb-4">
              <span className="text-2xl">🥊</span>
            </div>
            <h3 className="text-xl font-bold text-light mb-3">EXCLUSIVE CONTENT</h3>
            <p className="text-light/60">
              Access to SIR ROC championship fights, behind-the-scenes content, 
              and fighter interviews you won&apos;t find anywhere else.
            </p>
          </div>
          
          <div className="bg-dark/50 rounded-xl p-6 border border-secondary 
                          hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center 
                            justify-center mb-4">
              <span className="text-2xl">📺</span>
            </div>
            <h3 className="text-xl font-bold text-light mb-3">4K ULTRA HD</h3>
            <p className="text-light/60">
              Crystal clear picture quality with multiple camera angles, 
              slow-motion replays, and professional broadcast production.
            </p>
          </div>
          
          <div className="bg-dark/50 rounded-xl p-6 border border-secondary 
                          hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center 
                            justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-light mb-3">ZERO DELAY</h3>
            <p className="text-light/60">
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