import React from 'react';

/**
 * 1. npm i immutable -S
 * 2. 对象-Map , 数组-List
 */

/**
 * 1.把普通对象转为immutable对象，如果对象内有对象，给里面的对象也套上Map
 * 2.在immutable对象上修改，不会影响原对象
 * 3.immutable对象修改的时候，如果其他属性跟原有对象一致，会复用原有对象属性，
 */
import { Map } from "immutable";
const obj = {
  name: "aaa",
  age: 18
};
const oldObj = Map(obj);
const newObj = oldObj.set("name", "bbb").set("age", 20);  // 1.修改 set 支持链式调用
console.log(oldObj.toJS(), newObj.toJS());  // 3.immutable对象变为普通js对象 toJS
console.log(newObj.get("name"), newObj.get("age"));  // 2.获取 get




export default function App () {
  return (
    <div>
      App
    </div>
  );
}
