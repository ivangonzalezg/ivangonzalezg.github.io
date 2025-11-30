import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProp } from "./components/ValueProp";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";
import "./i18n";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
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
}

export default App;
