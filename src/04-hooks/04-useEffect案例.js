import React, { useEffect, useState } from 'react';
import axios from "axios";


function FilmDetail (props) {
  const [filmList, setfilmList] = useState([]);
  // console.log(props.type);

  useEffect(() => {
    if (props.type === 0) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7058163",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        const { status, data } = res.data;
        if (status === 0) {
          setfilmList(data.films);
        }
      });
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5414335",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        const { status, data } = res.data;
        if (status === 0) {
          setfilmList(data.films);
        }
      });
    }
  }, [props.type]);


  return (
    <div>
      {
        filmList.map(item => {
          return (
            <div key={item.filmId}>
              {item.name}
            </div>
          );
        })
      }
    </div>
  );
}



export default function MyApp () {
  const [list] = useState(["正在热映", "即将上映"]);
  const [type, settype] = useState(0);

  return (
    <div>
      <ul>
        {list.map((item, index) => <li style={{
          color: type === index ? 'red' : '#000',
          cursor: 'pointer'
        }} key={index} onClick={() => settype(index)}>{item}</li>)}
      </ul>
      <FilmDetail type={type} />
    </div>
  );
}


