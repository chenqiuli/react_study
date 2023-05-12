import React from 'react';
// import "./02-可执行生成器";
// import "./01-生成器";
import store from './redux/store';

export default function MyApp () {
  return (
    <div>
      MyApp
      <button onClick={() => {
        const list1 = store.getState().list1;
        if (!list1.length) {
          // dispatch如果是异步的，一定要让自己的saga去监管，不能让reducer监管
          store.dispatch({
            type: "get-list1",
          });
        } else {
          console.log("缓存读取", list1);
        }
      }}>click1-异步缓存111</button>

      <button onClick={() => {
        const list2 = store.getState().list2;
        if (!list2.length) {
          // dispatch如果是异步的，一定要让自己的saga去监管，不能让reducer监管
          store.dispatch({
            type: "get-list2",
          });
        } else {
          console.log("缓存读取", list2);
        }
      }}>click2-异步缓存222</button>
    </div>
  );
}
