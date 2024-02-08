import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const renderComponent = () =>
  render(
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>,
  );

describe("Select", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      renderComponent();
      const selectEl = screen.getByRole("combobox");
      expect(selectEl).toBeInTheDocument();
    });
  });

  describe("when click in the component", () => {
    it("opens the component", async () => {
      renderComponent();

      const selectEl = screen.getByRole("combobox");
      userEvent.click(selectEl);

      expect(await screen.findByText(/light/i)).toBeInTheDocument();
      expect(await screen.findByText(/dark/i)).toBeInTheDocument();
      expect(await screen.findByText(/system/i)).toBeInTheDocument();
    });
  });

  describe("when click in a element inside select", () => {
    it("selects the element", async () => {
      renderComponent();

      const selectEl = screen.getByRole("combobox");
      userEvent.click(selectEl);

      const lightEl = await screen.findByText(/light/i);
      const darkEl = await screen.findByText(/dark/i);
      const systemEl = await screen.findByText(/system/i);

      expect(lightEl).toBeInTheDocument();
      expect(darkEl).toBeInTheDocument();
      expect(systemEl).toBeInTheDocument();

      userEvent.click(darkEl);

      const lightNotFoundEl = screen.queryByText(/light/i);
      const systemNotFoundEl = screen.queryByText(/system/i);

      expect(darkEl).toBeInTheDocument();

      await waitFor(() => {
        expect(lightNotFoundEl).not.toBeInTheDocument();
        expect(systemNotFoundEl).not.toBeInTheDocument();
      });
    });
  });
});
