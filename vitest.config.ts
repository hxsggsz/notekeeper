import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul",
    },
    setupFiles: [".vitest/setup.ts"],
    include: ["src/**/*.spec.ts", "src/**/*.spec.tsx"],
  },
});
