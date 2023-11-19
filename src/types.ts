export interface IMovieItem {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
};

export interface IMovieInfo {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: Array<any>,
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  totalSeasons: string,
  Response: string
};

export interface IMovieForm {
  total: string,
  str: string,
  type: string
}