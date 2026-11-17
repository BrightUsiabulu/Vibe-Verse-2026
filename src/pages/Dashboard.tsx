
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import DashboardSidebar from "@/components/DashboardSidebar";

// Import refactored components
import OverviewTab from "@/components/dashboard/OverviewTab";
import AnalyticsTab from "@/components/dashboard/AnalyticsTab";
import EarningsTab from "@/components/dashboard/EarningsTab";
import PaymentsTab from "@/components/dashboard/PaymentsTab";
import UsersTab from "@/components/dashboard/UsersTab";

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState("overview");
  
  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <DashboardSidebar activeView={activeView} setActiveView={setActiveView} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onOpenAuth={() => {}} />
        
        <div className="flex-1 overflow-y-auto px-4 pt-16 pb-20">
          <h1 className="text-2xl font-bold text-white mt-6 mb-6">Dashboard</h1>
          
          <Tabs defaultValue="overview" value={activeView} onValueChange={setActiveView} className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>

            <TabsContent value="analytics">
              <AnalyticsTab />
            </TabsContent>

            <TabsContent value="earnings">
              <EarningsTab setActiveView={setActiveView} />
            </TabsContent>

            <TabsContent value="payments">
              <PaymentsTab />
            </TabsContent>

            <TabsContent value="users">
              <UsersTab />
            </TabsContent>
          </Tabs>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Dashboard;
