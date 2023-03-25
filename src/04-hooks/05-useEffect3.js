import React, { useState, useEffect } from 'react';

export default function Mypp () {
  const [show, setshow] = useState(true);

  return (
    <div>
      <button onClick={() => {
        setshow(false);
      }}>click</button>
      {show && <Child />}
    </div>
  );
}

function Child () {
  const [count, setcount] = useState(0);

  // 回调函数内再return出一个回调函数 = componentWillUnMount，只会执行一次
  useEffect(() => {
    window.onresize = () => {
      console.log('resize');
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  useEffect(() => {
    console.log("000");
    const timer = setInterval(() => {
      setcount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>{count}-Child</div>
  );
}



