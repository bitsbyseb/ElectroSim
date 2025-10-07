import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
      "@docs": path.resolve(__dirname, "./src/docs"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  plugins: [
    tailwindcss(),
  ],
})