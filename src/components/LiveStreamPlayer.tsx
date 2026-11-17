
import React, { useRef, useState, useEffect } from "react";

const LiveStreamPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // This would be replaced with actual streaming implementation
  // For now, we're using a looping video as a placeholder
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play the video when the component mounts
    video.play().catch(error => {
      console.error("Autoplay prevented:", error);
      setIsPlaying(false);
    });

    return () => {
      video.pause();
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(error => {
        console.error("Play prevented:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full bg-gray-900">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted={false}
        onClick={handleVideoClick}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      
      {/* Live indicator */}
      <div className="absolute top-4 right-4 bg-primary px-2 py-0.5 rounded text-xs font-bold animate-pulse">
        LIVE
      </div>
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="bg-primary rounded-full p-4">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStreamPlayer;
