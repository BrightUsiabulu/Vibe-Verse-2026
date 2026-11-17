
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { mockUsers, formatNumber } from "@/lib/mockData";
import LiveStreamPlayer from "@/components/LiveStreamPlayer";
import LiveChat from "@/components/LiveChat";
import LiveGifting from "@/components/LiveGifting";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import AuthModal from "@/components/AuthModal";
import { Heart, Users, Share } from "lucide-react";

const LiveStream: React.FC = () => {
  const { userId = "1" } = useParams<{ userId?: string }>();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [viewCount, setViewCount] = useState(1245);
  const [likeCount, setLikeCount] = useState(8976);
  const [isLiked, setIsLiked] = useState(false);

  // Find user by ID or default to first user
  const streamer = mockUsers.find(u => u.id === userId) || mockUsers[0];

  // Simulate view count changing
  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount(prev => Math.floor(prev + Math.random() * 10 - 3));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

  const handleFollow = () => {
    setShowAuthModal(true);
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Share functionality coming soon!"
    });
  };

  return (
    <div className="bg-black text-white min-h-screen pb-16 relative">
      <Header onOpenAuth={() => setShowAuthModal(true)} />
      
      <div className="h-full w-full">
        {/* Live Stream Video */}
        <div className="relative h-[calc(100vh-8rem)] w-full">
          <LiveStreamPlayer />
          
          {/* Stream Info Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src={streamer.avatar} 
                  alt={streamer.username}
                  className="w-10 h-10 rounded-full border-2 border-primary" 
                />
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full w-5 h-5 flex items-center justify-center">
                  <span className="text-xs font-bold">LIVE</span>
                </div>
              </div>
              <div className="ml-2">
                <h3 className="font-bold">@{streamer.username}</h3>
                <p className="text-xs text-gray-300">{streamer.name}</p>
              </div>
              <Button 
                className="ml-4 bg-primary hover:bg-primary/90 text-xs h-8 px-3"
                onClick={handleFollow}
              >
                Follow
              </Button>
            </div>
            
            <div className="flex space-x-2">
              <div className="bg-black/50 rounded-full px-3 py-1 flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm">{formatNumber(viewCount)}</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full bg-black/50"
                onClick={handleShare}
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Live Stream Actions */}
          <div className="absolute bottom-4 left-0 right-0 z-10 px-4">
            <div className="flex justify-between items-end">
              <div className="flex-1">
                <LiveGifting />
              </div>
              <button 
                className="ml-2 p-3 rounded-full bg-black/30 animate-pulse"
                onClick={handleLike}
              >
                <Heart 
                  className={`h-8 w-8 ${isLiked ? 'text-primary fill-primary' : ''}`} 
                />
              </button>
            </div>
          </div>
        </div>
        
        {/* Live Chat Section */}
        <LiveChat />
      </div>
      
      <BottomNav />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default LiveStream;
