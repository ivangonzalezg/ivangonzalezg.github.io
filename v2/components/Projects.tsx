import React from "react";
import { Section } from "./Section";
import { Project } from "../types";
import { Globe } from "lucide-react";

const projects: Project[] = [
  {
    id: "bussride",
    title: "BussRide",
    tags: ["React Native", "Java Modules", "Firebase", "BLE/RFID"],
    description:
      "A mission-critical logistics platform for high-volume transport (MercadoLibre/AT&T). The engineering challenge was creating resilient background GPS tracking that bypasses Android battery optimizations. Solved via a custom Java Native Module and offline validation utilizing BLE & RFID protocols.",
    logoUrl:
      "https://play-lh.googleusercontent.com/bKaAtRPrffAWhPtb17pOvA93K4kSnAVT4zj1WwICZO-9Qgu3N1QvTf9o9YZ8VSJKTDI=w240-h480-rw",
    links: [
      {
        type: "app-store",
        url: "https://apps.apple.com/us/app/bussride/id6448958853",
        label: "User App",
      },
      {
        type: "play-store",
        url: "https://play.google.com/store/apps/details?id=com.custint.bussride",
        label: "User App",
      },
      {
        type: "app-store",
        url: "https://apps.apple.com/hn/app/bussride-driver/id6470038567",
        label: "Driver App",
      },
      {
        type: "play-store",
        url: "https://play.google.com/store/apps/details?id=com.custint.bussrideconductor",
        label: "Driver App",
      },
    ],
  },
  {
    id: "gloflow",
    title: "Gloflow",
    tags: ["Expo", "AI Agents", "Supabase", "Vector Embeddings"],
    description:
      "An intelligent health assistant with persistent contextual memory. Unlike standard chatbots, this system uses Vector Embeddings (RAG) stored in Supabase to recall user habits, injuries, and preferences, routing queries through specialized multi-agent systems.",
    logoUrl:
      "https://play-lh.googleusercontent.com/7k4PKKiuBmvbtOXlSrgYjq_ofhhK7Upw6SPYfSjZKWWG7RTDgt_T3WLbKr4wTz0XGij7sUjOrw7RPwZ0K7i0hg=w240-h480-rw",
    links: [
      {
        type: "app-store",
        url: "https://apps.apple.com/us/app/gloflow/id6749468474",
      },
      {
        type: "play-store",
        url: "https://play.google.com/store/apps/details?id=com.gloflow.app",
      },
    ],
  },
  {
    id: "autotur",
    title: "Autotur",
    tags: ["React", "Strapi", "Google Maps API", "Complex Logic"],
    description:
      "A real-time quoting engine for ADO. Engineered complex custom algorithms that instantly calculate logistic costs (tolls, dead mileage, driver shifts, fuel) by querying Google Maps API and processing business rules dynamically.",
    logoUrl: "https://agencias.autotur.com.mx/favicon.ico",
    links: [
      { type: "web", url: "https://autotur.com.mx", label: "Website" },
      {
        type: "web",
        url: "https://agencias.autotur.com.mx",
        label: "Agency Portal",
      },
    ],
  },
];

export const Projects: React.FC = () => {
  return (
    <Section id="work" className="scroll-mt-28">
      <div className="mb-16">
        <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">
          Selected Work
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Engineering Case Studies
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white border border-slate-200 p-8 md:p-10 rounded-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-indigo-600/20 transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row gap-8"
          >
            {/* Logo Column (Left) */}
            <div className="shrink-0">
              {project.logoUrl && (
                <div className="w-16 h-16 rounded-md overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                  <img
                    src={project.logoUrl}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Content Column (Right) */}
            <div className="flex-1 min-w-0 flex flex-col h-full">
              {/* Header: Title and Tags */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-3 gap-x-4 mb-4">
                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed font-light mb-6">
                {project.description}
              </p>

              {/* Links / Action Chips */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-50">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-colors group/link"
                    >
                      {link.type === "app-store" && (
                        <img
                          src="https://cdn.simpleicons.org/apple/0f172a"
                          alt="Apple"
                          className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform"
                        />
                      )}
                      {link.type === "play-store" && (
                        <img
                          src="https://cdn.simpleicons.org/googleplay/0f172a"
                          alt="Google Play"
                          className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform"
                        />
                      )}
                      {link.type === "web" && (
                        <Globe className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
                      )}

                      <span>
                        {link.label ||
                          (link.type === "app-store"
                            ? "App Store"
                            : link.type === "play-store"
                            ? "Play Store"
                            : "Website")}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
