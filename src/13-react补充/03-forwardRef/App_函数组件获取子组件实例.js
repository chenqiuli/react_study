import React, { useState, useImperativeHandle } from 'react';

export default function Parent () {
  const myRef = React.createRef();

  return (
    <div>
      Parent
      <button onClick={() => {
        console.log(myRef.current);
        const myRefInstance = myRef.current; // 父组件通过 ref 来引用子组件的实例
        console.log(myRefInstance);
        myRefInstance.test();
        myRefInstance.setvalue("");
      }}>click</button>
      <Child ref={myRef} />
    </div>
  );
}
// 函数组件本身没有实例，因此无法直接使用 ref，需要使用 forwardRef 向子组件传递 ref
const Child = React.forwardRef((porps, ref) => {
  const [value, setvalue] = useState("111");

  const test = () => {
    console.log('test');
  };

  // 把方法绑定在ref上
  useImperativeHandle(
    ref,
    () => ({
      test,
      setvalue
    }),
  );

  return (
    <div>
      Child
      <input ref={ref} value={value} onChange={() => { }} />
    </div>
  );
});


