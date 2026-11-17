
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Video, Zap } from "lucide-react";
import ViralStrategies from "./ViralStrategies";
import BoostPackages from "./BoostPackages";

interface TrendTopic {
  name: string;
  count: string;
  growth: string;
  isHot: boolean;
}

interface CreatorTip {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CreatorInsights: React.FC = () => {
  const trendingTopics: TrendTopic[] = [
    { name: "#dance", count: "10.2B", growth: "+15%", isHot: true },
    { name: "#tutorial", count: "8.7B", growth: "+28%", isHot: true },
    { name: "#comedy", count: "7.4B", growth: "+10%", isHot: false },
    { name: "#cooking", count: "5.1B", growth: "+22%", isHot: true },
    { name: "#fitness", count: "4.9B", growth: "+8%", isHot: false },
  ];

  const creatorTips: CreatorTip[] = [
    {
      title: "Consistent Posting",
      description: "Post 1-3 videos daily to increase visibility on the platform.",
      icon: <Video className="h-5 w-5 text-primary" />
    },
    {
      title: "Trending Sounds",
      description: "Videos using trending sounds get 14x more engagement.",
      icon: <TrendingUp className="h-5 w-5 text-primary" />
    },
    {
      title: "Collaborations",
      description: "Creator collabs can boost your follower count by up to 25%.",
      icon: <Users className="h-5 w-5 text-primary" />
    }
  ];

  return (
    <div className="bg-black text-white">
      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="w-full bg-transparent border-b border-gray-800 rounded-none p-0">
          <TabsTrigger value="trending" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 text-xs">
            Trending
          </TabsTrigger>
          <TabsTrigger value="strategies" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 text-xs">
            Viral Tips
          </TabsTrigger>
          <TabsTrigger value="boost" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 text-xs">
            <Zap className="mr-1 h-3 w-3" />
            Boost
          </TabsTrigger>
          <TabsTrigger value="tips" className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none py-3 text-xs">
            Tips
          </TabsTrigger>
        </TabsList>
        
        {/* Trending Topics Tab */}
        <TabsContent value="trending" className="mt-4">
          <div className="space-y-4">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-900 rounded-lg p-3">
                <div className="flex items-center">
                  <span className="text-lg font-bold mr-2">{topic.name}</span>
                  {topic.isHot && (
                    <Badge className="bg-gradient-to-r from-[#ff2a6d] to-[#fa7e1e] text-white border-none">
                      Hot 🔥
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm text-gray-400">Views: {topic.count}</span>
                  <span className="text-sm text-green-500">{topic.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Viral Strategies Tab */}
        <TabsContent value="strategies" className="mt-4">
          <ViralStrategies />
        </TabsContent>

        {/* Boost Packages Tab */}
        <TabsContent value="boost" className="mt-4">
          <BoostPackages />
        </TabsContent>
        
        {/* Creator Tips Tab */}
        <TabsContent value="tips" className="mt-4">
          <div className="space-y-4">
            {creatorTips.map((tip, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  {tip.icon}
                  <h3 className="text-lg font-bold ml-2">{tip.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreatorInsights;
