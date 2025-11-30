import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  initFirebaseAnalytics,
  initFirebasePerformance,
  initFirebaseAppCheck,
} from "./firebase";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

initFirebaseAppCheck();
initFirebaseAnalytics();
initFirebasePerformance();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
