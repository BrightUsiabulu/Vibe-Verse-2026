
import React from "react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contentPerformance, userGrowthData } from "@/utils/dashboardData";

const AnalyticsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Content Performance</CardTitle>
          <CardDescription className="text-gray-400">Top performing videos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={contentPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }} 
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="views" stackId="a" fill="#8884d8" />
                <Bar dataKey="shares" stackId="a" fill="#82ca9d" />
                <Bar dataKey="comments" stackId="a" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Age 18-24</span>
                  <span className="text-sm text-gray-400">42%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Age 25-34</span>
                  <span className="text-sm text-gray-400">35%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Age 35-44</span>
                  <span className="text-sm text-gray-400">15%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Age 45+</span>
                  <span className="text-sm text-gray-400">8%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '8%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Audience Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>United States</span>
                <span className="text-sm bg-gray-800 px-2 py-1 rounded">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>United Kingdom</span>
                <span className="text-sm bg-gray-800 px-2 py-1 rounded">18%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Canada</span>
                <span className="text-sm bg-gray-800 px-2 py-1 rounded">12%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Australia</span>
                <span className="text-sm bg-gray-800 px-2 py-1 rounded">9%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Germany</span>
                <span className="text-sm bg-gray-800 px-2 py-1 rounded">7%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Others</span>
                <span className="text-sm bg-gray-800 px-2 py-1 rounded">9%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
          <CardDescription className="text-gray-400">Weekly User Growth</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00C49F" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }} 
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#00C49F" 
                  fillOpacity={1} 
                  fill="url(#colorUsers)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsTab;
