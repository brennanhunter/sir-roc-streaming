'use client';

import React, { useState } from 'react';
import CategorySection from '../components/CategorySection';
import PartnershipCTA from '../components/PartnershipCTA';

const browseMockData = {
  liveNow: [
    {
      id: 'live-1',
      title: 'SIR ROC CHAMPIONSHIP LIVE',
      description: 'World Heavyweight Title Fight - Main Event',
      thumbnail: '',
      duration: 'LIVE',
      views: '52.3K',
      category: 'BOXING',
      isLive: true
    },
    {
      id: 'live-2',
      title: 'UFC 300 MAIN CARD',
      description: 'Jones vs Miocic - Heavyweight Championship',
      thumbnail: '',
      duration: 'LIVE',
      views: '187.5K',
      category: 'MMA',
      isLive: true
    },
    {
      id: 'live-3',
      title: 'GLORY KICKBOXING',
      description: 'Heavyweight Tournament Finals',
      thumbnail: '',
      duration: 'LIVE',
      views: '28.1K',
      category: 'KICKBOXING',
      isLive: true
    },
    {
      id: 'live-4',
      title: 'ONE CHAMPIONSHIP',
      description: 'Muay Thai World Grand Prix',
      thumbnail: '',
      duration: 'LIVE',
      views: '41.7K',
      category: 'MUAY THAI',
      isLive: true
    }
  ],
  boxing: [
    {
      id: 'box-1',
      title: 'CANELO VS BIVOL II',
      description: 'Super Middleweight Championship Rematch',
      thumbnail: '',
      duration: '2:45:30',
      views: '2.1M',
      category: 'BOXING'
    },
    {
      id: 'box-2',
      title: 'WILDER VS FURY III',
      description: 'Heavyweight Trilogy Fight',
      thumbnail: '',
      duration: '1:58:45',
      views: '3.4M',
      category: 'BOXING'
    },
    {
      id: 'box-3',
      title: 'RYAN GARCIA HIGHLIGHTS',
      description: 'Best Knockouts and Combinations',
      thumbnail: '',
      duration: '12:34',
      views: '890K',
      category: 'BOXING'
    },
    {
      id: 'box-4',
      title: 'SIR ROC UNDERCARD SPECIAL',
      description: 'Rising Stars Championship Bouts',
      thumbnail: '',
      duration: '1:23:15',
      views: '156K',
      category: 'BOXING'
    },
    {
      id: 'box-5',
      title: 'JOSHUA VS USYK REMATCH',
      description: 'Heavyweight Unification Fight',
      thumbnail: '',
      duration: '2:12:45',
      views: '1.8M',
      category: 'BOXING'
    },
    {
      id: 'box-6',
      title: 'TANK DAVIS POWER SHOTS',
      description: 'Most Devastating Knockouts',
      thumbnail: '',
      duration: '8:23',
      views: '654K',
      category: 'BOXING'
    }
  ],
  mma: [
    {
      id: 'mma-1',
      title: 'CONOR MCGREGOR RETURN',
      description: 'Lightweight Championship Comeback',
      thumbnail: '',
      duration: '2:34:20',
      views: '4.2M',
      category: 'MMA'
    },
    {
      id: 'mma-2',
      title: 'FEMALE FIGHT OF THE YEAR',
      description: 'Shevchenko vs Grasso Championship',
      thumbnail: '',
      duration: '1:45:30',
      views: '987K',
      category: 'MMA'
    },
    {
      id: 'mma-3',
      title: 'SUBMISSION SPECIALISTS',
      description: 'Best Grappling Finishes 2024',
      thumbnail: '',
      duration: '15:45',
      views: '1.2M',
      category: 'MMA'
    },
    {
      id: 'mma-4',
      title: 'BELLATOR TOURNAMENT',
      description: 'Lightweight Grand Prix Finals',
      thumbnail: '',
      duration: '2:05:15',
      views: '445K',
      category: 'MMA'
    }
  ],
  kickboxing: [
    {
      id: 'kick-1',
      title: 'RICO VERHOEVEN DOMINANCE',
      description: 'Heavyweight King Highlight Reel',
      thumbnail: '',
      duration: '18:30',
      views: '765K',
      category: 'KICKBOXING'
    },
    {
      id: 'kick-2',
      title: 'GLORY 95 FULL EVENT',
      description: 'Amsterdam Championship Night',
      thumbnail: '',
      duration: '3:15:45',
      views: '234K',
      category: 'KICKBOXING'
    },
    {
      id: 'kick-3',
      title: 'FEMALE WARRIORS',
      description: 'Women\'s Kickboxing Championships',
      thumbnail: '',
      duration: '1:32:20',
      views: '189K',
      category: 'KICKBOXING'
    },
    {
      id: 'kick-4',
      title: 'K-1 LEGENDS',
      description: 'Classic Fights Compilation',
      thumbnail: '',
      duration: '45:12',
      views: '892K',
      category: 'KICKBOXING'
    }
  ]
};

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleVideoClick = (id: string) => {
    console.log('Opening video:', id);
    // Navigate to watch page
  };

  const categories = [
    { id: 'all', label: 'ALL FIGHTS', count: 20 },
    { id: 'live', label: 'LIVE NOW', count: 4 },
    { id: 'boxing', label: 'BOXING', count: 6 },
    { id: 'mma', label: 'MMA', count: 4 },
    { id: 'kickboxing', label: 'KICKBOXING', count: 4 },
    { id: 'muaythai', label: 'MUAY THAI', count: 2 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-light mb-4 uppercase tracking-wide">
          Browse <span className="text-primary">All Fights</span>
        </h1>
        <p className="text-xl text-light/60 max-w-3xl">
          Discover thousands of professional boxing, MMA, kickboxing and Muay Thai fights. 
          From live events to classic matchups, all in ultra HD quality.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-sm
                        transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-primary text-light'
                  : 'bg-dark/80 text-light/70 hover:bg-secondary hover:text-primary'
              }`}
            >
              {category.label}
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-light/20 text-light'
                  : 'bg-secondary text-light/60'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Live Now */}
        <CategorySection
          title="🔴 LIVE NOW"
          description="Watch exclusive live fights happening right now"
          videos={browseMockData.liveNow}
          onVideoClick={handleVideoClick}
        />

        {/* Featured Boxing */}
        <CategorySection
          title="🥊 CHAMPIONSHIP BOXING"
          description="World title fights and premium boxing events"
          videos={browseMockData.boxing}
          onVideoClick={handleVideoClick}
        />

        {/* MMA Collection */}
        <CategorySection
          title="🔥 MMA COLLECTION"
          description="UFC, Bellator, and elite mixed martial arts"
          videos={browseMockData.mma}
          onVideoClick={handleVideoClick}
        />

        {/* Kickboxing & Muay Thai */}
        <CategorySection
          title="⚡ STRIKING SPORTS"
          description="Glory Kickboxing, K-1, and Muay Thai championships"
          videos={browseMockData.kickboxing}
          onVideoClick={handleVideoClick}
        />
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-r from-dark via-secondary to-dark 
                      rounded-2xl p-8 md:p-12 border border-secondary">
        <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
          <PartnershipCTA />
        </h2>
      </div>
    </div>
  );
}