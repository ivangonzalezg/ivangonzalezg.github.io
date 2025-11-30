import React from "react";
import { Layers, Smartphone, Cpu } from "lucide-react";
import { Section } from "./Section";
import { useTranslation } from "react-i18next";
import { ValueProp as ValuePropType } from "../types";

export const ValueProp: React.FC = () => {
  const { t } = useTranslation();
  const items = t("valueProps", { returnObjects: true }) as ValuePropType[];

  const getStyle = (index: number) => {
    switch (index) {
      case 0:
        return { colorClass: "text-blue-600", bgClass: "bg-blue-50" };
      case 1:
        return { colorClass: "text-emerald-600", bgClass: "bg-emerald-50" };
      case 2:
        return { colorClass: "text-violet-600", bgClass: "bg-violet-50" };
      default:
        return { colorClass: "text-slate-600", bgClass: "bg-slate-50" };
    }
  };

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        {items.map((item, index) => {
          const style = getStyle(index);
          return (
            <div key={index} className="flex flex-col items-start group">
              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ease-out ${style.bgClass}`}
              >
                {item.icon === "layers" && (
                  <Layers
                    className={`w-7 h-7 ${style.colorClass}`}
                    strokeWidth={1.5}
                  />
                )}
                {item.icon === "smartphone" && (
                  <Smartphone
                    className={`w-7 h-7 ${style.colorClass}`}
                    strokeWidth={1.5}
                  />
                )}
                {item.icon === "cpu" && (
                  <Cpu
                    className={`w-7 h-7 ${style.colorClass}`}
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
          );
        })}
      </div>
    </Section>
  );
};
