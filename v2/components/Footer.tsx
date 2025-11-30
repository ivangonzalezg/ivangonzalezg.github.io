import React, { useState, FormEvent, useCallback } from "react";
import {
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  initFirebaseAnalytics,
  saveContactForm,
  logErrorEvent,
} from "../firebase";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (formState === "submitting") {
        return;
      }
      const form = e.currentTarget;
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      if (!name || !email || !message) {
        return;
      }
      setFormState("submitting");
      try {
        await initFirebaseAnalytics();
        await saveContactForm({ name, email, message });
        setFormState("success");
        form.reset();
      } catch (error) {
        console.error("Failed to submit contact form", error);
        await logErrorEvent("contact_form_error", {
          message: error instanceof Error ? error.message : "unknown_error",
        });
        setFormState("error");
      } finally {
        setTimeout(() => setFormState("idle"), 3000);
      }
    },
    [formState]
  );

  return (
    <footer
      id="contact"
      className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-slate-200 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left Column: Context & Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              {t("footer.title")}
            </h2>
            <p className="text-slate-600 text-lg font-light max-w-md mb-8">
              {t("footer.subtitle")}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {t("footer.direct_email")}
                </h4>
                <a
                  href="mailto:contacto@ivangonzalez.co"
                  className="text-xl font-medium text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  contacto@ivangonzalez.co
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  {t("footer.social_networks")}
                </h4>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/ivangonzalezg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-500 hover:text-slate-900 transition-colors group"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ivangonzalezgrc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-500 hover:text-indigo-600 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {t("footer.form_title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-slate-500"
                  >
                    {t("footer.label_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white border border-slate-200 p-3 text-sm outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all rounded-sm placeholder:text-slate-300"
                    placeholder="Jane Doe"
                    disabled={formState === "submitting"}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-slate-500"
                  >
                    {t("footer.label_email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white border border-slate-200 p-3 text-sm outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all rounded-sm placeholder:text-slate-300"
                    placeholder="jane@company.com"
                    disabled={formState === "submitting"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  {t("footer.label_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-white border border-slate-200 p-3 text-sm outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all rounded-sm placeholder:text-slate-300 resize-none"
                  disabled={formState === "submitting"}
                  placeholder="Tell me about your engineering challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState !== "idle"}
                className={`w-full py-4 px-6 rounded-sm flex items-center justify-center space-x-2 transition-all duration-300 ${
                  formState === "success"
                    ? "bg-green-600 text-white"
                    : formState === "error"
                    ? "bg-red-600 text-white"
                    : "bg-slate-900 text-white hover:bg-indigo-600"
                }`}
              >
                <AnimatePresence mode="wait">
                  {formState === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <span className="font-medium text-sm tracking-wide">
                        {t("footer.btn_send")}
                      </span>
                      <Send className="ml-2 w-4 h-4" />
                    </motion.div>
                  )}
                  {formState === "submitting" && (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </motion.div>
                  )}
                  {formState === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="mr-2 w-5 h-5" />
                      <span className="font-medium text-sm tracking-wide">
                        {t("footer.btn_sent")}
                      </span>
                    </motion.div>
                  )}
                  {formState === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <AlertCircle className="mr-2 w-5 h-5" />
                      <span className="font-medium text-sm tracking-wide">
                        {t("footer.btn_send")}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 pt-8 border-t border-slate-100">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>{t("footer.credits")}</span>
            <span>{t("footer.tech")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
