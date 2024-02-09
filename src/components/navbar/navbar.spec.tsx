/* eslint-disable @typescript-eslint/no-empty-function */
import { act, render, screen, waitFor } from "@testing-library/react";
import { Navbar } from "./navbar";
import userEvent from "@testing-library/user-event";

describe("navbar", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      render(<Navbar handleNote={() => {}} handleExit={() => {}} />);
      const navbarEl = screen.getByTestId(/notekeeper/i);
      expect(navbarEl).toBeInTheDocument();
    });
  });

  describe("when hovers the add button", () => {
    it("shows the tooltip", async () => {
      render(<Navbar handleNote={() => {}} handleExit={() => {}} />);

      const plusEl = screen.getByTestId(/plus/i);
      await act(async () => userEvent.hover(plusEl));

      const tooltipEl = screen.findByRole("tooltip", { name: /add note/i });
      expect(await tooltipEl).toBeInTheDocument();
    });
  });

  describe("when hovers the exit button", () => {
    it("shows the tooltip", async () => {
      render(<Navbar handleNote={() => {}} handleExit={() => {}} />);

      const exitEl = screen.getByTestId(/exit/i);
      await act(async () => userEvent.hover(exitEl));

      const tooltipEl = screen.findByRole("tooltip", { name: /exit/i });
      expect(await tooltipEl).toBeInTheDocument();
    });
  });

  describe("when click on plus button", () => {
    it("calls the plus function", async () => {
      const handleNoteMock = vi.fn();
      render(<Navbar handleNote={handleNoteMock} handleExit={() => {}} />);

      const plusEl = screen.getByTestId(/plus/i);
      userEvent.click(plusEl);

      await waitFor(() => expect(handleNoteMock).toHaveBeenCalled());
    });
  });

  describe("when click on exit button", () => {
    it("calls the exit function", async () => {
      const handleExitMock = vi.fn();
      render(<Navbar handleNote={() => {}} handleExit={handleExitMock} />);

      const exitEl = screen.getByTestId(/exit/i);
      userEvent.click(exitEl);

      await waitFor(() => expect(handleExitMock).toHaveBeenCalled());
    });
  });
});
