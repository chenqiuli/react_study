import React from 'react';
import IndexRouter from './router/IndexRouter';
import TabBar from './components/TabBar';
import './css/myapp.css';
import './css/common.css';
import { hasTabMenu } from './const';

export default function MyApp() {
  const hash = window.location.hash;
  // console.log(
  //   hash.slice(1),
  //   hasTabMenu.filter((ele) => hash.slice(1) === ele).length
  // );
  return (
    <div className="myapp">
      <IndexRouter>
        {/* 插槽的写法 */}
        {hasTabMenu.filter((ele) => hash.slice(1) === ele).length ? (
          <TabBar />
        ) : null}
      </IndexRouter>
    </div>
  );
}
