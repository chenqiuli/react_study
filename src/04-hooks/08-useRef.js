import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

export default function MyApp () {
  /**
   * useRef作用：
   * 1.获取原生dom节点   
   * 2.获取子组件的实例 https://juejin.cn/post/6966532811159240711
   * 3.保存变量：函数组件重新渲染变量会存储上一次的值
   */
  const myRef = useRef();
  const childRef = useRef(null);
  const countRef = useRef(0);

  const [count, setcount] = useState(0);

  return (
    <div>
      {/* 获取原生dom节点  */}
      <h2>获取原生dom节点</h2>
      <input ref={myRef} />
      <button onClick={() => {
        console.log(myRef.current.value);
      }}>click</button>
      {/* 获取子组件的实例 */}
      <h2>获取子组件的实例</h2>
      <Child ref={childRef} type={0} />
      <button onClick={() => {
        // console.log(childRef);
        childRef.current.setname("QIU");
      }}>change-child-name</button>
      {/* 保存变量 */}
      <div>
        <h2>保存变量</h2>
        {count}-{countRef.current}
        <button onClick={() => {
          setcount(prev => prev + 1);
          countRef.current++;
        }}>change-count</button>
      </div>
    </div>
  );
}



const Child = forwardRef((props, ref) => {
  // console.log(props, ref);
  const [name, setname] = useState("qiu");

  // 把方法暴露在ref下
  useImperativeHandle(
    ref,
    () => ({
      name,
      setname
    }),
  );

  return <div>Child-{name}</div>;
});

