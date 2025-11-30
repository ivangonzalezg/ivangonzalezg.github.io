import React from "react";
import { Section } from "./Section";
import { TechCategory } from "../types";
import { Box } from "lucide-react";

const stack: TechCategory[] = [
  {
    category: "Mobile & Native",
    skills: [
      "React Native",
      "Expo",
      "Android (Java/Kotlin)",
      "iOS (Swift)",
      "Native Modules",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & Cloud",
    skills: [
      "Node.js",
      "Django",
      "Supabase (PostgreSQL)",
      "Firebase",
      "Strapi CMS",
    ],
  },
];

// Helper to get brand icon URLs
const getTechIcon = (skill: string) => {
  const iconMap: Record<string, string> = {
    "React Native": "https://cdn.simpleicons.org/react/61DAFB",
    Expo: "https://cdn.simpleicons.org/expo/000020",
    "Android (Java/Kotlin)": "https://cdn.simpleicons.org/android/3DDC84",
    "iOS (Swift)": "https://cdn.simpleicons.org/swift/F05138",
    "React.js": "https://cdn.simpleicons.org/react/61DAFB",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
    TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    Django: "https://cdn.simpleicons.org/django/092E20",
    "Supabase (PostgreSQL)": "https://cdn.simpleicons.org/supabase/3ECF8E",
    Firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
    "Strapi CMS": "https://cdn.simpleicons.org/strapi/4945FF",
  };
  return iconMap[skill] || null;
};

export const TechStack: React.FC = () => {
  return (
    <Section
      id="about"
      className="bg-white border-y border-slate-200 scroll-mt-28 relative overflow-hidden mb-20"
    >
      {/* Engineering Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Header Column */}
        <div className="md:col-span-4">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Technical <span className="text-slate-400">Arsenal</span>
          </h2>
          <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
            I don't just use frameworks; I understand their internals. My stack
            is chosen for stability, performance, and long-term maintainability.
          </p>
          {/* Decorative Indicator */}
          <div className="hidden md:block w-12 h-1 bg-indigo-600 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="md:col-span-8 space-y-12">
          {stack.map((group) => (
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
