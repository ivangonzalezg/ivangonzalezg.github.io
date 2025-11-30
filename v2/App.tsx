import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProp } from "./components/ValueProp";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import "./i18n";

const PortfolioContent: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  if (lang === "en") {
    return <Navigate to="/" replace />;
  }

  const targetLang = lang || "en";

  const isValidLang = targetLang === "en" || targetLang === "es";

  useEffect(() => {
    if (isValidLang && i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [targetLang, isValidLang, i18n]);

  if (!isValidLang) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioContent />} />
        <Route path="/:lang" element={<PortfolioContent />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
