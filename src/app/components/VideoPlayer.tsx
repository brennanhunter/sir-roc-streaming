'use client';

import React, { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  title: string;
  isLive?: boolean;
  viewers?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({  
  isLive = true, 
  viewers = "52.3K" 
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(75);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [showControls]); // Changed dependency to prevent constant re-triggers

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowControls(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setShowControls(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    // Removed the timer return that was causing issues
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden
                    border-2 border-gray-700 shadow-2xl" 
         onFocus={(e) => e.preventDefault()}
         onScroll={(e) => e.preventDefault()}>
      
      {/* Video Content Area */}
      <div 
        ref={videoRef}
        className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black
                   flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
        onMouseMove={handleMouseMove}
        onFocus={(e) => e.preventDefault()}
        tabIndex={-1}
      >
        {/* Actual Video Content */}
        <video 
          className="absolute inset-0 w-full h-full object-cover z-10"
          src="/videos/StockFightMMA.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => console.log('Video failed to load:', e)}
        >
          Your browser does not support the video tag.
        </video>

        {/* Fallback for video loading - BEHIND the video */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0">
          <div className="text-center">
            <div className="text-8xl mb-4 animate-pulse">🥊</div>
            <div className="text-white text-2xl font-bold mb-2">LIVE BOXING MATCH</div>
            <div className="text-yellow-400 text-lg">Loading Stream...</div>
          </div>
        </div>

        {/* Live Indicator */}
        {isLive && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 
                          rounded-full text-sm font-bold uppercase tracking-wide
                          animate-pulse flex items-center gap-2 z-20">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            LIVE
          </div>
        )}

        {/* Viewer Count */}
        <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 
                        rounded-full text-sm font-bold flex items-center gap-2 z-20">
          <span className="text-red-500">👁</span>
          {viewers} watching
        </div>

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30">
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center 
                            justify-center text-black text-3xl font-bold
                            shadow-lg shadow-yellow-400/50">
              ▶
            </div>
          </div>
        )}

        {/* Controls Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                        from-black via-black/80 to-transparent p-6
                        transition-all duration-300 z-20 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-white text-sm mb-2">
              <span>{isLive ? 'LIVE' : '1:23:45'}</span>
              <span>{isLive ? 'STREAMING' : '2:15:30'}</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1">
              <div className={`bg-yellow-400 h-1 rounded-full transition-all duration-300 ${
                isLive ? 'w-full' : 'w-3/5'
              }`}></div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center 
                           justify-center text-black text-xl font-bold
                           hover:bg-yellow-300 transition-colors duration-200"
              >
                {isPlaying ? '⏸' : '▶'}
              </button>

              <button
                onClick={toggleMute}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center 
                           justify-center text-white hover:bg-gray-600 transition-colors"
              >
                {isMuted ? '🔇' : '🔊'}
              </button>

              {/* Volume Slider */}
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-20 h-1 bg-gray-600 rounded-lg appearance-none
                           slider-thumb:appearance-none slider-thumb:w-3 slider-thumb:h-3
                           slider-thumb:rounded-full slider-thumb:bg-yellow-400"
                />
                <span className="text-white text-sm w-8">{isMuted ? 0 : volume}</span>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-4">
              {/* Quality Selector */}
              <select className="bg-gray-700 text-white px-3 py-1 rounded
                               border border-gray-600 focus:border-yellow-400">
                <option>4K Ultra HD</option>
                <option>1080p HD</option>
                <option>720p</option>
                <option>480p</option>
              </select>

              {/* Settings */}
              <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center 
                               justify-center text-white hover:bg-gray-600 transition-colors">
                ⚙️
              </button>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center 
                           justify-center text-white hover:bg-gray-600 transition-colors"
              >
                ⛶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;