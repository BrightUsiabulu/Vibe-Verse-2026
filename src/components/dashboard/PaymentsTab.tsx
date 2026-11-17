
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Wallet } from "lucide-react";

const PaymentsTab: React.FC = () => {
  const { toast } = useToast();
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("opay");

  const handleWithdraw = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid withdrawal amount",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Withdrawal initiated",
      description: `₦${withdrawAmount} will be transferred to your ${selectedMethod === "opay" ? "OPay account (8128785691)" : 
                    selectedMethod === "bank" ? "bank account" : 
                    selectedMethod === "paypal" ? "PayPal" : "Stripe account"} within 3-5 business days.`,
    });
    
    setWithdrawAmount("");
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Withdraw Funds</CardTitle>
          <CardDescription className="text-gray-400">Transfer your app revenue to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₦</span>
                <Input
                  type="number"
                  className="w-full pl-8 bg-gray-800 border border-gray-700 text-white"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">Available: ₦18,930.25</p>
            </div>
            
            <div>
              <label className="block text-sm text-gray-300 mb-1">Withdrawal Method</label>
              <Select value={selectedMethod} onValueChange={setSelectedMethod}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select withdrawal method" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="opay">OPay - 8128785691 (Bright Usiabulu)</SelectItem>
                  <SelectItem value="bank">Bank Account</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              className="w-full bg-primary hover:bg-primary/90" 
              onClick={handleWithdraw}
            >
              Withdraw Funds
            </Button>

            <div className="text-xs text-gray-400 text-center">
              Withdrawals typically process in 3-5 business days
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 border border-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">OPay</p>
                  <p className="text-sm text-gray-400">8128785691 - Bright Usiabulu</p>
                </div>
              </div>
              <div className="bg-green-500/20 text-green-500 px-2 py-1 text-xs rounded">Default</div>
            </div>
            
            <div className="flex justify-between items-center p-3 border border-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-800 p-2 rounded">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Bank Account</p>
                  <p className="text-sm text-gray-400">**** 5678</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Set Default</Button>
            </div>
            
            <Button variant="outline" className="w-full">
              Add New Payment Method
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Withdrawal History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-gray-800">
              <div>
                <p className="font-medium">Withdrawal to OPay</p>
                <p className="text-xs text-gray-400">2025-05-05</p>
              </div>
              <div className="text-right">
                <p className="text-red-400">-₦5,000.00</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-800">
              <div>
                <p className="font-medium">Withdrawal to OPay</p>
                <p className="text-xs text-gray-400">2025-04-10</p>
              </div>
              <div className="text-right">
                <p className="text-red-400">-₦3,500.00</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-800">
              <div>
                <p className="font-medium">Withdrawal to Bank Account</p>
                <p className="text-xs text-gray-400">2025-03-15</p>
              </div>
              <div className="text-right">
                <p className="text-red-400">-₦2,800.00</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsTab;
