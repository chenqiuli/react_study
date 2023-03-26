import React from 'react';
import useFetchFilmList from '../../hooks/useFetchFilmList';
import FilmItem from '../../components/FilmItem';

export default function SoonComing() {
  const { filmlist } = useFetchFilmList({ type: 2, k: '2924316' });

  return (
    <div>
      {filmlist.map((item) => (
        <FilmItem key={item.filmId} item={item} />
      ))}
    </div>
  );
}
