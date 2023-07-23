// vue的updated 和 this.$nextTick

// React渲染的时候，有两棵树，DOM树和渲染树
// useLayoutEffect执行的时机：仅在DOM完成更新的时机，会立即同步调用里面的代码，会阻塞页面UI的渲染，这时候DOM是在内存当中的。适合做一些DOM操作，会和react的DOM操作合并操作，只有一次回流重绘。

// useEffect执行的时机：上完树了，整个页面渲染完。不做DOM操作，会造成页面抖动。

// 执行顺序：useLayoutEffect -> useEffect

import React, { useEffect, useLayoutEffect } from 'react';

export default function MyApp () {
  // useLayoutEffect适合做一些DOM操作，会和react的DOM操作合并一同更新渲染
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    const haha = document.querySelector("#haha");
    console.log(haha, "useLayoutEffect");
    haha.style.backgroundColor = "red";
    haha.style.width = '400px';
  }, []);

  // useEffect执行DOM操作会造成页面抖动，用户体验不好
  useEffect(() => {
    console.log("useEffect");
    const haha = document.querySelector("#haha");
    console.log(haha, "useEffect");
    haha.style.backgroundColor = "red";
    haha.style.width = '400px';
  }, []);


  return (
    <div>
      11
      <div id="haha" style={{
        width: 200,
        height: 200,
        border: '1px solid red'
      }}>哈哈</div>
    </div>
  );
}

