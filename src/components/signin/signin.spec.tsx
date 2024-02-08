import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as useRouter from "next/router";
import { SignIn } from "./signin";

const useRouterMock = vi.spyOn(useRouter, "useRouter");

describe("SignIn", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      useRouterMock.mockReturnValue({
        locale: "pt-BR",
      } as unknown as useRouter.NextRouter);

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      render(<SignIn handleSignIn={() => {}} />);
      const signinEl = screen.getByText(/login!/i);
      expect(signinEl).toBeInTheDocument();
    });
  });

  describe("when click on signin button", () => {
    it("calls the sign function", async () => {
      useRouterMock.mockReturnValue({
        locale: "pt-BR",
      } as unknown as useRouter.NextRouter);

      const signInMock = vi.fn();

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      render(<SignIn handleSignIn={signInMock} />);

      const buttonEl = screen.getByRole("button", { name: /login!/i });
      userEvent.click(buttonEl);

      await waitFor(() => expect(signInMock).toHaveBeenCalled());
    });
  });
});
