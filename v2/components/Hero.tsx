import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 max-w-7xl mx-auto pt-28 pb-20 md:pt-0 md:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
        {/* Text Content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8"
          >
            {t("hero.h1")}
            <br className="hidden md:block" />
            <span className="text-slate-400">{t("hero.h1_highlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-12 font-light"
          >
            {t("hero.p")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium text-sm tracking-wide transition-all hover:bg-indigo-600 rounded-sm"
            >
              {t("hero.btn_primary")}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-900 font-medium text-sm tracking-wide hover:bg-slate-50 transition-colors rounded-sm"
            >
              {t("hero.btn_secondary")}
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-start lg:justify-end"
        >
          <div className="relative w-32 h-32 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
            {/* Architectural Decoration (Offset Border) */}
            <div className="absolute inset-0 border border-slate-200 translate-x-3 translate-y-3 rounded-sm z-0 hidden md:block"></div>
            <div className="absolute inset-0 bg-slate-100 translate-x-3 translate-y-3 rounded-sm z-0 md:hidden"></div>

            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden rounded-sm border border-slate-200 bg-slate-200 z-10 group cursor-none md:cursor-default">
              <img
                src="https://ivangonzalez.co/assets/images/profile.webp"
                alt="Ivan Gonzalez"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
