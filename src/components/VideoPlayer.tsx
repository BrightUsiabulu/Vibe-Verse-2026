
import React, { useRef, useState, useEffect } from "react";
import { formatNumber } from "@/lib/mockData";

interface VideoPlayerProps {
  videoUrl: string;
  autoplay?: boolean;
  inView?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, autoplay = false, inView = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      if (autoplay) {
        video.play().catch(error => {
          console.error("Autoplay prevented:", error);
        });
        setIsPlaying(true);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [inView, autoplay]);

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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    
    setIsMuted(!isMuted);
    video.muted = !isMuted;
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        loop
        playsInline
        muted={isMuted}
        onClick={handleVideoClick}
      />
      <div 
        className="absolute bottom-4 right-4 bg-black/40 rounded-full p-2 z-20"
        onClick={toggleMute}
      >
        {isMuted ? (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </div>
      <div className="video-progress">
        <div className="video-progress-filled" style={{ width: `${progress}%` }}></div>
      </div>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black/30 rounded-full p-4">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
