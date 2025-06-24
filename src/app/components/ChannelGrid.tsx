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

interface ChannelCardProps {
  channel: Channel;
  onClick?: (channel: Channel) => void;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get video source based on channel ID
  const getVideoSrc = (id: string) => {
    const videos = [
      '/videos/StockFightMMA.mp4',
      '/videos/StockFightCrowd.mp4', 
      '/videos/StockFightWinner.mp4'
    ];
    const index = parseInt(id) % 3;
    const selectedVideo = videos[index] || videos[0];
    console.log('Channel ID:', id, 'Selected video:', selectedVideo, 'Is hovered:', isHovered);
    return selectedVideo;
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered channel:', channel.name);
    console.log('Channel ID:', channel.id);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left channel:', channel.name);
    setIsHovered(false);
  };

  // Always call this to see what video should be loaded
  const videoSrc = getVideoSrc(channel.id);
  console.log('Component render - Channel:', channel.name, 'Video src:', videoSrc, 'Hovered:', isHovered);

  return (
    <div 
      className="bg-red-500 rounded-xl overflow-hidden border-4 border-yellow-400 
                 transition-all duration-300 ease-in-out cursor-pointer
                 hover:border-yellow-400 hover:transform hover:-translate-y-1 
                 hover:shadow-xl hover:shadow-yellow-400/30"
      onClick={() => onClick?.(channel)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-40 bg-gradient-to-br from-gray-700 to-gray-800 
                      flex items-center justify-center overflow-hidden">
        {/* Live Indicator */}
        {channel.isLive && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 
                          rounded text-xs font-bold uppercase tracking-wide z-10">
            LIVE
          </div>
        )}
        
        {/* Play Button */}
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 
                        rounded-full flex items-center justify-center text-black text-xl font-bold
                        transition-transform duration-300 hover:scale-110
                        border-2 border-yellow-300 shadow-lg shadow-yellow-400/50">
          ▶
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Sport Badge */}
        <div className="absolute bottom-3 left-3 bg-black/90 text-yellow-400 px-3 py-1 
                        rounded-md text-xs font-bold uppercase tracking-wider
                        border border-yellow-400/30">
          {channel.sport}
        </div>
      </div>
      
      {/* Channel Info */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1 truncate uppercase tracking-wide">
          {channel.name}
        </h3>
        <p className="text-gray-400 text-sm mb-3 truncate">
          {channel.description}
        </p>
        
        {/* Stats */}
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center text-gray-500">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            {channel.viewers} viewers
          </div>
          <div className="text-yellow-400 font-bold uppercase tracking-wide text-xs">
            {channel.quality}
          </div>
        </div>
      </div>
    </div>
  );
};

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