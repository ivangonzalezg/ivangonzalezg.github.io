import React from "react";
import { Section } from "./Section";
import { Box } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TechCategory } from "../types";
import { getTechIcon } from "../utils/techIcons";

export const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const categories = t("techStack.categories", {
    returnObjects: true,
  }) as TechCategory[];

  return (
    <Section
      id="about"
      className="bg-white border-y border-slate-200 relative overflow-hidden mb-20 scroll-mt-6 md:scroll-mt-36"
    >
      {/* Engineering Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Header Column */}
        <div className="md:col-span-4">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
            {t("techStack.title")}{" "}
            <span className="text-slate-400">
              {t("techStack.title_highlight")}
            </span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
            {t("techStack.description")}
          </p>
          {/* Decorative Indicator */}
          <div className="hidden md:block w-12 h-1 bg-indigo-600 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="md:col-span-8 space-y-12">
          {categories.map((group) => (
            <div key={group.category} className="group">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-4">
                {group.category}
                <span className="h-px bg-slate-200 flex-1 group-hover:bg-indigo-200 transition-colors"></span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const iconUrl = getTechIcon(skill);

                  return (
                    <span
                      key={skill}
                      className="pl-3 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-sm hover:border-indigo-300 hover:text-indigo-900 hover:bg-white hover:shadow-md hover:shadow-indigo-100/50 transition-all duration-300 cursor-default select-none flex items-center gap-2.5 group/chip"
                    >
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt=""
                          className="w-4 h-4 object-contain opacity-90 group-hover/chip:opacity-100 transition-opacity"
                        />
                      ) : (
                        <Box className="w-4 h-4 text-slate-400 group-hover/chip:text-indigo-500 transition-colors" />
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
