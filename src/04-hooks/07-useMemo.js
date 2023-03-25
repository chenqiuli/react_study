import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios";

// 功能：输入框模糊搜索影院名称

export default function MyApp () {
  const [cimenaList, setcimenaList] = useState([]);
  const [text, settext] = useState("");

  useEffect(() => {
    console.log("useEffect");
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7970553",
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      },
    }).then(res => setcimenaList(res.data.data.cinemas));
  }, []);

  // useMemo相当于vue的计算属性，返回一个结果，返回的结果可以是任意类型
  const getDataList = useMemo(() => [1, 2, 3], []);
  const getName = useMemo(() => "哈哈哈哈我好帅", []);


  // 根据输入框过滤返回list的结果，
  // useMemo也是记忆组件，缓存数据的作用，当依赖项改变时，重新创建新的函数计算；若依赖项没改变，从缓存中读取数据
  // 这里的依赖项写cimenaList原因是useMemo这段函数比useEffect还先执行，所以一开始拿到的是[]
  // const getCinemaList = useMemo(() => {
  //   console.log("memo", cimenaList);
  //   return 1;
  // }, []);

  const getCinemaList = useMemo(() => cimenaList.filter(item => {
    return item.name.toUpperCase().includes(text.toUpperCase()) ||
      item.address.toUpperCase().includes(text.toUpperCase());
  }), [cimenaList, text]);




  return (
    <div>
      {getName}
      {getDataList.map(item => <p key={item}>{item}</p>)}
      <input type="text" onChange={(evt) => settext(evt.target.value)} value={text} />
      <ul>
        {/* {getCinemaList} */}
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
