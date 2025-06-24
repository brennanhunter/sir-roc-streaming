'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import VideoCard from './VideoCard';

interface Channel {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  isLive: boolean;
  viewers: string;
  quality: string;
  sport: string;
}

const mockChannels: Channel[] = [
  {
    id: '1',
    name: 'SIROC CHAMPIONSHIP',
    description: 'Main Event: World Title Fight',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '52.3K',
    quality: '4K HD',
    sport: 'BOXING'
  },
  {
    id: '2',
    name: 'UFC 300',
    description: 'Jones vs Miocic - Heavyweight Title',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '187.3K',
    quality: '4K HD',
    sport: 'MMA'
  },
  {
    id: '3',
    name: 'CANELO vs BIVOL II',
    description: 'Super Middleweight Championship',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '94.7K',
    quality: '4K HD',
    sport: 'BOXING'
  },
  {
    id: '4',
    name: 'ONE CHAMPIONSHIP',
    description: 'Muay Thai World Grand Prix Final',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '32.1K',
    quality: '1080p HD',
    sport: 'MUAY THAI'
  },
  {
    id: '5',
    name: 'BELLATOR 300',
    description: 'Lightweight Title Eliminator',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '28.4K',
    quality: '1080p HD',
    sport: 'MMA'
  },
  {
    id: '6',
    name: 'GLORY KICKBOXING',
    description: 'Heavyweight Tournament Finals',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '19.8K',
    quality: '1080p HD',
    sport: 'KICKBOXING'
  },
  {
    id: '7',
    name: 'PFL PLAYOFFS',
    description: 'Million Dollar Tournament',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '41.2K',
    quality: '4K HD',
    sport: 'MMA'
  },
  {
    id: '8',
    name: 'BARE KNUCKLE FC',
    description: 'Heavyweight Championship',
    thumbnail: '/api/placeholder/280/160',
    isLive: true,
    viewers: '15.6K',
    quality: '1080p HD',
    sport: 'BARE KNUCKLE'
  }
];


interface ChannelGridProps {
  channels?: Channel[];
  onChannelClick?: (channel: Channel) => void;
}

const ChannelGrid: React.FC<ChannelGridProps> = ({ 
  channels = mockChannels, 
  onChannelClick 
}) => {
  const router = useRouter();
  
  const handleChannelClick = (channel: Channel) => {
    console.log('Channel clicked:', channel.name);
    // Navigate to watch page
    router.push('/watch');
    onChannelClick?.(channel);
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-wide">
          <span className="text-yellow-400">SIROC</span> LIVE FIGHTS
        </h2>
        <p className="text-gray-400">Premium boxing & combat sports broadcasts</p>
      </div>
      
      {/* Channel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      gap-6 auto-rows-fr">
        {channels.map((channel) => (
          <VideoCard
            key={channel.id}
            id={channel.id}
            title={channel.name}
            description={channel.description}
            thumbnail=""
            views={channel.viewers}
            category={channel.sport}
            isLive={channel.isLive}
            duration={channel.isLive ? "LIVE" : "2:15"}
            onClick={() => handleChannelClick(channel)}
          />
        ))}
      </div>
      
      {/* Load More */}
      <div className="flex justify-center mt-8">
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 
                           rounded-lg transition-colors duration-200 font-medium">
          Load More Channels
        </button>
      </div>
    </div>
  );
};

export default ChannelGrid;