import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilmItem from '../../components/FilmItem_class';
import { useNavigate } from 'react-router-dom';

export default function NowPlaying() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios({
      url:
        'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=8108136',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => {
      // console.log(res.data.data.films);
      setlist(res.data.data.films);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      NowPlaying
      <ul>
        {list.map((item) => {
          return <FilmItem key={item.filmId} item={item} navigate={navigate} />;
        })}
      </ul>
    </div>
  );
}
