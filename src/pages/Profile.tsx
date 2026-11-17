
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { mockUsers, mockVideos } from "@/lib/mockData";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileStats from "@/components/profile/ProfileStats";
import ProfileActions from "@/components/profile/ProfileActions";
import ProfileTabs from "@/components/profile/ProfileTabs";

const Profile: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { userId = "1" } = useParams<{ userId?: string }>();
  
  // Find user by ID or default to first user
  const user = mockUsers.find(u => u.id === userId) || mockUsers[0];
  
  // Get videos by this user
  const userVideos = mockVideos.filter(v => v.userId === user.id);

  return (
    <div className="bg-black text-white min-h-screen pb-16">
      <Header onOpenAuth={() => setShowAuthModal(true)} />
      
      <div className="pt-16 pb-20">
        {/* Profile Components */}
        <ProfileHeader user={user} />
        <ProfileStats 
          followers={user.followers} 
          following={user.following} 
          likes={user.likes} 
        />
        <ProfileActions 
          userId={user.id} 
          onOpenAuth={() => setShowAuthModal(true)} 
        />
        <ProfileTabs videos={userVideos} />
      </div>
      
      <BottomNav />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Profile;
