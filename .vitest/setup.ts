// add Vitest functions here globally
import { cleanup } from "@testing-library/react";
import { expect, afterEach, beforeEach, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";

// Run cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

expect.extend(matchers);

beforeEach(() => {
  // https://github.com/vitest-dev/vitest/issues/4223
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.scrollTo = vi.fn<any>();
});
