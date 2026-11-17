
interface CapacitorPlugins {
  App: {
    addListener: (eventName: string, callback: (data: any) => void) => void;
  };
  [key: string]: any;
}

interface CapacitorGlobal {
  Plugins: CapacitorPlugins;
}

interface Window {
  Capacitor: CapacitorGlobal;
}
