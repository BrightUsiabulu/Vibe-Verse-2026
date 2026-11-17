
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import AuthModal from "@/components/AuthModal";

const Upload: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please select a video file.",
        variant: "destructive",
      });
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No video selected",
        description: "Please select a video to upload.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    // Mock upload process
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Upload successful!",
        description: "Your video has been uploaded.",
      });
      setSelectedFile(null);
      setPreview(null);
      setCaption("");
    }, 2000);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header onOpenAuth={() => setShowAuthModal(true)} />

      <div className="pt-20 pb-24 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">Upload Video</h1>

        <div className="flex flex-col items-center">
          <div 
            className="w-full aspect-[9/16] max-w-xs bg-vibeverse-gray rounded-lg mb-4 flex items-center justify-center overflow-hidden"
            onClick={triggerFileInput}
          >
            {preview ? (
              <video 
                src={preview} 
                className="w-full h-full object-cover" 
                controls
              />
            ) : (
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-2 bg-vibeverse-dark rounded-full flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">
                  Tap to select video<br />
                  <span className="text-gray-500 text-xs">MP4 or WebM</span>
                </p>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="w-full max-w-md mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Caption</label>
              <textarea 
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full bg-vibeverse-gray border border-gray-700 rounded-md p-3 text-white resize-none"
                placeholder="Describe your video..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Sound</label>
              <div className="flex items-center bg-vibeverse-gray border border-gray-700 rounded-md p-3">
                <div className="mr-3">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm">Original sound</div>
                  <div className="text-xs text-gray-400">Use original sound from video</div>
                </div>
                <div>
                  <Button size="sm" variant="outline" className="border-gray-700">
                    Change
                  </Button>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!selectedFile || uploading}
              onClick={handleUpload}
            >
              {uploading ? "Uploading..." : "Post"}
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default Upload;
