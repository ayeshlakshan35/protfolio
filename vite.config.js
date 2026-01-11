import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/protfolio/" : "/",
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), tailwindcss()],
}));
