
import React from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatNumber } from "@/lib/mockData";

interface Video {
  id: string;
  userId: string;
  videoUrl: string;
  likes: number;
}

interface ProfileTabsProps {
  videos: Video[];
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ videos }) => {
  return (
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
            {videos.map((video) => (
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
  );
};

export default ProfileTabs;
