import React, { Component } from 'react';

class MyApp extends Component {
  render () {
    return (
      <div>
        MyApp
      </div>
    );
  }
}

export default MyApp;


const bus = {
  list: [],

  // 订阅
  subscribe (callback) {
    // console.log(callback);
    this.list.push(callback);
  },

  // 发布
  publish (text) {
    // 遍历所有的list，将回调函数执行
    this.list.forEach(callback => {
      callback && callback(text);
    });
  }
};


// 先订阅再发布,发布一般是异步的
// 订阅者
bus.subscribe((value) => {
  console.log(111, value);
});

bus.subscribe((value) => {
  console.log(22, value);
});

// 发布者
setTimeout(() => {
  bus.publish("text111");
}, 0);
setTimeout(() => {
  bus.publish("text222");
}, 1000);
setTimeout(() => {
  bus.publish("text333");
}, 2000);