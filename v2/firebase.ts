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
  if (!isBrowser) {
    return;
  }

  const analyticsSupported = await new Promise<boolean>((resolve) => {
    isSupported()
      .then((supported) => resolve(supported))
      .catch(() => resolve(false));
  });

  if (!analyticsInstance && analyticsSupported) {
    analyticsInstance = getAnalytics(app);
  }
};


export const initFirebasePerformance = (app: FirebaseApp): Promise<void> => {
  if (!isBrowser) {
    return
  }

  if (!performanceInstance) {
    performanceInstance = getPerformance(app);

  }
};

export const initFirebaseAppCheck = (app: FirebaseApp): Promise<void> => {
  if (!isBrowser) {
    return
  }

  if (!appCheckInstance) {
    appCheckInstance = initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider("6Lc-RR0sAAAAAB99eyBGzQ5wF_RofX1NckHve7lF"),
      isTokenAutoRefreshEnabled: true,
    });
    getToken(appCheckInstance).then(token => console.log("token", token.token)).catch(error => console.error(error))
  }
};

export const initFirebaseFirestore = async (app: FirebaseApp): Promise<Firestore> => {
  if (!isBrowser) {
    return null
  }

  if (!firestoreInstance) {
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
  if (!analyticsInstance) {
    return
  }
  if (analyticsInstance) {
    try {
      logEvent(analyticsInstance, name, details);
    } catch {
    }
  }
};
