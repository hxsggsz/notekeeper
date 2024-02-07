import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      render(<Button>test</Button>);
      const buttonEl = screen.getByRole("button", { name: "test" });
      expect(buttonEl).toBeVisible();
    });
  });
});
