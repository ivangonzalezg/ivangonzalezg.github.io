import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import {
  getFirestore,
  Firestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

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
let performanceInstance: ReturnType<typeof getPerformance> | null = null;
let firestoreInstance: Firestore | null = null;

const getFirebaseApp = (): FirebaseApp => {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
};

export const initFirebaseAnalytics = async (): Promise<void> => {
  if (typeof window === "undefined") {
    return;
  }

  const app = getFirebaseApp();

  const analyticsSupported = await new Promise<boolean>((resolve) => {
    isSupported()
      .then((supported) => resolve(supported))
      .catch(() => resolve(false));
  });

  if (!analyticsInstance && analyticsSupported) {
    analyticsInstance = getAnalytics(app);
  }

  if (!performanceInstance) {
    try {
      performanceInstance = getPerformance(app);
    } catch {
    }
  }
};

export const getFirestoreDb = (): Firestore | null => {
  if (typeof window === "undefined") {
    return null;
  }

  if (!firestoreInstance) {
    firestoreInstance = getFirestore(getFirebaseApp());
  }

  return firestoreInstance;
};

type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export const saveContactForm = async (payload: ContactFormPayload) => {
  const db = getFirestoreDb();
  if (!db) {
    throw new Error("Firestore is not available");
  }
  return addDoc(collection(db, "forms"), {
    ...payload,
    source: "v2",
    createdAt: serverTimestamp(),
  });
};
