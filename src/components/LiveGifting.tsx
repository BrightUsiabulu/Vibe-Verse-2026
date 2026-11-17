
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";

interface GiftItem {
  id: string;
  name: string;
  icon: string;
  value: number;
}

const gifts: GiftItem[] = [
  { id: "1", name: "Rose", icon: "🌹", value: 5 },
  { id: "2", name: "Heart", icon: "❤️", value: 10 },
  { id: "3", name: "Star", icon: "⭐", value: 25 },
  { id: "4", name: "Diamond", icon: "💎", value: 50 },
  { id: "5", name: "Crown", icon: "👑", value: 100 },
  { id: "6", name: "Unicorn", icon: "🦄", value: 200 },
  { id: "7", name: "Rocket", icon: "🚀", value: 300 },
  { id: "8", name: "Fire", icon: "🔥", value: 25 }
];

const LiveGifting: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleSendGift = (gift: GiftItem) => {
    toast({
      title: `Gift Sent!`,
      description: `You sent a ${gift.name} worth ${gift.value} coins`,
    });
    setOpen(false);

    // Create and display a floating gift animation
    createFloatingGift(gift.icon);
  };

  // Create a floating gift that animates up and fades out
  const createFloatingGift = (icon: string) => {
    const giftElement = document.createElement("div");
    giftElement.textContent = icon;
    giftElement.className = "text-4xl fixed z-50 animate-float-up";
    giftElement.style.left = `${Math.random() * 80 + 10}%`;
    giftElement.style.bottom = "20%";
    
    document.body.appendChild(giftElement);
    
    // Remove the element after animation completes
    setTimeout(() => {
      document.body.removeChild(giftElement);
    }, 2000);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
        >
          <Gift className="mr-2 h-4 w-4" /> Send Gifts
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-3 bg-gray-900 border-gray-800 text-white">
        <h3 className="font-bold mb-2">Send a gift</h3>
        <div className="grid grid-cols-4 gap-2">
          {gifts.map((gift) => (
            <Button
              key={gift.id}
              variant="outline"
              className="flex flex-col items-center p-2 h-auto border-gray-700 hover:bg-gray-800"
              onClick={() => handleSendGift(gift)}
            >
              <span className="text-2xl mb-1">{gift.icon}</span>
              <span className="text-xs whitespace-nowrap">{gift.name}</span>
              <span className="text-xs text-primary">{gift.value} 💎</span>
            </Button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button className="bg-primary hover:bg-primary/90">
            Buy More Coins
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LiveGifting;
