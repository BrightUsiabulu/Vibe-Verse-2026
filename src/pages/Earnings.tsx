
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";

const Earnings: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawMethod, setWithdrawMethod] = useState("opay");
  const [processingWithdrawal, setProcessingWithdrawal] = useState(false);
  const { toast } = useToast();

  // Mock data for earnings
  const earningsData = {
    totalBalance: 1250.75,
    pendingBalance: 320.50,
    availableBalance: 930.25,
    
    videoViews: 45600,
    videoEarnings: 785.25,
    
    liveDonations: 350.50,
    
    referralEarnings: 115.00,
    
    history: [
      { id: 1, date: "2025-05-10", amount: 250.00, type: "Withdrawal", status: "Completed", method: "OPay Transfer" },
      { id: 2, date: "2025-05-05", amount: 125.50, type: "Earnings", status: "Completed", source: "Video Views" },
      { id: 3, date: "2025-05-03", amount: 200.00, type: "Earnings", status: "Completed", source: "Live Donations" },
      { id: 4, date: "2025-04-28", amount: 75.25, type: "Withdrawal", status: "Completed", method: "OPay Transfer" },
      { id: 5, date: "2025-04-25", amount: 115.00, type: "Earnings", status: "Completed", source: "Referrals" },
    ]
  };

  const handleWithdrawal = () => {
    const amount = parseFloat(withdrawAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid withdrawal amount.",
        variant: "destructive",
      });
      return;
    }
    
    if (amount > earningsData.availableBalance) {
      toast({
        title: "Insufficient funds",
        description: "You don't have enough available balance for this withdrawal.",
        variant: "destructive",
      });
      return;
    }
    
    setProcessingWithdrawal(true);
    
    // Simulate API call for withdrawal
    setTimeout(() => {
      setProcessingWithdrawal(false);
      setWithdrawAmount("");
      toast({
        title: "Withdrawal requested",
        description: `₦${amount.toFixed(2)} will be transferred to your ${withdrawMethod === "opay" ? "OPay account (8128785691 - Bright Usiabulu)" : withdrawMethod === "bank" ? "bank account" : withdrawMethod === "paypal" ? "PayPal account" : "Stripe account"} within 3-5 business days.`,
      });
    }, 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen pb-20">
      <Header onOpenAuth={() => setShowAuthModal(true)} />
      
      <div className="pt-16 px-4 pb-24">
        <h1 className="text-2xl font-bold mt-4 mb-6">Creator Earnings</h1>
        
        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-xl mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Total Balance</h2>
            <span className="text-sm bg-white/20 px-2 py-1 rounded">Creator</span>
          </div>
          <div className="text-3xl font-bold mb-6">₦{earningsData.totalBalance.toFixed(2)}</div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/70">Available</p>
              <p className="font-semibold">₦{earningsData.availableBalance.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-white/70">Pending</p>
              <p className="font-semibold">₦{earningsData.pendingBalance.toFixed(2)}</p>
            </div>
          </div>
        </Card>
        
        {/* Tabs for different sections */}
        <Tabs defaultValue="withdraw" className="w-full">
          <TabsList className="w-full bg-gray-900 rounded-lg mb-4">
            <TabsTrigger value="withdraw" className="flex-1">Withdraw</TabsTrigger>
            <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
            <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
          </TabsList>
          
          {/* Withdraw Tab */}
          <TabsContent value="withdraw" className="space-y-4">
            <Card className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg mb-4">Withdraw Funds</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₦</span>
                    <Input 
                      type="text"
                      value={withdrawAmount} 
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="pl-8 bg-gray-800 border-gray-700"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Available: ₦{earningsData.availableBalance.toFixed(2)}</p>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Withdrawal Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    <div
                      className={`p-3 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        withdrawMethod === "opay" ? "bg-primary/20 border border-primary" : "bg-gray-800 border border-gray-700"
                      }`}
                      onClick={() => setWithdrawMethod("opay")}
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs">OPay</span>
                    </div>
                    
                    <div
                      className={`p-3 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        withdrawMethod === "bank" ? "bg-primary/20 border border-primary" : "bg-gray-800 border border-gray-700"
                      }`}
                      onClick={() => setWithdrawMethod("bank")}
                    >
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-xs">Bank</span>
                    </div>
                    
                    <div
                      className={`p-3 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        withdrawMethod === "paypal" ? "bg-primary/20 border border-primary" : "bg-gray-800 border border-gray-700"
                      }`}
                      onClick={() => setWithdrawMethod("paypal")}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 5.663a.842.842 0 0 1 .833-.721h4.31c3.315 0 5.68 1.205 6.795 3.491.523 1.07.675 1.956.675 3.151 0 3.73-3.069 6.869-7.528 6.869h-1.73a.431.431 0 0 0-.424.342l-.51 2.335a.48.48 0 0 1-.472.38.453.453 0 0 1-.055.004L7.076 21.338zm8.215-9.903l.004-.18c.014-.62-.012-1.144-.23-1.647-.476-1.116-1.752-1.501-3.345-1.501H9.503l-1.27 6.392h2.058c2.555 0 4.378-1.524 4.981-3.326.035-.11.07-.231.018-.339z"/>
                      </svg>
                      <span className="text-xs">PayPal</span>
                    </div>
                  </div>
                  
                  {withdrawMethod === "opay" && (
                    <div className="mt-2 p-2 bg-primary/10 border border-primary/20 rounded text-xs text-primary">
                      ✓ OPay: 8128785691 - Bright Usiabulu (Default)
                    </div>
                  )}
                </div>
                
                {/* Setup payment method link */}
                <div>
                  <a 
                    href="#" 
                    className="text-sm text-primary underline"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAuthModal(true);
                    }}
                  >
                    Setup or change payment method
                  </a>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!withdrawAmount || processingWithdrawal}
                  onClick={handleWithdrawal}
                >
                  {processingWithdrawal ? "Processing..." : "Withdraw Funds"}
                </Button>

                <div className="text-xs text-gray-400 text-center">
                  Withdrawals typically process in 3-5 business days
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <Card className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg mb-4">Earnings Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-300">Video Views ({earningsData.videoViews.toLocaleString()})</span>
                  <span className="font-medium">${earningsData.videoEarnings.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-300">Live Donations</span>
                  <span className="font-medium">${earningsData.liveDonations.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-300">Referral Program</span>
                  <span className="font-medium">${earningsData.referralEarnings.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between py-2 text-lg">
                  <span>Total</span>
                  <span className="font-bold">${earningsData.totalBalance.toFixed(2)}</span>
                </div>
              </div>
            </Card>
            
            <Card className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg mb-4">Performance Stats</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-400">Total Views</p>
                  <p className="text-xl font-bold">45.6K</p>
                </div>
                
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-400">Avg Revenue/1K Views</p>
                  <p className="text-xl font-bold">$17.22</p>
                </div>
                
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-400">Creator Level</p>
                  <p className="text-xl font-bold">Silver</p>
                </div>
                
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-400">Days Active</p>
                  <p className="text-xl font-bold">73</p>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* History Tab */}
          <TabsContent value="history">
            <Card className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg mb-4">Transaction History</h3>
              
              <div className="space-y-3">
                {earningsData.history.map((transaction) => (
                  <div 
                    key={transaction.id} 
                    className="flex justify-between py-3 border-b border-gray-800 last:border-0"
                  >
                    <div>
                      <p className="font-medium">
                        {transaction.type === "Withdrawal" 
                          ? `Withdrawal to ${transaction.method}` 
                          : `Earnings from ${transaction.source}`
                        }
                      </p>
                      <p className="text-xs text-gray-400">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={transaction.type === "Withdrawal" ? "text-red-400" : "text-green-400"}>
                        {transaction.type === "Withdrawal" ? "-" : "+"}₦{transaction.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400">{transaction.status}</p>
                    </div>
                  </div>
                ))}
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

export default Earnings;
