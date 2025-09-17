'use client';

import React from 'react';
import VideoCard from './VideoCard';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  duration?: string;
  views?: string;
  category?: string;
  isLive?: boolean;
}

interface CategorySectionProps {
  title: string;
  description?: string;
  videos: Video[];
  onVideoClick?: (id: string) => void;
  showAll?: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  videos,
  onVideoClick,
  showAll = false
}) => {
  const displayVideos = showAll ? videos : videos.slice(0, 4);

  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-light mb-2 uppercase tracking-wide">
            {title}
          </h2>
          {description && (
            <p className="text-light/60 max-w-2xl">
              {description}
            </p>
          )}
        </div>
        
        {!showAll && videos.length > 4 && (
          <button className="text-primary hover:text-primary/80 font-bold 
                           uppercase tracking-wide text-sm transition-colors duration-200
                           flex items-center gap-2">
            View All
            <span className="text-lg">→</span>
          </button>
        )}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                      gap-6 auto-rows-fr">
        {displayVideos.map((video) => (
          <VideoCard
            key={video.id}
            {...video}
            onClick={onVideoClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;