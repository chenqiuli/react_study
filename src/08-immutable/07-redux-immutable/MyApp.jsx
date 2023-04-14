import React, { useEffect, useState } from 'react';
import IndexRouter from './router/IndexRouter';
import TabBar from './components/TabBar';
import './css/myapp.css';
import './css/common.css';
// 全局引入antd样式
import 'antd/dist/reset.css';
import store from './redux/store';

export default function MyApp() {
  const [isshow, setisshow] = useState(store.getState().tabbarReducer.show);

  useEffect(() => {
    // 订阅者
    store.subscribe(() => {
      console.log('APP 订阅中', store.getState());
      setisshow(store.getState().tabbarReducer.show);
    });
  }, []);

  return (
    <div className="myapp">
      <IndexRouter>
        {/* 插槽的写法 */}
        {isshow && <TabBar />}
      </IndexRouter>
    </div>
  );
}
