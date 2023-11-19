import React from 'react';
import { IMovieForm } from '../../types';

import style from './MovieForm.module.scss';

const MovieForm = (props: {
  form: IMovieForm,
  updateInputStr: (str: string) => void,
  getSearch: () => void
}) => {

  const FILTER = [
    { key: 'movie', value: 'movie' },
    { key: 'series', value: 'series' }
  ];

  return (
    <>
      <div className="search-bar">
        <div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={props.form.str}
              onChange={(event) => props.updateInputStr(event.target.value)}
            />
            <button className="btn btn-secondary" onClick={props.getSearch}>Search</button>
          </div>
        </div>
        <div className={style.filter_panel}>
          <div className={style.title}>Type:</div>
          <div>
            {
              FILTER.map((fitem: { key: string, value: string }) => (
                <span
                  key={fitem.key}
                  className={`badge rounded-pill text-bg-${fitem.value === props.form.type ? 'secondary' : 'light'}`}
                >{fitem.key}</span>
              ))
            }
          </div>
          { props.form.total && (
            <div className={style.total}>Result: {props.form.total}</div>
          )}
        </div>
      </div>
    </>
  )
}

export default MovieForm;