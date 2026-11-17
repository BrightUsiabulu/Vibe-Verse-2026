
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Plus, Heart, User, Wallet } from "lucide-react";

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/discover", icon: Search, label: "Discover" },
    { path: "/upload", icon: Plus, label: "Upload", highlight: true },
    { path: "/notifications", icon: Heart, label: "Inbox" },
    { path: "/earnings", icon: Wallet, label: "Earnings" },
    { path: "/profile", icon: User, label: "Me" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-t border-gray-800">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center ${
              item.highlight 
                ? "text-white" 
                : currentPath === item.path 
                  ? "text-white" 
                  : "text-gray-500"
            }`}
          >
            {item.highlight ? (
              <div className="w-12 h-12 bg-gradient-to-tr from-primary to-secondary rounded-md flex items-center justify-center -mt-5">
                <item.icon size={24} />
              </div>
            ) : (
              <item.icon size={24} />
            )}
            <span className={`text-xs mt-1 ${!item.highlight && "-mb-1"}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
