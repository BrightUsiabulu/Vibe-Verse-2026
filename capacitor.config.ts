
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.5ac85a8d88ca474f8fc4c30f36851103',
  appName: 'Vibe Verse',
  webDir: 'dist',
  server: {
    url: 'https://5ac85a8d-88ca-474f-8fc4-c30f36851103.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#000000",
      splashFullScreen: true,
      splashImmersive: true
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  },
  android: {
    backgroundColor: "#000000"
  },
  ios: {
    backgroundColor: "#000000",
    contentInset: "always"
  }
};

export default config;
