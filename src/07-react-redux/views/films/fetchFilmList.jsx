import axios from 'axios';

async function fetchFilmList({ type, k, pageNum }) {
  const res = await axios({
    url: `https://m.maizuo.com/gateway?cityId=440100&pageNum=${pageNum}&pageSize=10&type=${type}&k=${k}`,
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"440100"}',
      'X-Host': 'mall.film-ticket.film.list',
    },
  });
  const { data } = res ?? {};
  return data.data.films;
}

export default fetchFilmList;
