
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";

const PublishButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button 
      className="fixed bottom-20 right-4 rounded-full bg-gradient-to-r from-primary to-purple-600 shadow-lg z-40"
      size="icon"
      onClick={() => navigate('/publish')}
    >
      <Globe className="h-5 w-5" />
    </Button>
  );
};

export default PublishButton;
