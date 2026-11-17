
import React from "react";
import { UserType } from "../../types/user";
import ProfileContextMenu from "./ProfileContextMenu";

interface ProfileHeaderProps {
  user: UserType;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center px-4 pt-4 relative">
      <ProfileContextMenu />
      
      <div className="relative">
        <img 
          src={user.avatar} 
          alt={user.username} 
          className="w-24 h-24 rounded-full border-2 border-white"
        />
        {user.verified && (
          <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      
      <h2 className="text-xl font-bold mt-2">@{user.username}</h2>
      <h3 className="text-gray-300">{user.name}</h3>
    </div>
  );
};

export default ProfileHeader;
