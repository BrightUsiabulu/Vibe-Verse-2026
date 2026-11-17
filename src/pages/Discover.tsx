
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { mockVideos, mockUsers } from "@/lib/mockData";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";

const Discover: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [query, setQuery] = useState("");
  
  // Filter videos and users based on search query
  const filteredVideos = mockVideos.filter(video => 
    video.caption.toLowerCase().includes(query.toLowerCase())
  );
  
  const filteredUsers = mockUsers.filter(user => 
    user.username.toLowerCase().includes(query.toLowerCase()) ||
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen pb-16">
      <Header onOpenAuth={() => setShowAuthModal(true)} />
      
      {/* Search Bar */}
      <div className="pt-16 px-4">
        <div className="flex items-center bg-gray-900 rounded-full px-4 py-2 mt-4 mb-4">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-400 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <Input 
            placeholder="Search videos, users, or sounds..."
            className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Tabs Content */}
      <div className="px-4">
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="w-full bg-transparent border-b border-gray-800 rounded-none p-0">
            <TabsTrigger value="trending" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3">
              Trending
            </TabsTrigger>
            <TabsTrigger value="users" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3">
              Users
            </TabsTrigger>
            <TabsTrigger value="sounds" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3">
              Sounds
            </TabsTrigger>
          </TabsList>
          
          {/* Trending Videos Tab */}
          <TabsContent value="trending" className="mt-4">
            <div className="grid grid-cols-2 gap-3">
              {filteredVideos.map((video) => (
                <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="aspect-[9/16] relative">
                    <img 
                      src={video.userAvatar} 
                      alt={video.caption} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 flex items-center">
                      <svg width="16" height="16" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-white ml-1 text-xs">{video.likes}K</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="truncate text-sm">{video.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Users Tab */}
          <TabsContent value="users" className="mt-4">
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-3">
                  <img 
                    src={user.avatar} 
                    alt={user.username} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <p className="font-semibold">@{user.username}</p>
                      {user.verified && (
                        <span className="ml-1 text-primary">
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{user.name}</p>
                  </div>
                  <Button
                    onClick={() => setShowAuthModal(true)}
                    size="sm"
                    className="rounded-full bg-primary hover:bg-primary/90"
                  >
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Sounds Tab */}
          <TabsContent value="sounds" className="mt-4">
            <div className="space-y-4">
              {Array(5).fill(0).map((_, index) => (
                <div key={index} className="flex items-center bg-gray-900 rounded-lg p-3">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                    <svg width="24" height="24" fill="currentColor" className="text-primary" viewBox="0 0 24 24">
                      <path d="M9 18V5l12-2v13M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm12-5c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Trending Sound #{index + 1}</div>
                    <div className="text-xs text-gray-400">Used in 10.{index}K videos</div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Discover;

