import React, { Component } from 'react';
import { observable, autorun } from "mobx";


/**
 * 1.npm i mobx -S
 * https://mobx.js.org/
 * 2.替换redux
 * 3.原理是利用getter和setter，检测到某一属性改变就触发自动执行函数 
 */
/**
 * observable.box：接受一个普通类型的值并将其存储在box中，变成可观察对象
 * 获取get 设置set
 */
const cityName = observable.box("广州");
const province = observable.box("广东");
// autorun：上来就会执行一次，后面每次改变到相关属性才会再次执行
autorun(() => {
  console.log("检测cityName的改变", cityName.get());
});
setTimeout(() => {
  // cityName.set("深圳"); // 改变这个autorun会监测到
  province.set("湖南"); // 改变这个autorun不会监测到
}, 1000);


/**
 * 克隆一个对象并把它转化成 observable。如果遇到的值中有一个是对象或数组，那么该值也会被传入 observable。
 * 获取和设置跟普通对象一样 
 */

const obj = observable({
  name: "aaa",
  age: 18
});
autorun(() => {
  console.log("检测obj的改变", obj.name);
});
setTimeout(() => {
  // obj.age = 20; // 修改obj.age不会触发autorun更新
  obj.name = "bbb"; // 修改obj.name不会触发autorun更新
}, 1000);





class App extends Component {
  render () {
    return (
      <div>
        App
      </div>
    );
  }
}

export default App;