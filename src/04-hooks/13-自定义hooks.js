/**
 * 自定义hooks：复用组件逻辑，更加符合函数式编程。每次调用自定义hooks，都会引起组件重新渲染，命名必须以use开头
 * 自定义组件：复用组件dom+css+逻辑
 */

import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios";

function useCinemaList () {
  const [cimenaList, setcimenaList] = useState([]);

  useEffect(() => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7970553",
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      },
    }).then(res => setcimenaList(res.data.data.cinemas));
  }, []);


  return {
    cimenaList
  };
}

function useFilterCinema (cimenaList, text) {
  const getCinemaList = useMemo(() => cimenaList.filter(item => {
    return item.name.toUpperCase().includes(text.toUpperCase()) ||
      item.address.toUpperCase().includes(text.toUpperCase());
  }), [cimenaList, text]);
  return {
    getCinemaList
  };
}

// 功能：输入框模糊搜索影院名称
export default function MyApp () {
  const [text, settext] = useState("");

  const { cimenaList } = useCinemaList();
  const { getCinemaList } = useFilterCinema(cimenaList, text);

  return (
    <div>
      <input type="text" onChange={(evt) => settext(evt.target.value)} value={text} />
      <ul>
        {(getCinemaList || []).map(item => {
          return (
            <div key={item.cinemaId} style={{
              background: "#ff0",
              marginBottom: "10px"
            }}>
              <li>影院名称：{item.name}</li>
              <li>影院地址：{item.address}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
