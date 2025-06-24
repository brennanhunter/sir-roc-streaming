'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import VideoPlayer from '../components/VideoPlayer';
import LiveChat from '../components/LiveChat';
import VideoCard from '../components/VideoCard';
import PartnershipCTA from '../components/PartnershipCTA';

export default function WatchPage() {
  // Prevent auto-scroll on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = 'auto';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const relatedFights = [
    {
      id: 'related-1',
      title: 'UFC 300 MAIN CARD',
      description: 'Jones vs Miocic - Heavyweight Championship',
      thumbnail: '',
      duration: 'LIVE',
      views: '187.5K',
      category: 'MMA',
      isLive: true
    },
    {
      id: 'related-2',
      title: 'CANELO VS BIVOL II',
      description: 'Super Middleweight Championship Rematch',
      thumbnail: '',
      duration: '2:45:30',
      views: '2.1M',
      category: 'BOXING'
    },
    {
      id: 'related-3',
      title: 'GLORY KICKBOXING',
      description: 'Heavyweight Tournament Finals',
      thumbnail: '',
      duration: 'LIVE',
      views: '28.1K',
      category: 'KICKBOXING',
      isLive: true
    },
    {
      id: 'related-4',
      title: 'SIR ROC UNDERCARD SPECIAL',
      description: 'Rising Stars Championship Bouts',
      thumbnail: '',
      duration: '1:23:15',
      views: '156K',
      category: 'BOXING'
    }
  ];

  const handleVideoClick = (id: string) => {
    console.log('Switching to video:', id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Navigation */}
      <div className="mb-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 
                   transition-colors duration-200 font-medium"
        >
          ← Back to Live Fights
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Video Player Section */}
        <div className="lg:col-span-3 space-y-6">
          {/* Video Player */}
          <VideoPlayer 
            title="SIR ROC CHAMPIONSHIP LIVE"
            isLive={true}
            viewers="52.3K"
          />

          {/* Fight Info */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-wide">
                  <span className="text-yellow-400">SIR ROC</span> CHAMPIONSHIP LIVE
                </h1>
                <p className="text-gray-400 text-lg">
                  World Heavyweight Title Fight - Main Event
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold
                               uppercase tracking-wide animate-pulse flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  LIVE NOW
                </div>
                <div className="text-yellow-400 font-bold">
                  52.3K watching
                </div>
              </div>
            </div>

            {/* Fight Details */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-700">
              <div>
                <h3 className="text-yellow-400 font-bold mb-2 uppercase tracking-wide">Event Details</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-500">Date:</span> June 23, 2025</p>
                  <p><span className="text-gray-500">Location:</span> MGM Grand, Las Vegas</p>
                  <p><span className="text-gray-500">Weight Class:</span> Heavyweight</p>
                  <p><span className="text-gray-500">Rounds:</span> 12 x 3 minutes</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-yellow-400 font-bold mb-2 uppercase tracking-wide">Fighters</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-500">Red Corner:</span> Mike &quot;Thunder&quot; Johnson</p>
                  <p><span className="text-gray-500">Blue Corner:</span> Antonio &quot;The Bull&quot; Rodriguez</p>
                  <p><span className="text-gray-500">Title:</span> WBC Heavyweight Championship</p>
                  <p><span className="text-gray-500">Referee:</span> John McCarthy</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-yellow-400 font-bold mb-2 uppercase tracking-wide">Statistics</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-500">Round:</span> 3 of 12</p>
                  <p><span className="text-gray-500">Time:</span> 1:45 remaining</p>
                  <p><span className="text-gray-500">Total Punches:</span> Johnson 47, Rodriguez 52</p>
                  <p><span className="text-gray-500">Power Shots:</span> Johnson 23, Rodriguez 31</p>
                </div>
              </div>
            </div>
          </div>
        <PartnershipCTA />
          {/* Related Fights */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">
              More <span className="text-yellow-400">Live Fights</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedFights.map((fight) => (
                <VideoCard
                  key={fight.id}
                  {...fight}
                  onClick={handleVideoClick}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Live Chat */}
          <div className="h-96 lg:h-[600px]">
            <LiveChat />
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-yellow-400 font-bold mb-4 uppercase tracking-wide">
              Fight Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Viewers</span>
                <span className="text-white font-bold">52.3K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Quality</span>
                <span className="text-yellow-400 font-bold">4K Ultra HD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Audio</span>
                <span className="text-white font-bold">5.1 Surround</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Latency</span>
                <span className="text-green-400 font-bold">Ultra Low</span>
              </div>
            </div>
          </div>

          {/* Social Share */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <h3 className="text-yellow-400 font-bold mb-4 uppercase tracking-wide">
              Share This Fight
            </h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 
                               rounded-lg transition-colors duration-200 flex items-center 
                               justify-center gap-2">
                📘 Share on Facebook
              </button>
              <button className="w-full bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 
                               rounded-lg transition-colors duration-200 flex items-center 
                               justify-center gap-2">
                🐦 Share on Twitter
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
                               rounded-lg transition-colors duration-200 flex items-center 
                               justify-center gap-2">
                🔗 Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}