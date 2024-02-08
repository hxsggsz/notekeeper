import { render, screen } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      render(<Progress value={33} />);
      const progressEl = screen.getByRole("progressbar");
      expect(progressEl).toBeVisible();
    });
  });

  describe("when change the value", () => {
    it("changes the progress bar", () => {
      render(<Progress value={33} />);

      const progressIndicatorEl = screen.getByTestId("indicator");
      expect(progressIndicatorEl).toHaveStyle("transform: translateX(-67%)");
    });
  });
});
