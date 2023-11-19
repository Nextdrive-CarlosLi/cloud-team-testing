import React, { useState } from 'react';
import { IMovieItem, IMovieInfo, IMovieForm } from '../types';

import style from './MovieSearch.module.scss';
import MovieInfo from '../components/MovieInfo';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

const MovieSearch = () => {
  const [movies, setMovies] = useState<Array<IMovieItem>>([]);
  const [movieinfo, setInfo] = useState<IMovieInfo | null>(null);
  const [form, setForm] = useState<IMovieForm>({
    str: '',
    type: 'movie',
    total: ''
  });

  const updateInputStr = (str: string) => {
    setForm((prevState) => ({
      ...prevState,
      str
    }))
  }

  const closeMovieInfo = () => {
    setInfo(null);
  }

  const getMovieSearchRequest = async () => {
    let api = `http://www.omdbapi.com/?apikey=8b0a78b9&s=${form.str}`;
    const response = await fetch(api);
    const responseJson = await response.json();
    if (responseJson.Response === 'True') {
      const data = responseJson.Search;
      setMovies(data);
      setForm((prevState) => ({
        ...prevState,
        total: responseJson.totalResults
      }))
      setInfo(null);
    }
  };

  const getMovieInfoRequest = async (id: string) => {
    const api = `http://www.omdbapi.com/?apikey=8b0a78b9&plot=full&i=${id}`;
    const response = await fetch(api);
    const responseJson = await response.json();
    if (responseJson.Response === 'True') {
      setInfo(responseJson)
    }
  };

  return (
    <div className={`container container-fluid ${movieinfo ? style.container_info : ''}`}>
      <div className={style.content_list}>
        <MovieForm form={form} updateInputStr={updateInputStr} getSearch={getMovieSearchRequest} />
        { movies.length > 0 && (
          <div className={style.movielist_wrapper}>
            <MovieList movies={movies} getInfo={getMovieInfoRequest} />
          </div>
        )}
      </div>
      <div className={style.content_info}>
        { movieinfo && <MovieInfo info={movieinfo} closeMovieInfo={closeMovieInfo} />}
      </div>
    </div>
  )
}

export default MovieSearch;