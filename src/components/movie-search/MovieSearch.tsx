import { useState } from "react";
import styles from "./MovieSearch.module.css";
import type { Movie } from "../../types/MovieSearch";

interface DetailConfigItem {
  id: keyof Movie;
  label: string;
}

const detailConfig: DetailConfigItem[] = [
  { id: "Title", label: "Title" },
  { id: "Released", label: "Released Date" },
  { id: "Plot", label: "Plot" },
  { id: "Type", label: "Type" },
  { id: "Runtime", label: "Runtime" },
  { id: "imdbRating", label: "IMDb Rating" },
  { id: "Language", label: "Languages" },
  { id: "Director", label: "Director" },
  { id: "Actors", label: "Actors" },
  { id: "Awards", label: "Awards" },
];

export default function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const [movie, setMovie] = useState<Movie | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieByTitle = async () => {
    setIsLoading(true);

    try {
      const apiRes = await fetch(
        `https://www.omdbapi.com/?apikey=d9ed132e&t=${searchText}`
      );
      const apiResJson = await apiRes.json();

      if (!apiRes.ok) {
        console.error(apiResJson.Error);
        return;
      }

      setMovie(apiResJson);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const ResultContainer = ({
    testId,
    children,
  }: {
    testId: string;
    children: React.ReactNode;
  }) => (
    <div data-testid={testId} className={styles.resultContainer}>
      {children}
    </div>
  );

  return (
    <div className={styles.movieSearchContainer}>
      <div className={styles.searchContainer}>
        <input
          data-testid="search-input"
          type="text"
          placeholder="Please try to find by movie's title"
          disabled={isLoading}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchMovieByTitle();
            }
          }}
        />

        <button
          data-testid="search-button"
          type="button"
          disabled={isLoading}
          onClick={() => fetchMovieByTitle()}
        >
          Search
        </button>
      </div>

      {/* -- Movie Profile Information -- */}

      {isLoading ? (
        <ResultContainer testId="fetching-result">Fetching...</ResultContainer>
      ) : !movie ? (
        <ResultContainer testId="initial-result">
          Please try to find a movie.
        </ResultContainer>
      ) : (
        <div className={styles.movieContainer}>
          <img
            data-testid="movie-image"
            className={styles.movieImage}
            src={movie.Poster}
            alt="Movie poster image"
          />

          <div className={styles.movieTitle}>{movie.Title}</div>

          <div className={styles.movieReleasedYear}>{movie.Year}</div>

          <div className={styles.moviePlot}>{movie.Plot}</div>

          <button
            data-testid="read-more-button"
            className={styles.readMoreButton}
            type="button"
            onClick={() => setOpenModal(true)}
          >
            Read More
          </button>
        </div>
      )}

      {/* -- Movie Detail Modal -- */}

      {openModal && (
        <div
          data-testid="movie-detail-modal"
          className={styles.movieDetailModal}
        >
          <div className={styles.movieDetailContent}>
            {detailConfig.map((item: DetailConfigItem) => (
              <div key={item.id} className={styles.movieDetailItem}>
                <div className={styles.movieDetailItemLabel}>{item.label}</div>
                <div className={styles.movieDetailItemContent}>
                  {movie ? movie[item.id] : "-"}
                </div>
              </div>
            ))}

            <button
              className={styles.movieDetailCloseButton}
              type="button"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
