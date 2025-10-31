import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  base:"/ElectroSim/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"./src"),
      "@docs": path.resolve(__dirname, "./src/docs"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@quiz": path.resolve(__dirname, "./src/quiz"),
      "@users":path.resolve(__dirname,"./src/users")
    },
  },
  plugins: [
    tailwindcss(),
  ],
})