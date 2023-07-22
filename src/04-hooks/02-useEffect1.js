import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function MyApp () {
  const [list, setlist] = useState([]);

  // 初始化只会执行一次，依赖项为[] = componentDidMount
  useEffect(() => {
    console.log("useEffect1");
    axios("/test.json").then(res => {
      setlist(res.data.data.films);
    });
  }, []);

  // 初始化执行一次，然后每次有state的变化都会执行一次。
  // 因此，第二个参数没写，切忌不可在里面函数发请求，会造成死循环
  useEffect(() => {
    console.log("useEffect2");
  });


  return (
    <div>
      {list.map(item => <p key={item.filmId}>{item.name}</p>)}
    </div>
  );
}
