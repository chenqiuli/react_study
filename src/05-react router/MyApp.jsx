import React from 'react';
import IndexRouter from './router/IndexRouter';
import TabBar from './components/TabBar';
import './css/myapp.css';
import './css/common.css';
// 全局引入antd样式
import 'antd/dist/reset.css';

export default function MyApp(props) {
  return (
    <div className="myapp">
      <IndexRouter>
        {/* 插槽的写法 */}
        <TabBar />
      </IndexRouter>
    </div>
  );
}
