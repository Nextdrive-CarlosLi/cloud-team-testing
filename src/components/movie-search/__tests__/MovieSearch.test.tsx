/*
 * * Test cases:
 * - The application initially displays no movies.
 * - Movies can be searched by title.
 * - Clicking a movie opens the detailed view.
 */

import { render, screen, logRoles, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MovieSearch from "../MovieSearch";
import { mockMovieData } from "../../../../dummies/mockMovie";

describe("Test MovieSearch Component", () => {
  test("The application initially displays no movies.", () => {
    render(<MovieSearch />);
    expect(screen.getByTestId("initial-result")).toBeInTheDocument();
  });

  test("Movies can be searched by title.", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovieData),
      })
    ) as jest.Mock;

    const { container } = render(<MovieSearch />);

    await user.type(screen.getByTestId("search-input"), "frozen");

    await user.click(screen.getByTestId("search-button"));

    // logRoles(container);

    await waitFor(() =>
      expect(screen.getByTestId("movie-image")).toBeInTheDocument()
    );
  });

  test("Clicking a movie opens the detailed view.", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovieData),
      })
    ) as jest.Mock;

    const { container } = render(<MovieSearch />);

    await user.type(screen.getByTestId("search-input"), "frozen");

    await user.click(screen.getByTestId("search-button"));

    await user.click(screen.getByTestId("read-more-button"));

    // logRoles(container);

    await waitFor(() =>
      expect(screen.getByTestId("movie-detail-modal")).toBeInTheDocument()
    );
  });
});
