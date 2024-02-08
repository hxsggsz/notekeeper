import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const renderComponent = () =>
  render(
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>,
  );
describe("Tooltip ", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      renderComponent();
      const tooltipEl = screen.getByText(/hover/i);
      expect(tooltipEl).toBeInTheDocument();
    });
  });

  describe("when hover the component", () => {
    it("shows tooltip on screen", async () => {
      renderComponent();
      const tooltipTriggerEl = screen.getByText(/hover/i);

      // this event trigger a rerender on react without the act a error happen on test
      await act(async () => userEvent.hover(tooltipTriggerEl));

      const tooltipEl = screen.findByRole("tooltip");
      expect(await tooltipEl).toBeInTheDocument();
    });
  });
});
