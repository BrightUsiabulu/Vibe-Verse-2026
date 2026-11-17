
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form schema for ad creation
const adFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  budget: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Budget must be a positive number.",
  }),
  targetAudience: z.string().min(1, {
    message: "Please select a target audience.",
  }),
});

const Ads: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Mock data for existing ads
  const myAds = [
    {
      id: 1,
      title: "Summer Collection",
      status: "Active",
      budget: 50.00,
      spent: 12.75,
      impressions: 2450,
      clicks: 137,
      ctr: 5.6,
      createdAt: "2025-05-15",
    },
    {
      id: 2,
      title: "Product Launch",
      status: "Paused",
      budget: 100.00,
      spent: 75.50,
      impressions: 8920,
      clicks: 412,
      ctr: 4.6,
      createdAt: "2025-05-10",
    },
  ];

  // Form setup
  const form = useForm<z.infer<typeof adFormSchema>>({
    resolver: zodResolver(adFormSchema),
    defaultValues: {
      title: "",
      description: "",
      budget: "",
      targetAudience: "",
    },
  });

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedMedia(url);
    }
  };

  const onSubmit = (values: z.infer<typeof adFormSchema>) => {
    if (!uploadedMedia) {
      toast({
        title: "Media required",
        description: "Please upload an image or video for your ad.",
        variant: "destructive",
      });
      return;
    }

    // Simulate ad creation success
    toast({
      title: "Ad created successfully",
      description: "Your ad campaign has been submitted for review.",
    });

    // Reset form
    form.reset();
    setUploadedMedia(null);
  };

  return (
    <div className="bg-black text-white min-h-screen pb-20">
      <Header onOpenAuth={() => setShowAuthModal(true)} />
      
      <div className="pt-16 px-4 pb-24">
        <h1 className="text-2xl font-bold mt-4 mb-6">Ad Manager</h1>
        
        {/* Ad Dashboard */}
        <Tabs defaultValue="create" className="w-full">
          <TabsList className="w-full bg-gray-900 rounded-lg mb-4">
            <TabsTrigger value="create" className="flex-1">Create Ad</TabsTrigger>
            <TabsTrigger value="myads" className="flex-1">My Ads</TabsTrigger>
            <TabsTrigger value="earnings" className="flex-1">Ad Earnings</TabsTrigger>
          </TabsList>
          
          {/* Create Ad Tab */}
          <TabsContent value="create" className="space-y-4">
            <Card className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Create New Ad Campaign</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ad Title</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter a catchy title..." 
                            className="bg-gray-800 border-gray-700"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ad Description</FormLabel>
                        <FormControl>
                          <textarea 
                            className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white resize-none"
                            rows={3}
                            placeholder="Describe your ad..."
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="space-y-2">
                    <Label htmlFor="media">Ad Media (Image or Video)</Label>
                    {uploadedMedia ? (
                      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                        {uploadedMedia.includes('video') ? (
                          <video 
                            src={uploadedMedia} 
                            className="w-full h-full object-contain" 
                            controls
                          />
                        ) : (
                          <img 
                            src={uploadedMedia} 
                            alt="Ad preview" 
                            className="w-full h-full object-contain" 
                          />
                        )}
                        <Button 
                          type="button" 
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setUploadedMedia(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div 
                        className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center cursor-pointer bg-gray-800 hover:bg-gray-800/80"
                        onClick={() => document.getElementById('adMedia')?.click()}
                      >
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mt-2 text-sm text-gray-400">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">JPG, PNG, GIF or MP4 (max. 50MB)</p>
                      </div>
                    )}
                    <input
                      id="adMedia"
                      type="file"
                      className="hidden"
                      accept="image/*,video/*"
                      onChange={handleMediaUpload}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Daily Budget ($)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              min="5"
                              step="0.01"
                              className="bg-gray-800 border-gray-700"
                              placeholder="50.00"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-xs text-gray-400">
                            Minimum budget: $5/day
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Audience</FormLabel>
                          <FormControl>
                            <select 
                              className="w-full h-10 rounded-md bg-gray-800 border border-gray-700 px-3 py-2"
                              {...field}
                            >
                              <option value="">Select audience</option>
                              <option value="13-17">Teens (13-17)</option>
                              <option value="18-24">Young Adults (18-24)</option>
                              <option value="25-34">Adults (25-34)</option>
                              <option value="35-44">Middle Age (35-44)</option>
                              <option value="45+">45 and above</option>
                              <option value="all">All ages</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Create Ad Campaign
                  </Button>
                </form>
              </Form>
            </Card>
          </TabsContent>
          
          {/* My Ads Tab */}
          <TabsContent value="myads">
            <Card className="bg-gray-900 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-medium mb-4">My Ad Campaigns</h3>
              
              <div className="space-y-4">
                {myAds.map((ad) => (
                  <div 
                    key={ad.id} 
                    className="bg-gray-800 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{ad.title}</h4>
                        <p className="text-sm text-gray-400">Created on {ad.createdAt}</p>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        ad.status === "Active" ? "bg-green-500/20 text-green-400" : 
                        ad.status === "Paused" ? "bg-yellow-500/20 text-yellow-400" : 
                        "bg-red-500/20 text-red-400"
                      }`}>
                        {ad.status}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                      <div className="bg-gray-700/50 p-2 rounded">
                        <p className="text-gray-400">Budget</p>
                        <p className="font-medium">${ad.budget.toFixed(2)}</p>
                      </div>
                      <div className="bg-gray-700/50 p-2 rounded">
                        <p className="text-gray-400">Spent</p>
                        <p className="font-medium">${ad.spent.toFixed(2)}</p>
                      </div>
                      <div className="bg-gray-700/50 p-2 rounded">
                        <p className="text-gray-400">Impressions</p>
                        <p className="font-medium">{ad.impressions.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-700/50 p-2 rounded">
                        <p className="text-gray-400">Clicks</p>
                        <p className="font-medium">{ad.clicks.toLocaleString()} ({ad.ctr}%)</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" className="border-gray-700">
                        Edit
                      </Button>
                      {ad.status === "Active" ? (
                        <Button size="sm" variant="outline" className="border-gray-700">
                          Pause
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="border-gray-700">
                          Resume
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="border-gray-700 ml-auto">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
          
          {/* Ad Earnings Tab */}
          <TabsContent value="earnings">
            <Card className="bg-gray-900 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-medium mb-4">Ad Revenue</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">This Month</p>
                  <p className="text-2xl font-bold">$137.82</p>
                  <p className="text-xs text-green-400">+12.5% from last month</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Total Earnings</p>
                  <p className="text-2xl font-bold">$1,245.36</p>
                  <p className="text-xs text-gray-400">Lifetime</p>
                </div>
              </div>
              
              <h4 className="font-medium mb-2">Revenue Sources</h4>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <span>Video Ad Views</span>
                  </div>
                  <span>$94.65</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>Banner Impressions</span>
                  </div>
                  <span>$32.17</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Ad Clicks</span>
                  </div>
                  <span>$11.00</span>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Performance Tips</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Target users aged 18-24 to increase engagement by up to 30%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Post ads between 6-9 PM to reach more active users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Create shorter ads (15-30 sec) for higher completion rates</span>
                  </li>
                </ul>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Ads;
