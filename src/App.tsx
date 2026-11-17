
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Discover from "./pages/Discover";
import Earnings from "./pages/Earnings";
import Ads from "./pages/Ads";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LiveStream from "./pages/LiveStream";
import PublishInfo from "./pages/PublishInfo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile/:userId?" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Profile />} />
          <Route path="/live/:userId?" element={<LiveStream />} />
          <Route path="/publish" element={<PublishInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
