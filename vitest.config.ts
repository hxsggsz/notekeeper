import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    clearMocks: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
    },
    setupFiles: [".vitest/setup.ts"],
    include: ["src/**/*.spec.ts", "src/**/*.spec.tsx"],
  },
});
