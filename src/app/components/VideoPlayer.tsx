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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [volume, setVolume] = useState(75);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowControls(false), 3000);
    return () => clearTimeout(timer);
  }, [showControls]);

  // Sync with actual video state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updatePlayState = () => {
      setIsPlaying(!video.paused);
    };

    const handleLoadedMetadata = () => {
      setIsPlaying(!video.paused);
    };

    video.addEventListener('play', updatePlayState);
    video.addEventListener('pause', updatePlayState);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('play', updatePlayState);
      video.removeEventListener('pause', updatePlayState);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Play/pause error:', error);
    }
    
    setShowControls(true);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    setShowControls(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const newVolume = parseInt(e.target.value);
    
    if (video) {
      video.volume = newVolume / 100;
      setVolume(newVolume);
      if (newVolume === 0) {
        video.muted = true;
        setIsMuted(true);
      } else {
        video.muted = false;
        setIsMuted(false);
      }
    }
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.log('Fullscreen error:', error);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full bg-black rounded-xl overflow-hidden
                  border-2 border-gray-700 shadow-2xl ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'aspect-video'
      }`}
      onMouseMove={handleMouseMove}
    >
      
      {/* Video Element */}
      <video 
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-10"
        src="/videos/StockFightMMA.mp4"
        autoPlay
        muted
        loop
        playsInline
        onClick={togglePlay}
      />

      {/* Live Indicator */}
      {isLive && (
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 
                        rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide
                        animate-pulse flex items-center gap-1 sm:gap-2 z-20">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping"></span>
          LIVE
        </div>
      )}

      {/* Viewer Count */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/80 text-white px-2 py-0.5 sm:px-3 sm:py-1 
                      rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 z-20">
        <span className="text-red-500 text-xs sm:text-base">👁</span>
        {viewers}
      </div>

      {/* Play/Pause Overlay */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center z-30 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center 
                          justify-center text-black text-xl sm:text-2xl md:text-3xl font-bold
                          shadow-lg shadow-yellow-400/50">
            ▶
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                      from-black via-black/80 to-transparent p-3 sm:p-4 md:p-6
                      transition-all duration-300 z-20 ${
        showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Progress Bar */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <div className="flex items-center justify-between text-white text-xs sm:text-sm mb-1 sm:mb-2">
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
        <div className="flex items-center justify-between gap-2">
          {/* Left Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <button
              onClick={togglePlay}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center 
                         justify-center text-black text-sm sm:text-lg md:text-xl font-bold
                         hover:bg-yellow-300 transition-colors duration-200"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            <button
              onClick={toggleMute}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center 
                         justify-center text-white hover:bg-gray-600 transition-colors text-sm sm:text-base"
            >
              {isMuted ? '🔇' : '🔊'}
            </button>

            {/* Volume Slider - Hidden on smallest screens */}
            <div className="hidden xs:flex items-center space-x-1 sm:space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-12 sm:w-16 md:w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-white text-xs sm:text-sm w-6 sm:w-8">{isMuted ? 0 : volume}</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            {/* Quality Selector - Hidden on smallest screens */}
            <select className="hidden sm:block bg-gray-700 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded
                             border border-gray-600 focus:border-yellow-400 focus:outline-none text-xs sm:text-sm">
              <option>4K</option>
              <option>1080p</option>
              <option>720p</option>
              <option>480p</option>
            </select>

            {/* Settings - Hidden on smallest screens */}
            <button className="hidden xs:block w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center 
                             justify-center text-white hover:bg-gray-600 transition-colors text-sm sm:text-base">
              ⚙️
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-700 rounded-full flex items-center 
                         justify-center text-white hover:bg-gray-600 transition-colors text-sm sm:text-base"
            >
              ⛶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;