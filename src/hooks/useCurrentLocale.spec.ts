import { renderHook } from "@testing-library/react";
import { useCurrentLocale } from "./useCurrentLocale";
import * as useRouter from "next/router";

describe("when initialize", () => {
  describe("and the default locale is en", () => {
    it("renders the english locale", () => {
      vi.spyOn(useRouter, "useRouter").mockReturnValue({
        locale: "en",
      });

      const { result } = renderHook(() => useCurrentLocale());

      expect(result.current.signIn).toBe("Looks like you're not logged");
    });
  });

  describe("and the default locale is pt", () => {
    it("renders the portuguese locale", () => {
      vi.spyOn(useRouter, "useRouter").mockReturnValue({
        locale: "pt",
      });

      const { result } = renderHook(() => useCurrentLocale());

      expect(result.current.signIn).toBe("Parece que você não fez o login,");
      vi.clearAllMocks();
    });
  });
});
