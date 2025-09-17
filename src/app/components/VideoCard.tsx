'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  duration?: string;
  views?: string;
  category?: string;
  isLive?: boolean;
  onClick?: (id: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  description,
  videoUrl,
  duration = "2:15",
  views,
  category,
  isLive = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  
  // Handle click - navigate to watch page
  const handleClick = () => {
    router.push('/watch');
    onClick?.(id);
  };
  
  // Assign videos based on ID for variety
  const getVideoSrc = () => {
    if (videoUrl) return videoUrl;
    
    // Rotate through the 3 videos based on card ID
    const videos = [
      '/videos/StockFightMMA.mp4',
      '/videos/StockFightCrowd.mp4', 
      '/videos/StockFightWinner.mp4'
    ];
    
    const index = parseInt(id.slice(-1)) % 3;
    return videos[index] || videos[0];
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="relative bg-dark/50 rounded-xl overflow-hidden border-2 border-secondary 
                      transition-all duration-300 ease-in-out
                      group-hover:border-primary group-hover:transform group-hover:-translate-y-1 
                      group-hover:shadow-xl group-hover:shadow-primary/30">
        
        {/* Video Thumbnail */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-secondary to-dark 
                        overflow-hidden">
          
          {/* Static Thumbnail / Play Button */}
          <div className={`w-full h-full bg-gradient-to-br from-secondary to-dark 
                          flex items-center justify-center relative transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            {/* Primary Play Button */}
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 
                            rounded-full flex items-center justify-center text-light text-2xl font-bold
                            border-2 border-primary/60 shadow-lg shadow-primary/50
                            transition-transform duration-300 hover:scale-110">
              ▶
            </div>
          </div>

          {/* Video Preview on Hover */}
          {isHovered && (
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              src={getVideoSrc()}
              autoPlay
              muted
              loop
              playsInline
              onError={(e) => console.log('Preview video failed to load:', e)}
            />
          )}
            
          {/* Overlay for hover effect */}
          <div className={`absolute inset-0 bg-dark/20 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Live Indicator */}
          {isLive && (
            <div className="absolute top-3 right-3 bg-red-500 text-light px-2 py-1 
                            rounded text-xs font-bold uppercase tracking-wide z-10
                            animate-pulse">
              🔴 LIVE
            </div>
          )}

          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3 bg-dark/80 text-primary px-2 py-1 
                            rounded text-xs font-bold uppercase tracking-wider">
              {category}
            </div>
          )}

          {/* Duration */}
          {!isLive && (
            <div className="absolute bottom-3 right-3 bg-dark/80 text-light px-2 py-1 
                            rounded text-xs font-bold">
              {duration}
            </div>
          )}

          {/* Play Button Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center z-10
                          transition-all duration-300 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="w-16 h-16 bg-primary rounded-full flex items-center 
                            justify-center text-light text-2xl font-bold
                            shadow-lg shadow-primary/50">
              ▶
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="p-4">
          <h3 className="text-light font-bold text-lg mb-2 line-clamp-2 
                         group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-light/60 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          
          {/* Stats */}
          <div className="flex justify-between items-center text-xs">
            <div className="text-light/50 flex items-center gap-2">
              {isLive ? (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  {views} watching
                </span>
              ) : (
                <span>{views} views</span>
              )}
            </div>
            <div className="text-primary font-bold uppercase tracking-wide">
              {isLive ? 'LIVE NOW' : 'WATCH'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;