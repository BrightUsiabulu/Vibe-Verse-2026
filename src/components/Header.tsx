
import React from "react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  onOpenAuth?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Show different headers based on current route
  if (currentPath === "/") {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
        <div className="flex justify-center items-center h-14 border-b border-gray-800">
          <div className="flex text-white space-x-6">
            <button className="text-gray-500">Following</button>
            <button className="font-bold relative">
              For You
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (currentPath === "/discover") {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
        <div className="flex justify-between items-center h-14 border-b border-gray-800 px-4">
          <h1 className="text-lg font-bold">Discover</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 rounded-full py-2 pl-10 pr-4 text-sm w-full"
            />
            <div className="absolute left-3 top-2">
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (currentPath === "/upload") {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
        <div className="flex justify-between items-center h-14 border-b border-gray-800 px-4">
          <button className="text-white">Cancel</button>
          <h1 className="text-lg font-bold">Upload</h1>
          <button className="text-primary font-medium">Next</button>
        </div>
      </div>
    );
  }

  // Default header for other pages including profile
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md">
      <div className="flex justify-between items-center h-14 border-b border-gray-800 px-4">
        <h1 className="text-lg font-bold">VibeVerse</h1>
        <button 
          onClick={onOpenAuth} 
          className="text-primary font-medium"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
