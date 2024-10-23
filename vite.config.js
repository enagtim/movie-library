import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 3000,
      open: true
    },
    watch: {
      usePolling: true,
    },
  },
});
