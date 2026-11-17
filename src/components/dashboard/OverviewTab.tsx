
import React from "react";
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { performanceData, userActivityData, revenueSourcesData, COLORS } from "@/utils/dashboardData";

const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Revenue</CardTitle>
            <CardDescription className="text-gray-400">Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$2,415.50</div>
            <p className="text-green-500 text-sm mt-1">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Users</CardTitle>
            <CardDescription className="text-gray-400">Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,642</div>
            <p className="text-green-500 text-sm mt-1">+22.4% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">App Downloads</CardTitle>
            <CardDescription className="text-gray-400">Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5,789</div>
            <p className="text-green-500 text-sm mt-1">+8.7% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription className="text-gray-400">Views, Revenue, and Users growth</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
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
                  dataKey="views" 
                  stroke="#8884d8" 
                  fillOpacity={1} 
                  fill="url(#colorViews)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#82ca9d" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription className="text-gray-400">Active vs Inactive Users</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="h-64 w-full">
              <ChartContainer config={{}} className="h-full">
                <PieChart>
                  <Pie
                    data={userActivityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {userActivityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 text-white">
          <CardHeader>
            <CardTitle>Revenue Sources</CardTitle>
            <CardDescription className="text-gray-400">Distribution by source</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="h-64 w-full">
              <ChartContainer config={{}} className="h-full">
                <PieChart>
                  <Pie
                    data={revenueSourcesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {revenueSourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
