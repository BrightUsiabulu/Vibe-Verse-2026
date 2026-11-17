
import React from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Users, Video, Hash, Music } from "lucide-react";

interface Strategy {
  title: string;
  description: string;
  successRate: string;
  icon: React.ReactNode;
  tips: string[];
  category: "timing" | "content" | "engagement" | "hashtags";
}

const ViralStrategies: React.FC = () => {
  const strategies: Strategy[] = [
    {
      title: "Optimal Posting Times",
      description: "Post when your audience is most active",
      successRate: "85%",
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      category: "timing",
      tips: ["6-10 PM weekdays", "Weekend afternoons", "Avoid Monday mornings"]
    },
    {
      title: "Hook in First 3 Seconds",
      description: "Capture attention immediately",
      successRate: "78%",
      icon: <Video className="h-5 w-5 text-purple-500" />,
      category: "content",
      tips: ["Ask a question", "Show the result first", "Use surprising visuals"]
    },
    {
      title: "Trending Audio",
      description: "Use popular sounds and music",
      successRate: "92%",
      icon: <Music className="h-5 w-5 text-green-500" />,
      category: "content",
      tips: ["Check trending sounds daily", "Add your unique twist", "Credit original creators"]
    },
    {
      title: "Strategic Hashtags",
      description: "Mix trending and niche hashtags",
      successRate: "70%",
      icon: <Hash className="h-5 w-5 text-yellow-500" />,
      category: "hashtags",
      tips: ["3-5 hashtags max", "Mix big and small tags", "Create branded hashtags"]
    },
    {
      title: "Engage Within 1 Hour",
      description: "Respond to comments quickly",
      successRate: "65%",
      icon: <Users className="h-5 w-5 text-red-500" />,
      category: "engagement",
      tips: ["Reply to all comments", "Ask follow-up questions", "Pin important comments"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "timing": return "bg-blue-500/20 text-blue-400";
      case "content": return "bg-purple-500/20 text-purple-400";
      case "engagement": return "bg-red-500/20 text-red-400";
      case "hashtags": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="pt-4">
      <div className="mb-4">
        <h3 className="text-lg font-bold flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-primary" />
          Viral Strategies
        </h3>
        <p className="text-sm text-gray-400">Proven tactics to increase your content's viral potential</p>
      </div>

      <div className="space-y-4">
        {strategies.map((strategy, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-800">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                {strategy.icon}
                <div className="ml-3">
                  <h4 className="font-semibold">{strategy.title}</h4>
                  <p className="text-sm text-gray-400">{strategy.description}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge className={getCategoryColor(strategy.category)}>
                  {strategy.category}
                </Badge>
                <p className="text-sm text-green-400 mt-1">{strategy.successRate} success</p>
              </div>
            </div>

            <div className="space-y-1">
              {strategy.tips.map((tip, tipIndex) => (
                <div key={tipIndex} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  {tip}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViralStrategies;
