import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const currentLang = i18n.language;

  const switchLanguage = (newLang: string) => {
    if (currentLang === newLang) {
      return;
    }

    if (newLang === "en") {
      navigate("/");
    } else {
      navigate(`/${newLang}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.work"), href: "#work" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-slate-200 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 z-50"
        >
          Ivan Gonzalez
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-1 text-xs font-bold border border-slate-200 px-2 py-1 rounded cursor-pointer select-none">
            <button
              onClick={() => switchLanguage("en")}
              className={`transition-colors ${
                currentLang === "en"
                  ? "text-slate-900"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              EN
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => switchLanguage("es")}
              className={`transition-colors ${
                currentLang === "es"
                  ? "text-slate-900"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-tight text-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex items-center space-x-3 text-lg font-bold">
                <button
                  onClick={() => {
                    switchLanguage("en");
                    setIsMobileMenuOpen(false);
                  }}
                  className={
                    currentLang === "en" ? "text-slate-900" : "text-slate-300"
                  }
                >
                  EN
                </button>
                <span className="text-slate-200">|</span>
                <button
                  onClick={() => {
                    switchLanguage("es");
                    setIsMobileMenuOpen(false);
                  }}
                  className={
                    currentLang === "es" ? "text-slate-900" : "text-slate-300"
                  }
                >
                  ES
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
