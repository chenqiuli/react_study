import React, { useEffect, useState } from 'react';

export default function MyApp () {
  const [name, setname] = useState("qiu");

  // 依赖项name一改变，就会执行useEffect函数 = componentDidUpdate
  useEffect(() => {
    // 截取name的第0个到第1个字符变成大写 + 截取name的第1个到最后1个字符
    setname(name.substring(0, 1).toUpperCase() + name.substring(1));
  }, [name]);


  return (
    <div>
      {name}
      <button onClick={() => {
        setname("xiaoming");
      }}>click</button>
    </div>
  );
}
