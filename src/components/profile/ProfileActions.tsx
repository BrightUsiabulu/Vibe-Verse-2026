
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, Share2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ProfileActionsProps {
  userId: string;
  onOpenAuth: () => void;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ userId, onOpenAuth }) => {
  const shareProfile = () => {
    const shareUrl = `${window.location.origin}/profile/${userId}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Check out this profile on Vibe Verse',
        text: 'Join me on Vibe Verse!',
        url: shareUrl,
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers without native share
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          toast({
            description: "Profile link copied to clipboard!",
            duration: 3000,
          });
        })
        .catch(err => console.error('Could not copy text: ', err));
    }
  };
  
  return (
    <div className="flex space-x-3 mt-4 w-full px-4">
      <Button 
        className="flex-1 bg-primary hover:bg-primary/90"
        onClick={onOpenAuth}
      >
        Follow
      </Button>
      <Link to={`/live/${userId}`} className="start-live-button">
        <Button variant="outline" className="border-gray-700 flex items-center">
          <Video className="mr-2 h-4 w-4" />
          Go Live
        </Button>
      </Link>
      <Button variant="outline" className="border-gray-700" onClick={shareProfile}>
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ProfileActions;
