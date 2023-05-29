import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FilmItem(props) {
  const { name, filmId } = props.item;

  const navigate = useNavigate();
  const handleDetail = (filmId) => {
    navigate(`/detail/${filmId}`);
  };

  return (
    <li
      key={filmId}
      onClick={() => {
        handleDetail(filmId);
      }}
    >
      {name}
    </li>
  );
}
