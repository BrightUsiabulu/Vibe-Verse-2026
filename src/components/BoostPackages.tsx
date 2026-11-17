
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Video, Star, Crown, Zap } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface BoostPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  color: string;
}

const BoostPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages: BoostPackage[] = [
    {
      id: "basic",
      name: "Basic Boost",
      price: "₦5,000",
      features: ["100 Views", "10 Likes", "2 Comments", "Basic Analytics"],
      icon: <Zap className="h-5 w-5" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "premium",
      name: "Premium Boost",
      price: "₦15,000",
      features: ["500 Views", "50 Likes", "10 Comments", "Advanced Analytics", "Hashtag Optimization"],
      icon: <Star className="h-5 w-5" />,
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "viral",
      name: "Viral Boost",
      price: "₦30,000",
      features: ["2,000 Views", "200 Likes", "50 Comments", "Trending Placement", "Viral Strategy", "24/7 Support"],
      icon: <Crown className="h-5 w-5" />,
      color: "from-gradient-to-r from-primary to-purple-600"
    }
  ];

  const handleBoostPurchase = (packageName: string, price: string) => {
    toast({
      title: "Payment Instructions",
      description: `To purchase ${packageName} (${price}), send payment to OPay: 8128785691 (Bright Usiabulu). Include your username in the payment note.`,
    });
    setSelectedPackage(packageName);
  };

  return (
    <div className="pt-4">
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Boost Your Content</h3>
        <p className="text-sm text-gray-400 mb-3">Get more views, likes, and engagement with our boost packages</p>
        
        {/* Payment Info */}
        <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg p-3 mb-4 border border-primary/30">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">₦</span>
            </div>
            <div>
              <p className="font-semibold text-primary">OPay Payment</p>
              <p className="text-sm text-gray-300">8128785691 - Bright Usiabulu</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">Include your username in payment note for faster processing</p>
        </div>
      </div>

      <div className="space-y-3">
        {packages.map((pkg) => (
          <div key={pkg.id} className="relative bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-primary/50 transition-colors">
            {pkg.popular && (
              <Badge className="absolute -top-2 left-4 bg-primary text-white border-none">
                Most Popular
              </Badge>
            )}
            
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <div className={`w-10 h-10 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center mr-3`}>
                  {pkg.icon}
                </div>
                <div>
                  <h4 className="font-bold">{pkg.name}</h4>
                  <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <ul className="space-y-1">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => handleBoostPurchase(pkg.name, pkg.price)}
            >
              Choose Package
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoostPackages;
