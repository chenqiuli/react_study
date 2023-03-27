import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import '../css/filmdetail.css';
import TitleBar from '../components/TitleBar';
import MBetterScroll from '../components/MBetterScroll';

export default function FilmDetail(props) {
  const [info, setinfo] = useState({});
  const [show, setshow] = useState(false);

  // 动态路由，id会带在url上，刷新页面不会报错
  // const id = props.match.params.id;
  // query传参
  // const id = props?.location?.query?.id;
  // state传参
  const id = props?.location?.state?.id;
  console.log(id);

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?filmId=6256&k=6503339',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.info',
      },
    }).then((res) => {
      const {
        data: { data, status },
      } = res ?? {};
      if (status === 0) {
        setinfo(data.film);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 66) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);

  return (
    <div className="filmdetail">
      {/* {show && ( */}
      <div className="titCom">
        <div className="tit">
          <p>@</p>
          <p>{info.name}</p>
        </div>
      </div>
      {/* )} */}
      <div>
        <img src={info.poster} alt={info.name} />
        <div className="info">
          <div>
            <span>{info.name}</span>
            <span>{info.filmType?.name}</span>
          </div>
          <div>{info.category}</div>
          <div>
            {info.nation} | {info.runtime}分钟
          </div>
          <div>{info.synopsis}</div>
        </div>
      </div>
      <div className="actors_detail">
        <TitleBar text="演职人员" />
        <MBetterScroll dep={info}>
          {info.actors?.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.avatarAddress} alt={item.name} />
                <p style={{ color: '#191a1b' }}>{item.name}</p>
                <p style={{ color: '#797d82' }}>{item.role}</p>
              </li>
            );
          })}
        </MBetterScroll>
      </div>
      <div className="actors_detail2">
        <TitleBar text="剧照">
          <div
            style={{
              color: '#797d82',
              fontSize: 12,
            }}
          >
            全部({info.photos?.length})
          </div>
        </TitleBar>
        <MBetterScroll dep={info}>
          {info.photos?.map((item, index) => {
            return (
              <li key={index}>
                <img
                  src={item}
                  alt={index}
                  style={{
                    width: 150,
                    height: 90,
                    marginRight: 10,
                  }}
                />
              </li>
            );
          })}
        </MBetterScroll>
      </div>
      <div style={{ height: 900 }}>1</div>
    </div>
  );
}
