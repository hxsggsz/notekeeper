import { render, screen } from "@testing-library/react";

import { PageLoading } from "./pageLoading";

describe("Loading", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      render(<PageLoading isLoading />);
      const titleEl = screen.getByText(/notekeeper/i);
      const progressEl = screen.getByRole("progressbar");

      expect(titleEl).toBeVisible();
      expect(progressEl).toBeVisible();
    });

    describe("when is not loading", () => {
      it("doesnt show the loading on screen", () => {
        render(<PageLoading isLoading={false} />);
        const titleEl = screen.queryByText(/notekeeper/i);
        const progressEl = screen.queryByRole("progressbar");

        expect(titleEl).not.toBeInTheDocument();
        expect(progressEl).not.toBeInTheDocument();
      });
    });
  });
});
