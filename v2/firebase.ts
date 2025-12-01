import { FirebaseApp } from "firebase/app";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  AppCheck,
  getToken
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



const isBrowser = typeof window !== "undefined";

let analyticsInstance: Analytics | null = null;
let performanceInstance: ReturnType<typeof getPerformance> | null = null;
let firestoreInstance: Firestore | null = null;
let appCheckInstance: AppCheck | null = null;


export const initFirebaseAnalytics = async (app: FirebaseApp): Promise<void> => {
  const analyticsSupported = await new Promise<boolean>((resolve) => {
    isSupported()
      .then((supported) => resolve(supported))
      .catch(() => resolve(false));
  });
  if (!analyticsInstance && analyticsSupported) {
    analyticsInstance = getAnalytics(app);
  }
};


export const initFirebasePerformance = async (app: FirebaseApp): Promise<void> => {
  if (!performanceInstance) {
    performanceInstance = getPerformance(app);
  }
};

export const initFirebaseAppCheck = async (app: FirebaseApp): Promise<void> => {
  if (!appCheckInstance) {
    appCheckInstance = initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider("6LcFrB0sAAAAAKpBOcUp1_9WZPyN9cxgFm5dqBis"),
      isTokenAutoRefreshEnabled: true,
    });
  }
  try {
    await getToken(appCheckInstance, true);
  } catch (error) {
    console.error("Failed to get App Check token", error);
    throw error;
  }
};

export const initFirebaseFirestore = async (app: FirebaseApp): Promise<void> => {
  if (!firestoreInstance) {
    firestoreInstance = getFirestore(app);
  }
};

export const initFirebase = async (app: FirebaseApp): Promise<void> => {
  if (!isBrowser) {
    return null
  }
  await initFirebaseAppCheck(app);
  await initFirebaseAnalytics(app);
  await initFirebasePerformance(app);
  await initFirebaseFirestore(app);
}

type ContactFormPayload = {
  name: string;
  email: string;
  message: string;
};

export const saveContactForm = async (payload: ContactFormPayload) => {
  if (!firestoreInstance) {
    throw new Error("Firestore is not available");
  }
  return addDoc(collection(firestoreInstance, "form"), {
    ...payload,
    source: "v2",
    createdAt: serverTimestamp(),
  });
};

export const logErrorEvent = async (
  name: string,
  details?: Record<string, unknown>
) => {
  if (analyticsInstance) {
    logEvent(analyticsInstance, name, details);
  }
};
