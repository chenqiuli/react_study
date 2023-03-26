import React from 'react';
import IndexRouter from './router/IndexRouter';
import TabBar from "./components/TabBar";
import "./css/myapp.css";
import "./css/common.css";

export default function MyApp () {
  return (
    <div className='myapp'>
      <IndexRouter>
        {/* 插槽的写法 */}
        <TabBar />
      </IndexRouter>
    </div>
  );
}
