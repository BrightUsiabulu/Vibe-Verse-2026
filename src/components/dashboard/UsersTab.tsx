
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { userRetentionData } from "@/utils/dashboardData";

const UsersTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12,435</div>
            <p className="text-green-500 text-sm mt-1">+18.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Daily Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4,872</div>
            <p className="text-green-500 text-sm mt-1">+12.8% from last week</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Revenue Per User</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$1.96</div>
            <p className="text-green-500 text-sm mt-1">+0.3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Top Users by Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-800 rounded-full flex items-center justify-center">
                  <span className="font-medium text-white">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-gray-400">Premium since Feb 2025</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-right">$245.50</p>
                <p className="text-xs text-gray-400">Lifetime value</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                  <span className="font-medium text-white">AS</span>
                </div>
                <div>
                  <p className="font-medium">Alice Smith</p>
                  <p className="text-xs text-gray-400">Premium since Mar 2025</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-right">$198.75</p>
                <p className="text-xs text-gray-400">Lifetime value</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center">
                  <span className="font-medium text-white">RJ</span>
                </div>
                <div>
                  <p className="font-medium">Robert Johnson</p>
                  <p className="text-xs text-gray-400">Premium since Jan 2025</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-right">$187.20</p>
                <p className="text-xs text-gray-400">Lifetime value</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center">
                  <span className="font-medium text-white">EW</span>
                </div>
                <div>
                  <p className="font-medium">Emma Williams</p>
                  <p className="text-xs text-gray-400">Premium since Apr 2025</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-right">$156.90</p>
                <p className="text-xs text-gray-400">Lifetime value</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center">
                  <span className="font-medium text-white">MB</span>
                </div>
                <div>
                  <p className="font-medium">Michael Brown</p>
                  <p className="text-xs text-gray-400">Premium since Feb 2025</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-right">$142.35</p>
                <p className="text-xs text-gray-400">Lifetime value</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>User Retention</CardTitle>
          <CardDescription className="text-gray-400">Weekly retention rate</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userRetentionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="week" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }} 
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => [`${value}%`, 'Retention']}
                />
                <Bar dataKey="retention" fill="#00C49F" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersTab;
