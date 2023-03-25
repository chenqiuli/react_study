import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function MyApp () {
  const [list, setlist] = useState([]);

  // 依赖项为[] = componentDidMount，只会执行一次
  useEffect(() => {
    axios("/test.json").then(res => {
      setlist(res.data.data.films);
    });
  }, []);


  return (
    <div>
      {list.map(item => <p key={item.filmId}>{item.name}</p>)}
    </div>
  );
}
