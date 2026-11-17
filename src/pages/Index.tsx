
import React, { useState, useEffect, useRef } from "react";
import { mockVideos } from "@/lib/mockData";
import VideoCard from "@/components/VideoCard";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";
import Cover from "@/components/Cover";

const Index: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const videoHeight = container.clientHeight;
    
    // Calculate which video is most in view
    const index = Math.round(scrollTop / videoHeight);
    if (index !== activeIndex && index >= 0 && index < mockVideos.length) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header onOpenAuth={() => setShowAuthModal(true)} />
      
      <Cover />
      
      <div className="py-8">
        <h2 className="text-2xl font-bold px-4 mb-4">Trending Videos</h2>
        
        <div 
          ref={containerRef}
          className="h-[80vh] w-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
        >
          {mockVideos.map((video, index) => (
            <div key={video.id} className="h-full w-full snap-start">
              <VideoCard video={video} isActive={index === activeIndex} />
            </div>
          ))}
        </div>
      </div>
      
      <BottomNav />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  );
};

export default Index;
