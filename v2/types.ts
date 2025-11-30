
export interface ProjectLink {
  type: 'app-store' | 'play-store' | 'web';
  url: string;
  label?: string; // e.g. "Driver App", "User App"
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
  icon: 'layers' | 'smartphone' | 'cpu';
}
