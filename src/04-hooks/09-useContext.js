import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

const GlobalContext = React.createContext();

/**
 * useContext：跨函数组件通信，简化了class类组件的写法，class类组件消费者要在回调函数里面才能拿到共享value，使用useContext可以直接拿到共享value
 * 1.创建共享中心：const GlobalContext = React.createContext();
 * 2.把父组件当生产者，需要传的值放在value属性里
 * <GlobalContext.Provider value={{
      detailInfo,
      setdetailInfo
    }}> 
    </GlobalContext.Provider>
  * 3.把子组件当消费者：const value = useContext(GlobalContext);
 */

export default function MyApp () {
  const [filmList, setfilmList] = useState([]);
  const [detailInfo, setdetailInfo] = useState("");

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=764626',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      }
    }).then(res => {
      setfilmList(res.data.data.films);
    });
  }, []);


  return (
    <GlobalContext.Provider value={{
      detailInfo,
      setdetailInfo
    }}>
      <div>
        {filmList.map(item => <FilmItem key={item.filmId} {...item} />)}
        <FilmDetail />
      </div>
    </GlobalContext.Provider>

  );
}


const FilmItem = ({ name, poster, synopsis }) => {
  const value = useContext(GlobalContext);
  // console.log(value);
  return (
    <div style={{ marginBottom: 10 }} onClick={() => value.setdetailInfo(synopsis)}>
      <img src={poster} alt={name} style={{
        width: 100,
        height: 100,
        marginRight: 10,
        cursor: 'pointer'
      }} />
      <span>电影名称：{name}</span>
    </div>
  );


};


const FilmDetail = () => {
  const value = useContext(GlobalContext);
  return <div style={{
    background: 'yellow',
    width: 300,
    height: 300,
    position: 'fixed',
    right: 0,
    top: 0
  }}>FilmDetail-{value.detailInfo}</div>;
};