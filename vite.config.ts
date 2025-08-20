import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// our custom componentTagger plugin
function componentTagger(): Plugin {
  return {
    name: "component-tagger",
    transform(code, id) {
      // Only run on React component files
      if (id.endsWith(".tsx") || id.endsWith(".jsx")) {
        const tag = `/* Tagged by componentTagger: ${id} */\n`;
        return {
          code: tag + code,
          map: null,
        };
      }
      return null;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // only apply in dev mode
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
