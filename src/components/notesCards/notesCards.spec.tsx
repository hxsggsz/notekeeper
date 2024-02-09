/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from "@testing-library/react";
import { type INotes, NotesCards } from "./notesCards";
import * as useRouter from "next/router";

const useRouterMock = vi.spyOn(useRouter, "useRouter");

const mockNotes: INotes[] = [
  {
    id: "1",
    description: "Lorem ipsum dolor sit amet",
    createdAt: new Date("2022-01-01T12:00:00Z"),
    color: "red",
  },
  {
    id: "2",
    description: "Consectetur adipiscing elit",
    createdAt: new Date("2022-02-15T08:30:00Z"),
    color: "blue",
  },
  {
    id: "3",
    description: "Sed do eiusmod tempor incididunt",
    createdAt: new Date("2022-03-20T18:45:00Z"),
    color: "green",
  },
];

describe("NotesCards", () => {
  describe("when initialize", () => {
    it("renders correctly", () => {
      useRouterMock.mockReturnValue({
        locale: "en-US",
      } as unknown as useRouter.NextRouter);

      render(
        <NotesCards
          handleUpdate={() => {}}
          handleDelete={() => {}}
          notes={mockNotes}
        />,
      );

      const cardEl = screen.getByText(/Lorem ipsum dolor sit amet/i);
      expect(cardEl).toBeInTheDocument();
    });

    describe("when locale is in english", () => {
      it("formats the card date to english", () => {
        useRouterMock.mockReturnValue({
          locale: "en-US",
        } as unknown as useRouter.NextRouter);

        render(
          <NotesCards
            handleUpdate={() => {}}
            handleDelete={() => {}}
            notes={mockNotes}
          />,
        );
        const dateCardEl = screen.getByText(/Jan 1, 2022/i);
        const dateCardPortEl = screen.queryByText(/1 de jan. de 2022/i);

        expect(dateCardEl).toBeInTheDocument();
        expect(dateCardPortEl).not.toBeInTheDocument();
      });
    });

    describe("when locale is in portuguese", () => {
      it("formats the card date to portuguese", () => {
        useRouterMock.mockReturnValue({
          locale: "pt-BR",
        } as unknown as useRouter.NextRouter);

        render(
          <NotesCards
            handleUpdate={() => {}}
            handleDelete={() => {}}
            notes={mockNotes}
          />,
        );

        const dateCardEl = screen.getByText(/1 de jan. de 2022/i);
        const dateCardEngEl = screen.queryByText(/Jan 1, 2022/i);

        expect(dateCardEl).toBeInTheDocument();
        expect(dateCardEngEl).not.toBeInTheDocument();
      });
    });
  });
});
