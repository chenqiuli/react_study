import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchFilmList({ type, k }) {
  const [filmlist, setfilmlist] = useState([]);

  useEffect(() => {
    axios({
      url:
        // 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=2924316'
        `https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1${type}&k=${k}`,
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list',
      },
    }).then((res) => {
      const { data } = res ?? {};
      if (data?.status === 0) {
        setfilmlist(data.data.films);
      }
    });
  }, []);
  return {
    filmlist,
  };
}
