
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Video, formatNumber } from "@/lib/mockData";
import VideoPlayer from "./VideoPlayer";
import { Heart, MessageCircle, Share, Music } from "lucide-react";

interface VideoCardProps {
  video: Video;
  isActive: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isActive }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(video.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="relative h-full w-full snap-start">
      <VideoPlayer videoUrl={video.videoUrl} autoplay={true} inView={isActive} />
      
      {/* User info overlay */}
      <div className="absolute bottom-20 left-4 z-10 max-w-[80%] animate-fade-in">
        <Link to={`/profile/${video.userId}`} className="flex items-center mb-2">
          <img 
            src={video.userAvatar} 
            alt={video.username}
            className="w-12 h-12 rounded-full border-2 border-white object-cover" 
          />
          <div className="ml-2">
            <h4 className="font-bold text-lg flex items-center">
              @{video.username} 
              <span className="ml-1 text-primary">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
            </h4>
            <p className="text-sm text-gray-300">{video.caption}</p>
          </div>
        </Link>

        <div className="flex items-center text-sm text-gray-300 mt-1">
          <Music size={16} className="mr-1" />
          <p className="truncate">{video.songName}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
        <button 
          className="flex flex-col items-center"
          onClick={handleLike}
        >
          <div className={`w-12 h-12 rounded-full bg-black/30 flex items-center justify-center ${liked ? 'text-primary animate-heart' : ''}`}>
            <Heart size={28} fill={liked ? "currentColor" : "none"} />
          </div>
          <span className="text-xs mt-1">{formatNumber(likes)}</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
            <MessageCircle size={28} />
          </div>
          <span className="text-xs mt-1">{formatNumber(video.comments)}</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center">
            <Share size={28} />
          </div>
          <span className="text-xs mt-1">{formatNumber(video.shares)}</span>
        </button>

        <Link to={`/profile/${video.userId}`} className="block">
          <div className="w-12 h-12 relative">
            <img 
              src={video.userAvatar} 
              alt={video.username} 
              className="w-full h-full rounded-full border-2 border-primary object-cover"
            />
            <div className="absolute -bottom-1 left-0 right-0 mx-auto w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
              +
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
