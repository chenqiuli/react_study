import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Films() {
  return (
    <div>
      Films
      {/* 嵌套路由容器组件 */}
      <Outlet />
    </div>
  );
}
