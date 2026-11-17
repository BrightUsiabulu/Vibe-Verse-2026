import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Chrome, Github, Play, Globe, Package } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const PublishInfo: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white pb-16">
      <Header />
      <div className="pt-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 mt-4">Publish Your App</h1>
        <p className="text-gray-400 mb-6">
          Distribute Vibe Verse across various platforms to reach your audience wherever they are.
        </p>

        <Tabs defaultValue="ios" className="w-full">
          <TabsList className="w-full bg-gray-900 p-1 rounded-lg mb-6">
            <TabsTrigger value="ios" className="flex-1">
              <Apple className="mr-2 h-4 w-4" /> iOS
            </TabsTrigger>
            <TabsTrigger value="android" className="flex-1">
              <Play className="mr-2 h-4 w-4" /> Android
            </TabsTrigger>
            <TabsTrigger value="web" className="flex-1">
              <Chrome className="mr-2 h-4 w-4" /> Web
            </TabsTrigger>
            <TabsTrigger value="other" className="flex-1">
              <Package className="mr-2 h-4 w-4" /> Other
            </TabsTrigger>
          </TabsList>

          {/* iOS App Store */}
          <TabsContent value="ios" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>iOS App Store</CardTitle>
                <CardDescription className="text-gray-400">
                  Publish Vibe Verse to Apple's App Store.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal ml-4 space-y-3 text-gray-300">
                  <li>
                    <span className="font-medium text-white">Create an Apple Developer Account</span>
                    <p className="text-sm">Register at developer.apple.com ($99/year)</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Prepare your iOS build</span>
                    <p className="text-sm">Run the following commands:</p>
                    <pre className="bg-gray-800 p-2 rounded text-xs mt-1 overflow-x-auto">
                      npm run build<br />
                      npx cap sync ios<br />
                      npx cap open ios
                    </pre>
                  </li>
                  <li>
                    <span className="font-medium text-white">Configure in Xcode</span>
                    <p className="text-sm">Set up signing certificates, app icons, and app metadata</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Create App Store listing</span>
                    <p className="text-sm">Log into App Store Connect and create a new app entry</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Submit for review</span>
                    <p className="text-sm">Archive and upload your build, then submit for Apple's review</p>
                  </li>
                </ol>
                <div className="flex gap-2">
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="https://developer.apple.com/app-store/submitting/" target="_blank" rel="noopener noreferrer">
                      <Apple className="mr-2 h-4 w-4" />
                      Apple Developer Guide
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Google Play Store */}
          <TabsContent value="android" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Google Play Store</CardTitle>
                <CardDescription className="text-gray-400">
                  Publish Vibe Verse to Google Play Store.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal ml-4 space-y-3 text-gray-300">
                  <li>
                    <span className="font-medium text-white">Create a Google Play Console account</span>
                    <p className="text-sm">Register at play.google.com/console ($25 one-time fee)</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Prepare your Android build</span>
                    <p className="text-sm">Run the following commands:</p>
                    <pre className="bg-gray-800 p-2 rounded text-xs mt-1 overflow-x-auto">
                      npm run build<br />
                      npx cap sync android<br />
                      npx cap open android
                    </pre>
                  </li>
                  <li>
                    <span className="font-medium text-white">Generate signed APK/Bundle</span>
                    <p className="text-sm">Use Android Studio to create a signed release bundle or APK</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Create Play Store listing</span>
                    <p className="text-sm">Prepare screenshots, descriptions, and promotional materials</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Submit for review</span>
                    <p className="text-sm">Upload your bundle/APK and submit for Google's review</p>
                  </li>
                </ol>
                <div className="flex gap-2">
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="https://play.google.com/console/about/" target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Google Play Console
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Web - Chrome Web Store, etc */}
          <TabsContent value="web" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Web & PWA</CardTitle>
                <CardDescription className="text-gray-400">
                  Publish as a PWA or to browser extension stores.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-medium">Progressive Web App (PWA)</h3>
                <p className="text-sm text-gray-300">
                  Vibe Verse is already configured as a PWA! Users can install it directly from the browser.
                </p>
                
                <div className="rounded-md bg-gray-800 p-3 mt-2">
                  <p className="text-sm mb-2">To deploy your PWA, you can:</p>
                  <ol className="list-decimal ml-4 space-y-2 text-sm text-gray-300">
                    <li>Use Lovable's publishing feature</li>
                    <li>Deploy to Netlify, Vercel, or similar platforms</li>
                    <li>Host on your own server</li>
                  </ol>
                </div>
                
                <h3 className="text-lg font-medium mt-4">Chrome Web Store</h3>
                <ol className="list-decimal ml-4 space-y-3 text-gray-300">
                  <li>
                    <span className="font-medium text-white">Create Chrome Developer account</span>
                    <p className="text-sm">Register and pay one-time $5 fee</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Prepare as Chrome extension</span>
                    <p className="text-sm">Create a manifest.json specifically for Chrome Web Store</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Package your PWA</span>
                    <p className="text-sm">Zip your build folder with the Chrome extension manifest</p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Submit for review</span>
                    <p className="text-sm">Upload to the Chrome Developer Dashboard</p>
                  </li>
                </ol>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="https://developer.chrome.com/docs/webstore/publish/" target="_blank" rel="noopener noreferrer">
                      <Chrome className="mr-2 h-4 w-4" />
                      Chrome Web Store
                    </a>
                  </Button>
                  <Button variant="outline" className="text-white border-gray-700" asChild>
                    <a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      PWA Documentation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other platforms */}
          <TabsContent value="other" className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Other Platforms</CardTitle>
                <CardDescription className="text-gray-400">
                  Distribute Vibe Verse through additional channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-6">
                  {/* Amazon AppStore */}
                  <div>
                    <h3 className="text-lg font-medium flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.93 1.78h.22a.88.88 0 0 1 .1.15c0 .22 0 .45-.1.67-.16.5-.46.96-.87 1.36-.86.71-1.5 1.22-1.91 1.5-.15.11-.35.06-.44-.1-.08-.13-.04-.31.08-.4.41-.28 1.03-.77 1.87-1.46.4-.42.67-.87.84-1.35a.96.96 0 0 0 .1-.37zm-.11 4.29c1.14 0 2.25.3 3.32.89 1.08.59 1.94 1.32 2.59 2.2.65.9.98 1.94.98 3.1 0 1.1-.3 2.12-.91 3.05-.61.93-1.38 1.65-2.3 2.14-.93.5-1.99.74-3.18.74-1.17 0-2.23-.25-3.17-.74-.92-.5-1.7-1.21-2.31-2.14-.6-.93-.91-1.95-.91-3.05 0-1.17.33-2.2.98-3.1.65-.88 1.52-1.61 2.59-2.2 1.05-.59 2.15-.89 3.32-.89zM8.5 18.38c1.07.66 2.24 1.12 3.5 1.34 1.25.22 2.59.24 4 .04.61-.08 1.15-.19 1.6-.32.46-.14.84-.29 1.14-.44v.9c0 .15-.05.31-.15.46-.1.15-.25.25-.42.29-.6.15-1.23.28-1.9.38-.67.1-1.37.17-2.1.22-.73.04-1.44.07-2.14.07-3.26 0-5.82-.45-7.7-1.36-.18-.09-.32-.24-.4-.43a.979.979 0 0 1-.08-.5v-.69c1.18.26 2.55.4 4.12.4h.53zM19.53 22h.22c.08 0 .14.07.14.15v.23c0 .46-.09.86-.27 1.22-.17.35-.43.64-.77.86-.34.22-.76.34-1.26.36-.3.01-.46-.24-.32-.5.06-.11.14-.2.23-.29a3.5 3.5 0 0 0 .23-.31c.38-.54.66-1.07.83-1.6.03-.1.15-.17.26-.13.16.05.53.01.71.01zM12 7.36c-.77 0-1.41.19-1.92.57a3.7 3.7 0 0 0-1.14 1.35c-.26.55-.4 1.13-.4 1.75 0 .74.19 1.4.57 1.99.38.59.91 1.07 1.6 1.43.68.36 1.47.54 2.36.54.89 0 1.67-.18 2.35-.54.69-.36 1.22-.84 1.6-1.43.38-.59.57-1.25.57-1.99 0-.62-.14-1.2-.4-1.75a3.7 3.7 0 0 0-1.14-1.35c-.51-.38-1.15-.57-1.92-.57h-.13z" />
                      </svg>
                      Amazon AppStore
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Submit your Android build to reach Amazon Fire devices.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 text-white border-gray-700" asChild>
                      <a href="https://developer.amazon.com/apps-and-games" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                  
                  {/* Microsoft Store */}
                  <div>
                    <h3 className="text-lg font-medium flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
                      </svg>
                      Microsoft Store
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Package your PWA as a Microsoft Store app for Windows.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 text-white border-gray-700" asChild>
                      <a href="https://developer.microsoft.com/en-us/microsoft-store/" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                  
                  {/* GitHub Releases */}
                  <div>
                    <h3 className="text-lg font-medium flex items-center">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub Releases
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Distribute builds directly through GitHub releases for sideloading.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 text-white border-gray-700" asChild>
                      <a href="https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository" target="_blank" rel="noopener noreferrer">
                        Learn More
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <BottomNav />
    </div>
  );
};

export default PublishInfo;
