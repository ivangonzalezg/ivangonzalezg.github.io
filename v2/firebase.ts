import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6VOW0xiQKy045ebpzQvPkXi82JcAdzsM",
  authDomain: "portfolio-81a40.firebaseapp.com",
  projectId: "portfolio-81a40",
  storageBucket: "portfolio-81a40.appspot.com",
  messagingSenderId: "669625052970",
  appId: "1:669625052970:web:cce31e4d4286d05a5c7853",
  measurementId: "G-RB0VRZTYLJ",
};

let analyticsInstance: Analytics | null = null;

export const initFirebaseAnalytics = async (): Promise<void> => {
  if (typeof window === "undefined") {
    return;
  }

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

  const analyticsSupported = await new Promise<boolean>((resolve) => {
    isSupported()
      .then((supported) => resolve(supported))
      .catch(() => resolve(false));
  });

  if (!analyticsInstance && analyticsSupported) {
    analyticsInstance = getAnalytics(app);
  }
};
