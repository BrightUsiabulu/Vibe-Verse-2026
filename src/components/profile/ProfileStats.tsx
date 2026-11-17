
import React from "react";
import { formatNumber } from "@/lib/mockData";

interface ProfileStatsProps {
  followers: number;
  following: number;
  likes: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ followers, following, likes }) => {
  return (
    <div className="flex justify-center space-x-6 mt-4">
      <div className="text-center">
        <div className="font-bold">{formatNumber(following)}</div>
        <div className="text-sm text-gray-400">Following</div>
      </div>
      <div className="text-center">
        <div className="font-bold">{formatNumber(followers)}</div>
        <div className="text-sm text-gray-400">Followers</div>
      </div>
      <div className="text-center">
        <div className="font-bold">{formatNumber(likes)}</div>
        <div className="text-sm text-gray-400">Likes</div>
      </div>
    </div>
  );
};

export default ProfileStats;
