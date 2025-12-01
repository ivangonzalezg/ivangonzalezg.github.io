import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  AppCheck,
} from "firebase/app-check";
import {
  getAnalytics,
  isSupported,
  Analytics,
  logEvent,
} from "firebase/analytics";
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

const isBrowser = typeof window !== "undefined";

let analyticsInstance: Analytics | null = null;
let performanceInstance: ReturnType<typeof getPerformance> | null = null;
let firestoreInstance: Firestore | null = null;
let appCheckInstance: AppCheck | null = null;

const getFirebaseApp = (): FirebaseApp => {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
};


export const initFirebaseAnalytics = async (): Promise<void> => {
  if (!isBrowser) {
    return;
  }

  const analyticsSupported = await new Promise<boolean>((resolve) => {
    isSupported()
      .then((supported) => resolve(supported))
      .catch(() => resolve(false));
  });

  if (!analyticsInstance && analyticsSupported) {
    const app = getFirebaseApp();
    analyticsInstance = getAnalytics(app);
  }
};


export const initFirebasePerformance = (): Promise<void> => {
  if (!isBrowser) {
    return
  }

  if (!performanceInstance) {
    const app = getFirebaseApp();
    performanceInstance = getPerformance(app);

  }
};

export const initFirebaseAppCheck = (): Promise<void> => {
  if (!isBrowser) {
    return
  }

  if (import.meta.env.DEV) {
    // @ts-ignore
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
  }

  if (!appCheckInstance) {
    const app = getFirebaseApp();
    appCheckInstance = initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider("6Lc-RR0sAAAAAB99eyBGzQ5wF_RofX1NckHve7lF"),
      isTokenAutoRefreshEnabled: true,
    });
  }
};

export const getFirestoreDb = async (): Promise<Firestore> => {
  if (!isBrowser) {
    return null
  }

  if (!firestoreInstance) {
    const app = getFirebaseApp()
    firestoreInstance = getFirestore(app);
  }

  return firestoreInstance;
};

type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export const saveContactForm = async (payload: ContactFormPayload) => {
  const db = await getFirestoreDb();
  if (!db) {
    throw new Error("Firestore is not available");
  }
  return addDoc(collection(db, "form"), {
    ...payload,
    source: "v2",
    createdAt: serverTimestamp(),
  });
};

export const logErrorEvent = async (
  name: string,
  details?: Record<string, unknown>
) => {
  if (!analyticsInstance) {
    await initFirebaseAnalytics();
  }
  if (analyticsInstance) {
    try {
      logEvent(analyticsInstance, name, details);
    } catch {
    }
  }
};
