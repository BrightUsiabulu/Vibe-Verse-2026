
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNav: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-40">
      <div className="flex justify-around py-2">
        <Link 
          to="/" 
          className={`flex flex-col items-center w-1/5 ${path === "/" ? "text-primary" : "text-gray-400"}`}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="text-[10px] mt-1">Home</span>
        </Link>
        
        <Link 
          to="/discover" 
          className={`flex flex-col items-center w-1/5 ${path === "/discover" ? "text-primary" : "text-gray-400"}`}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span className="text-[10px] mt-1">Discover</span>
        </Link>
        
        <Link 
          to="/live/1" 
          className={`flex flex-col items-center w-1/5 ${path.includes("/live") ? "text-primary" : "text-gray-400"}`}
        >
          <div className="relative">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center">
              LIVE
            </span>
          </div>
          <span className="text-[10px] mt-1">Live</span>
        </Link>
        
        <Link 
          to="/upload" 
          className={`flex flex-col items-center w-1/5 ${path === "/upload" ? "text-primary" : "text-gray-400"}`}
        >
          <div className="rounded-md bg-gradient-to-r from-[#ff2a6d] to-[#fa7e1e] text-white p-1">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <span className="text-[10px] mt-1">Create</span>
        </Link>
        
        <Link 
          to="/profile" 
          className={`flex flex-col items-center w-1/5 ${path === "/profile" ? "text-primary" : "text-gray-400"}`}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="text-[10px] mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
