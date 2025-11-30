import React from "react";
import { Layers, Smartphone, Cpu } from "lucide-react";
import { Section } from "./Section";
import { ValueProp as ValuePropType } from "../types";

interface StyledValueProp extends ValuePropType {
  colorClass: string;
  bgClass: string;
}

const values: StyledValueProp[] = [
  {
    title: "Robustness & Scalability",
    description:
      "Code designed to grow. Architectures built to withstand high concurrency and future expansion without refactoring.",
    icon: "layers",
    colorClass: "text-blue-600",
    bgClass: "bg-blue-50",
  },
  {
    title: "Hybrid + Native Mastery",
    description:
      "The best of both worlds. Agile development with Expo/React Native, powered by custom Native Modules (Java/Kotlin/Swift) when performance demands it.",
    icon: "smartphone",
    colorClass: "text-emerald-600",
    bgClass: "bg-emerald-50",
  },
  {
    title: "Data & AI Integration",
    description:
      "Advanced backend ecosystems. Seamless integrations with Supabase, Strapi, and Firebase, featuring Vector Memory and AI Agents implementation.",
    icon: "cpu",
    colorClass: "text-violet-600",
    bgClass: "bg-violet-50",
  },
];

export const ValueProp: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        {values.map((item, index) => (
          <div key={index} className="flex flex-col items-start group">
            {/* Icon Container */}
            <div
              className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ease-out ${item.bgClass}`}
            >
              {item.icon === "layers" && (
                <Layers
                  className={`w-7 h-7 ${item.colorClass}`}
                  strokeWidth={1.5}
                />
              )}
              {item.icon === "smartphone" && (
                <Smartphone
                  className={`w-7 h-7 ${item.colorClass}`}
                  strokeWidth={1.5}
                />
              )}
              {item.icon === "cpu" && (
                <Cpu
                  className={`w-7 h-7 ${item.colorClass}`}
                  strokeWidth={1.5}
                />
              )}
            </div>

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
              {item.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
