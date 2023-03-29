import React, { useState, useEffect } from 'react';
import useFetchFilmList from '../../hooks/useFetchFilmList';
import FilmItem from '../../components/FilmItem';
import axios from 'axios';

export default function SoonComing() {
  const { filmlist } = useFetchFilmList({ type: 2, k: '2924316' });

  const [maoyanList, setmaoyanList] = useState([]);

  useEffect(() => {
    axios({
      url:
        '/ajax/comingList?ci=20&limit=10&movieIds=&token=&optimus_uuid=0B1360C06EC711ED9202F7A3C5B5021BF412D2EFD8344980AA9C42B64F7154DA&optimus_risk_level=71&optimus_code=10',
    }).then((res) => {
      // console.log(res.data);
      setmaoyanList(res.data.coming);
    });
  }, []);

  return (
    <div>
      {filmlist.map((item) => (
        <FilmItem key={item.filmId} item={item} />
      ))}
    </div>
  );
}
