
import React, { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";
import { mockVideos } from "@/lib/mockData";
import { toast } from "@/components/ui/use-toast";
import PublishButton from "@/components/PublishButton";

const Index: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % mockVideos.length);
    toast({
      title: "Video ended",
      description: "Playing next video",
    });
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    toast({
      title: "Authentication successful!",
      description: "You are now logged in.",
    });
  };

  return (
    <div className="h-screen bg-black overflow-hidden">
      <div className="h-screen w-full">
        <VideoPlayer
          videoUrl={mockVideos[currentVideoIndex].videoUrl}
          autoplay={true}
          inView={true}
          key={currentVideoIndex}
        />
        <Header onOpenAuth={() => setShowAuthModal(true)} />
        <BottomNav />
        <PublishButton />
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      </div>
    </div>
  );
};

export default Index;
