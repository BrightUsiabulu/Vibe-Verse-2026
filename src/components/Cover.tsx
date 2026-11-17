
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Cover: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative h-[60vh] overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-vibeverse-pink/30 via-black/70 to-black"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 text-white text-center">
            <span className="text-vibeverse-pink">Vibe</span>Verse
          </h1>
          <p className="text-white/80 text-center mb-6 max-w-md">
            Share your moments, discover trending content, and earn from your creativity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button 
              className="bg-vibeverse-pink hover:bg-vibeverse-pink/90"
              onClick={() => navigate("/discover")}
            >
              Explore Content
            </Button>
            <Button 
              variant="outline" 
              className="border-vibeverse-pink text-white hover:bg-vibeverse-pink/20"
              onClick={() => navigate("/upload")}
            >
              Create Now
            </Button>
          </div>
          
          <div className="mt-12 flex gap-6 justify-center">
            <Stat value="2M+" label="Users" />
            <div className="h-8 w-px bg-white/20"></div>
            <Stat value="500K" label="Videos" />
            <div className="h-8 w-px bg-white/20"></div>
            <Stat value="$1.2M" label="Earnings" />
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-vibeverse-pink blur-3xl opacity-20"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary blur-3xl opacity-20"></div>
    </div>
  );
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  return (
    <div className="text-center">
      <p className="text-white font-bold text-xl">{value}</p>
      <p className="text-white/60 text-xs">{label}</p>
    </div>
  );
};

export default Cover;
