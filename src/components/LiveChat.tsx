
import React, { useState, useEffect, useRef } from "react";
import { mockUsers } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Gift, Award } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

interface LiveMessage {
  id: string;
  userId: string;
  username: string;
  userAvatar: string;
  message: string;
  isGift?: boolean;
  giftName?: string;
  giftValue?: number;
  isReward?: boolean;
  rewardName?: string;
}

const mockMessages: LiveMessage[] = [
  {
    id: "1",
    userId: "2",
    username: mockUsers[1]?.username || "user1",
    userAvatar: mockUsers[1]?.avatar || "",
    message: "Hello everyone! 👋"
  },
  {
    id: "2",
    userId: "3",
    username: mockUsers[2]?.username || "user2",
    userAvatar: mockUsers[2]?.avatar || "",
    message: "Awesome stream today!"
  },
  {
    id: "3",
    userId: "4",
    username: mockUsers[3]?.username || "user3",
    userAvatar: mockUsers[3]?.avatar || "",
    message: "Can you show us around?",
  },
  {
    id: "4",
    userId: "5",
    username: mockUsers[4]?.username || "user4",
    userAvatar: mockUsers[4]?.avatar || "",
    isGift: true,
    giftName: "Rose",
    giftValue: 10,
    message: "sent a Rose!"
  }
];

const gifts = [
  { id: "1", name: "Rose", value: 10, icon: "🌹" },
  { id: "2", name: "Diamond", value: 50, icon: "💎" },
  { id: "3", name: "Crown", value: 100, icon: "👑" },
  { id: "4", name: "Heart", value: 5, icon: "❤️" },
  { id: "5", name: "Star", value: 25, icon: "⭐" },
  { id: "6", name: "Trophy", value: 200, icon: "🏆" }
];

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<LiveMessage[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add random messages periodically to simulate live chat
  useEffect(() => {
    const randomMessages = [
      "Amazing stream!",
      "Love your content!",
      "First time here, great content!",
      "Where are you from?",
      "Can you give a shoutout?",
      "How long are you streaming today?",
      "What's your favorite song?",
      "Do you stream daily?",
      "You're so talented!",
      "I just followed you!"
    ];

    const randomGifts = [
      { name: "Rose", value: 10 },
      { name: "Heart", value: 5 },
      { name: "Star", value: 25 }
    ];

    const interval = setInterval(() => {
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
      const isGift = Math.random() > 0.8; // 20% chance of being a gift
      
      const newMsg: LiveMessage = {
        id: Date.now().toString(),
        userId: randomUser.id,
        username: randomUser.username,
        userAvatar: randomUser.avatar,
        message: isGift 
          ? "sent a gift!" 
          : randomMessages[Math.floor(Math.random() * randomMessages.length)]
      };

      if (isGift) {
        const randomGift = randomGifts[Math.floor(Math.random() * randomGifts.length)];
        newMsg.isGift = true;
        newMsg.giftName = randomGift.name;
        newMsg.giftValue = randomGift.value;
        newMsg.message = `sent a ${randomGift.name}!`;
      }

      setMessages(prev => [...prev, newMsg]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() === "") return;
    
    const newMsg: LiveMessage = {
      id: Date.now().toString(),
      userId: "1", // Current user
      username: "You",
      userAvatar: mockUsers[0]?.avatar || "",
      message: newMessage
    };
    
    setMessages(prev => [...prev, newMsg]);
    setNewMessage("");
  };

  const handleSendGift = (gift: typeof gifts[0]) => {
    const newMsg: LiveMessage = {
      id: Date.now().toString(),
      userId: "1", // Current user
      username: "You",
      userAvatar: mockUsers[0]?.avatar || "",
      message: `sent a ${gift.name}!`,
      isGift: true,
      giftName: gift.name,
      giftValue: gift.value
    };
    
    setMessages(prev => [...prev, newMsg]);
  };

  return (
    <div className="bg-black border-t border-gray-800 h-48">
      <div className="p-2 h-32 overflow-y-auto hide-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2 flex items-start">
            <img 
              src={msg.userAvatar} 
              alt={msg.username}
              className="w-6 h-6 rounded-full mr-2"
            />
            <div>
              <span className="text-xs font-bold mr-2">{msg.username}</span>
              {msg.isGift ? (
                <span className="text-xs bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
                  {msg.message} <span className="text-lg">{
                    gifts.find(g => g.name === msg.giftName)?.icon || '🎁'
                  }</span>
                </span>
              ) : (
                <span className="text-xs text-gray-200">{msg.message}</span>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="flex items-center p-2 border-t border-gray-800">
        <Input
          placeholder="Say something..."
          className="flex-1 bg-gray-800 border-gray-700 text-white"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-1">
              <Gift className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2 bg-gray-900 border-gray-800 text-white">
            <h4 className="font-bold text-sm mb-2">Send a gift</h4>
            <div className="grid grid-cols-3 gap-2">
              {gifts.map((gift) => (
                <Button 
                  key={gift.id}
                  variant="ghost" 
                  className="flex flex-col items-center p-2 hover:bg-gray-800"
                  onClick={() => handleSendGift(gift)}
                >
                  <span className="text-2xl mb-1">{gift.icon}</span>
                  <span className="text-xs">{gift.name}</span>
                  <span className="text-xs text-primary">{gift.value} 💎</span>
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        
        <Button type="submit" size="icon" className="ml-1">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default LiveChat;
