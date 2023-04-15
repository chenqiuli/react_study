import React from 'react';
import useFetchFilmList from '../../hooks/useFetchFilmList';
import FilmItem from '../../components/FilmItem';

export default function NowPlaying() {
  const { filmlist } = useFetchFilmList({ type: 1, k: '458667' });

  return (
    <div>
      {filmlist.map((item) => (
        <FilmItem key={item.filmId} item={item} />
      ))}
    </div>
  );
}
