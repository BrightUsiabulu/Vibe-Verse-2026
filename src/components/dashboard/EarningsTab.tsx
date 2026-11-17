
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart as BarChartIcon, PiggyBank } from "lucide-react";
import { performanceData } from "@/utils/dashboardData";

interface EarningsTabProps {
  setActiveView: (view: string) => void;
}

const EarningsTab: React.FC<EarningsTabProps> = ({ setActiveView }) => {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Total Revenue</h2>
          <span className="text-sm bg-white/20 px-2 py-1 rounded">App Owner</span>
        </div>
        <div className="text-3xl font-bold mb-6">$24,350.75</div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-white/70">Available</p>
            <p className="font-semibold">$18,930.25</p>
          </div>
          <div>
            <p className="text-white/70">Pending</p>
            <p className="font-semibold">$5,420.50</p>
          </div>
          <div>
            <p className="text-white/70">This Month</p>
            <p className="font-semibold">+$3,840.15</p>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Earnings Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-primary w-4 h-4" />
                  <span className="text-gray-300">Subscriptions</span>
                </div>
                <span className="font-medium">$11,785.25</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <BarChartIcon className="text-green-500 w-4 h-4" />
                  <span className="text-gray-300">In-App Purchases</span>
                </div>
                <span className="font-medium">$8,250.50</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <PiggyBank className="text-yellow-500 w-4 h-4" />
                  <span className="text-gray-300">Advertisement Revenue</span>
                </div>
                <span className="font-medium">$4,315.00</span>
              </div>
              
              <div className="flex justify-between py-2 text-lg">
                <span>Total</span>
                <span className="font-bold">$24,350.75</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
            <CardDescription className="text-gray-400">Last 7 months</CardDescription>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }} 
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => [`$${value}`, 'Revenue']}
                />
                <Bar dataKey="revenue" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-gray-800">
              <div>
                <p className="font-medium">App Store Revenue</p>
                <p className="text-xs text-gray-400">2025-05-15</p>
              </div>
              <div className="text-right">
                <p className="text-green-400">+$1,250.00</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-800">
              <div>
                <p className="font-medium">Google Play Revenue</p>
                <p className="text-xs text-gray-400">2025-05-14</p>
              </div>
              <div className="text-right">
                <p className="text-green-400">+$980.50</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-800">
              <div>
                <p className="font-medium">Ad Network Payout</p>
                <p className="text-xs text-gray-400">2025-05-10</p>
              </div>
              <div className="text-right">
                <p className="text-green-400">+$645.25</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-800">
              <div>
                <p className="font-medium">Withdrawal to Bank</p>
                <p className="text-xs text-gray-400">2025-05-05</p>
              </div>
              <div className="text-right">
                <p className="text-red-400">-$5,000.00</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full mt-6 bg-primary hover:bg-primary/90"
            onClick={() => setActiveView("payments")}
          >
            Withdraw Funds
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EarningsTab;
