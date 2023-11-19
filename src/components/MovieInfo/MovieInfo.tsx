import React, { useEffect, useState } from 'react';
import { IMovieInfo } from '../../types';

import style from './MovieInfo.module.scss';

const MovieInfo = (props: {
  info: IMovieInfo,
  closeMovieInfo: () => void
}) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const { info } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsDisplay(true);
    }, 1100)
  }, [])

  return (
    <div className={`${style.info_wrapper} ${isDisplay ? style.show : ''}`}>
      <div className={style.content_top}>
        <div className={style.btn_close} onClick={props.closeMovieInfo}>x</div>

        <div>
          <div className={style.title}>{info.Title}</div>
          <div className={style.sub_title}>Director :{info.Director}</div>
          <div className={`${style.sub_title} ${style.actor_wrapper}`}>
            <div>Actors :</div>
            <div>
              { info.Actors.split(',').map((actor: string) => (
                <div key={actor} className={style.name}>{actor}</div>
              ))}
            </div>
          </div>
        </div>
        <img height="300" src={info.Poster} alt="img"/>
      </div>
      <div className={style.content_bottom}>
        <div>{info.Plot}</div>
      </div>
    </div>
  )
}

export default MovieInfo;