import { renderHook } from "@testing-library/react";
import { useCurrentLocale } from "./useCurrentLocale";
import * as useRouter from "next/router";

const useRouterMock = vi.spyOn(useRouter, "useRouter");

describe("when initialize", () => {
  describe("and the default locale is en", () => {
    it("renders the english locale", () => {
      useRouterMock.mockReturnValue({
        locale: "en-US",
      } as unknown as useRouter.NextRouter);

      const { result } = renderHook(() => useCurrentLocale());

      expect(result.current.signIn).toBe("Looks like you're not logged");
    });
  });

  describe("and the default locale is pt", () => {
    it("renders the portuguese locale", () => {
      useRouterMock.mockReturnValue({
        locale: "pt-BR",
      } as unknown as useRouter.NextRouter);

      const { result } = renderHook(() => useCurrentLocale());

      expect(result.current.signIn).toBe("Parece que você não fez o login");
      vi.clearAllMocks();
    });
  });
});
