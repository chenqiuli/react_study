import React from 'react';

function NotFound(props) {
  console.log(props, 'props');
  return <div>404 not found</div>;
}

/**
 *
 * 实现connect HOC源码
 * HOC：接收一个低级组件，返回一个具有某种功能的高级组件
 * HOC能做到：
 * 1.劫持渲染：比如让低级组件整个组件的字体变成红色等...
 * 2.代码复用
 * 3.增删改props
 */
const qiuConnect = (cb, obj) => {
  const state = cb();
  return (MyComponent) => {
    return (props) => {
      return (
        <div style={{ color: 'red' }}>
          <MyComponent {...state} {...props} {...obj} />
        </div>
      );
    };
  };
};

export default qiuConnect(
  () => {
    return {
      a: 1,
      b: 2,
    };
  },
  {
    aa() {
      return 'aa';
    },
    bb() {
      return 'bb';
    },
  }
)(NotFound);
