import React, { Component } from 'react';

// 1.引用复制（浅复制）
const aObj = {
  name: "aaaa"
};
const aObj2 = aObj;
aObj2.name = "bbb";
console.log("aObj", aObj, aObj2); // 影响了原对象：都被修改为bbb了

// 2.浅意义的深复制（只对普通数据类型深复制，对引用数据类型浅复制）
const bObj = {
  name: "aaa",
  arr: [1, 2, 3],
  obj: {
    age: 18,
    nation: "中国"
  }
};
const bObj2 = { ...bObj };
bObj2.name = "bbb"; // 没有影响了原对象
bObj2.arr.splice(1, 1); // 影响了原对象：arr是引用数据类型
bObj2.obj.nation = "美国"; // 影响了原对象：obj是引用数据类型
console.log("bObj", bObj, bObj2);

// 3.JSON.parse(JSON.stringify)（对undefined失效，复制不了值为undefined的键）
const cObj = {
  name: "aaa",
  arr: [1, 2, 3],
  text: undefined
};
const cObj2 = JSON.parse(JSON.stringify(cObj));
cObj2.name = "bbb"; // 没有影响了原对象
cObj2.arr.splice(1, 1); // 没有影响了原对象
console.log("cObj2", cObj, cObj2);

// 深拷贝：递归一层一层   （性能太差，消耗性能）

// immutable：使用旧数据创建新数据时，能够保证旧数据可用且不变






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