import React, { useState } from 'react';
import { IMovieItem } from '../../types';

import style from './MovieList.module.scss';

const MovieImg = (props: { poster: string }) => {
  const [load, setLoad] = useState(false);
  return (
    <div className={style.moviecard_poster}>
      <img
        className={load ? style.load : ''}
        onLoad={() => setLoad(true)} width="auto" height="100" src={props.poster} alt="img" />
    </div>
  )
}

const MovieList = (props: {
  movies: Array<IMovieItem>,
  getInfo: (id: string) => void
}) => {
  return (
    <div className="movie-container">
      {props.movies.map((movie: IMovieItem) => (
        <div key={movie.imdbID} className={style.moviecard} onClick={() => props.getInfo(movie.imdbID)}>
          <div className={style.moviecard_poster}>
            <MovieImg poster={movie.Poster} />
          </div>
          <div className={style.moviecard_info}>
            <div className={style.title}>{movie.Title}</div>
            <div className={style.sub_title}>Year: {movie.Year}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList;