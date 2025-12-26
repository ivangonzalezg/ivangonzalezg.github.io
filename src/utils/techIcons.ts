export const getTechIcon = (skill: string): string | null => {
  // normalize keys to handle potential case differences or spanish variants if needed
  const normalizedSkill = skill.toLowerCase();

  const iconMap: Record<string, string> = {
    // Mobile
    "react native": "react.svg",
    expo: "expo.svg",
    "android (java/kotlin)": "android.svg",
    "java modules": "openjdk.svg", // Using OpenJDK/Java
    "ios (swift)": "swift.svg",
    "native modules": "cplusplus.svg", // Abstract, using C++ as proxy for native

    // Frontend
    react: "react.svg",
    "react.js": "react.svg",
    "next.js": "nextjs.svg",
    typescript: "typescript.svg",
    "tailwind css": "tailwindcss.svg",
    "framer motion": "framer-motion.svg",

    // Backend / Data
    "node.js": "nodejs.svg",
    django: "django.svg",
    supabase: "supabase.svg",
    "supabase (postgresql)": "supabase.svg",
    firebase: "firebase.svg",
    strapi: "strapi.svg",
    "strapi cms": "strapi.svg",
    postgresql: "postgresql.svg",

    // Project Specific / Niche
    "ble/rfid": "bluetooth.svg",
    "ai agents": "openai.svg", // OpenAI as proxy for AI Agents
    "vector embeddings": "elasticsearch.svg", // Elasticsearch as proxy for vectors
    "google maps api": "googlemaps.svg",
    "complex logic": "wolfram.svg", // Wolfram as proxy for logic/math
    "lógica compleja": "wolfram.svg",
  };

  const iconName = iconMap[normalizedSkill];
  return iconName ? `/assets/icons/${iconName}` : null;
};
