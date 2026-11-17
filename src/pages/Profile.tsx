
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { mockUsers, mockVideos, formatNumber } from "@/lib/mockData";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";

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
        {/* Profile Header */}
        <div className="flex flex-col items-center px-4 pt-4">
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
          
          {/* Stats */}
          <div className="flex justify-center space-x-6 mt-4">
            <div className="text-center">
              <div className="font-bold">{formatNumber(user.following)}</div>
              <div className="text-sm text-gray-400">Following</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{formatNumber(user.followers)}</div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{formatNumber(user.likes)}</div>
              <div className="text-sm text-gray-400">Likes</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-3 mt-4 w-full px-4">
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={() => setShowAuthModal(true)}
            >
              Follow
            </Button>
            <Button variant="outline" className="border-gray-700">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Videos Tabs */}
        <div className="mt-6">
          <Tabs defaultValue="videos">
            <TabsList className="w-full bg-transparent border-b border-gray-800">
              <TabsTrigger value="videos" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mx-auto">
                  <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 1a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1H7z" />
                  <path d="M7 14a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H7zM15 14a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2z" />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="liked" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mx-auto">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="bookmarks" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mx-auto">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="mt-4">
              <div className="grid grid-cols-3 gap-1 px-1">
                {userVideos.map((video) => (
                  <Link key={video.id} to={`/`} className="aspect-[9/16] bg-gray-900 relative overflow-hidden">
                    <video 
                      src={video.videoUrl} 
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                    />
                    <div className="absolute bottom-1 left-1 flex items-center">
                      <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                        <path d="M5.34 3.31a1 1 0 01.35-.06h13a3 3 0 013 3v12a3 3 0 01-3 3h-13a1 1 0 01-.7-.29l-4-4a1 1 0 010-1.42l4-4a1 1 0 01.7-.29h13a1 1 0 001-1v-2a1 1 0 00-1-1h-13a1 1 0 01-.7-.29l-4-4a1.06 1.06 0 01-.21-.33 1 1 0 01-.09-.38 1 1 0 01.29-.7l4-4z" />
                      </svg>
                      <span className="text-xs ml-1">{formatNumber(video.likes)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="liked" className="mt-4 px-4 text-center">
              <div className="py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">This user's liked videos are private</h3>
                <p className="text-gray-400 mt-2">Videos liked by this user are currently not visible</p>
              </div>
            </TabsContent>
            
            <TabsContent value="bookmarks" className="mt-4 px-4 text-center">
              <div className="py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Bookmarks are private</h3>
                <p className="text-gray-400 mt-2">Bookmarked videos are only visible to the user</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <BottomNav />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Profile;
