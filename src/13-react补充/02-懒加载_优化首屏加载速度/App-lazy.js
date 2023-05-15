import React, { Suspense, useState } from 'react';
// import NowPlaying from './components/NowPlaying';
// import ComingSoon from './components/ComingSoon';

// React.lazy动态导入组件，实现代码分割和按需加载，提高性能
const NowPlaying = React.lazy(() => import("./components/NowPlaying"));
const ComingSoon = React.lazy(() => import("./components/ComingSoon"));


export default function App () {
  const [type, settype] = useState(1);
  return (
    <div>
      App
      <button onClick={() => settype(1)}>正在热映</button>
      <button onClick={() => settype(2)}>即将上映</button>
      {/* 
        将导入的组件作为Suspense的子组件渲染
        Suspense的fallback用于在动态加载组件时显示加载占位符
        Suspense+React.lazy React16.6提供

        Suspense+React.lazy动态加载组件的优点：可以优化首屏加载速度
        缺点：不支持SSR（服务端渲染）
             如果浏览器不支持ECMA import组件的方式，需要使用第三方polyfill库进行兼容处理
      */}
      <Suspense fallback={<div>正在加载loading中</div>}>
        {type === 1 ? <NowPlaying /> : <ComingSoon />}
      </Suspense>
    </div>
  );
}

/**
 * 优化首屏加载速度：
 * React.lazy + Suspense
 * react-loadable
 */
