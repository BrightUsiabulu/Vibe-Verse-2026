
import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, ChartBar, Wallet, Settings, CreditCard, Banknote, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <SidebarProvider>
      <Sidebar className="bg-gray-900 border-r border-gray-800 text-white z-30">
        <SidebarHeader className="p-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center rounded-md">
              <span className="font-bold text-white">V</span>
            </div>
            <span className="text-xl font-bold">VidCraft</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                isActive={activeView === "overview"}
                onClick={() => setActiveView("overview")}
                tooltip="Overview"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Overview</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton 
                isActive={activeView === "analytics"} 
                onClick={() => setActiveView("analytics")}
                tooltip="Analytics"
              >
                <ChartBar className="w-5 h-5" />
                <span>Analytics</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton 
                isActive={activeView === "earnings"} 
                onClick={() => setActiveView("earnings")}
                tooltip="Earnings"
              >
                <Wallet className="w-5 h-5" />
                <span>Earnings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton 
                isActive={activeView === "payments"} 
                onClick={() => setActiveView("payments")}
                tooltip="Payments & Withdrawals"
              >
                <CreditCard className="w-5 h-5" />
                <span>Payments</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          <div className="mt-8">
            <div className="text-xs text-gray-500 uppercase font-semibold px-4 mb-2">Main Navigation</div>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home">
                  <Link to="/">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Discover">
                  <Link to="/discover">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <span>Discover</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Upload">
                  <Link to="/upload">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </svg>
                    <span>Upload</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Profile">
                  <Link to="/profile">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Ads">
                  <Link to="/ads">
                    <Banknote className="w-5 h-5" />
                    <span>Ads</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
        </SidebarContent>
        
        <SidebarFooter className="p-4">
          <div className="border-t border-gray-800 pt-4">
            <Button variant="outline" className="w-full justify-start text-gray-400">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <div className="mt-4 bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center">
                  <span className="font-medium text-white">JD</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-400">Creator</p>
                </div>
                <ArrowDown className="w-4 h-4 ml-auto text-gray-400" />
              </div>
            </div>
          </div>
        </SidebarFooter>
        <SidebarTrigger className="absolute top-4 right-0 transform translate-x-1/2" />
      </Sidebar>
    </SidebarProvider>
  );
};

export default DashboardSidebar;
