
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root element
createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for PWA support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(error => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}

// Handle mobile app deep links
document.addEventListener('deviceready', () => {
  // Handle deep links if we're in Capacitor/Cordova environment
  if (window.Capacitor && window.Capacitor.Plugins) {
    const { App } = window.Capacitor.Plugins;
    App.addListener('appUrlOpen', (data: { url: string }) => {
      // Example: vibeverse://profile/123
      const slug = data.url.split('vibeverse://').pop();
      if (slug) {
        window.location.pathname = slug;
      }
    });
  }
}, false);
