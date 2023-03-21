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
    console.log(callback);
    this.list.push(callback);
  },

  // 发布
  publish () {
    // 遍历所有的list，将回调函数执行
    this.list.forEach(callback => {
      callback && callback();
    });
  }
};

// 订阅者
bus.subscribe(() => {
  console.log(111);
});

bus.subscribe(() => {
  console.log(22);
});

// 发布者
bus.publish();