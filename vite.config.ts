import type { UserConfig } from "vite";

const config: UserConfig = {
  proxy: {
    "/api": {
      target: "http://localhost:8000/",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};

export default config;
