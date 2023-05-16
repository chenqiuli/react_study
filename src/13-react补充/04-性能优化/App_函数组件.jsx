import React, { useState } from 'react';
import deepEqual from 'lodash/isEqual';

export default function App() {
  const [name, setname] = useState('xiaoming');
  const [age] = useState(19);
  const [obj, setobj] = useState({
    name: 'xiaolan',
    age: 18,
  });

  return (
    <div>
      {name}
      <button
        onClick={() => {
          setname(Math.random(1));
        }}
      >
        改变name
      </button>
      {/* 只有把name属性传给Child组件，name变了，Child才会更新；如果name没变，Child组件直接复用上次的 */}
      <Child name={name} age={age} />

      <button
        onClick={() => {
          setobj({
            name: 'yellow',
            age: 20,
          });
        }}
      >
        改变obj
      </button>
      <Child2 obj={obj} />
    </div>
  );
}
// 函数组件：memo浅比较（props是基本属性）
const Child = React.memo(() => {
  console.log('child1', 1111);
  return <div>Child1</div>;
});

// 函数组件：isEqual 函数进行深比较判断props属性是否相等
const Child2 = React.memo(() => {
  console.log('Child2', 2222);
  return <div>Child2</div>;
}, deepEqual);
