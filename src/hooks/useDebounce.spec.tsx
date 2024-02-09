import { render, renderHook, screen } from "@testing-library/react";
import { useDebouncedCallback } from "./useDebounce";
import userEvent from "@testing-library/user-event";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("when clicks in the button with debounce hook", () => {
  it("calls the debounce callback with custom parameter", async () => {
    const mockCallback = vi.fn();
    const { result } = renderHook(() =>
      useDebouncedCallback(mockCallback, 500),
    );

    render(
      <button onClick={() => result.current("custom parameter")}>
        debounce
      </button>,
    );

    const buttonEl = screen.getByRole("button", { name: "debounce" });
    userEvent.click(buttonEl);

    await wait(600);

    expect(mockCallback).toHaveBeenCalledWith("custom parameter");
  });
});
