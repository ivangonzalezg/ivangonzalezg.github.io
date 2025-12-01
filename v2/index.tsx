import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  initFirebaseAnalytics,
  initFirebasePerformance,
  initFirebaseAppCheck,
  initFirebaseFirestore,
} from "./firebase";
import { initializeApp } from "firebase/app";
import "./index.css";

if (import.meta.env.DEV) {
  // @ts-ignore
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

const firebaseConfig = {
  apiKey: "AIzaSyD6VOW0xiQKy045ebpzQvPkXi82JcAdzsM",
  authDomain: "portfolio-81a40.firebaseapp.com",
  projectId: "portfolio-81a40",
  storageBucket: "portfolio-81a40.appspot.com",
  messagingSenderId: "669625052970",
  appId: "1:669625052970:web:cce31e4d4286d05a5c7853",
  measurementId: "G-RB0VRZTYLJ",
};

const app = initializeApp(firebaseConfig);

initFirebaseAppCheck(app);
initFirebaseAnalytics(app);
initFirebasePerformance(app);
initFirebaseFirestore(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
