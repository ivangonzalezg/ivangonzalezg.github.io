export type Language = "en" | "es";

export interface ProjectLink {
  type: "app-store" | "play-store" | "web";
  url: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  logoUrl?: string;
  links?: ProjectLink[];
}

export interface TechCategory {
  category: string;
  skills: string[];
}

export interface ValueProp {
  title: string;
  description: string;
  icon: "layers" | "smartphone" | "cpu";
}
