
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-vibeverse-dark border-gray-800 sm:max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome to VibeVerse</h2>
        
        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Username, email or phone number" 
                  className="bg-vibeverse-gray border-gray-700"
                />
              </div>
              <div>
                <Input 
                  type="password" 
                  placeholder="Password"
                  className="bg-vibeverse-gray border-gray-700"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Log In
              </Button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Forgot password?
              </p>
            </form>
          </TabsContent>
          
          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Phone number or email" 
                  className="bg-vibeverse-gray border-gray-700"
                />
              </div>
              <div>
                <Input 
                  type="password" 
                  placeholder="Password"
                  className="bg-vibeverse-gray border-gray-700" 
                />
              </div>
              <div>
                <Input 
                  placeholder="Nickname" 
                  className="bg-vibeverse-gray border-gray-700"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Create Account
              </Button>
              <p className="text-center text-xs text-gray-400 mt-4">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t border-gray-800">
          <h3 className="text-center text-sm mb-4">Continue with</h3>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="bg-vibeverse-gray border-gray-700">
              <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
              </svg>
              Facebook
            </Button>
            <Button variant="outline" className="bg-vibeverse-gray border-gray-700">
              <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="bg-vibeverse-gray border-gray-700">
              <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
              Twitter
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
