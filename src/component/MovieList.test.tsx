import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import MovieList from "./MovieList";
const setup = () => {
  render(<MovieList />);
  const InputField = screen.getByTestId("input-field");
  const SearchBtn = screen.getByTestId("search-btn");

  fireEvent.change(InputField, {
    target: { value: "lion" },
  });
  userEvent.click(SearchBtn);
};
describe("Verify Movie list", () => {
  test("The application initially displays no movies", () => {
    render(<MovieList />);
    const AllCards = screen.queryAllByText("Movie");
    expect(AllCards).toHaveLength(0);
  });
  test("Movies can be searched by title", async () => {
    setup();

    await waitFor(() => {
      expect(screen.queryAllByText("Movie")).toHaveLength(10);
    });
  });
  test("Clicking a movie opens the detailed view", async () => {
    setup();
    const MovieCard = await screen.findByTestId("movie-card-tt0110357");
    userEvent.click(MovieCard);

    await waitFor(() => {
      expect(screen.getByTestId("detail-box")).toBeInTheDocument();
    });
  });
});
