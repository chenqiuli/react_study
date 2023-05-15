import React, { useState } from 'react';
// import NowPlaying from './components/NowPlaying';
// import ComingSoon from './components/ComingSoon';
import Loadable from "react-loadable";
import Loading from './components/Loading';

/**
 * react-loadable 可以优化首屏加载时间
 * React Loadable是一个用于React应用程序中实现代码拆分的HOC。可以让代码拆分成小块，并在渲染时按需加载，减少首屏加载时间，提高性能。
 */
const NowPlaying = Loadable({
  loader: () => import("./components/NowPlaying"),
  loading: () => <Loading />
});

const ComingSoon = Loadable({
  loader: () => import("./components/ComingSoon"),
  loading: () => <Loading />
});

export default function App () {
  const [type, settype] = useState(1);

  return (
    <div>
      App

      <button onClick={() => settype(1)}>正在热映</button>
      <button onClick={() => settype(2)}>即将上映</button>
      {type === 1 ? <NowPlaying /> : <ComingSoon />}

    </div>
  );
}
