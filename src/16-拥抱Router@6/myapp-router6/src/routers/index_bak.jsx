import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Films from '../pages/Films';
// import Cinemas from '../pages/Cinemas';
// import Mine from '../pages/Mine';
import Redirect from '../components/Redirect';
// import NotFound from '../pages/NotFound';
// import NowPlaying from '../pages/films/NowPlaying';
// import ComingSoon from '../pages/films/ComingSoon';
// import Detail from '../pages/Detail';
// import Login from '../pages/Login';

export default function IndexRouter() {
  return (
    <Routes>
      {/* 路由重定向 */}
      {/* <Route path="/" element={<Navigate to="/films" />} /> */}
      <Route path="/" element={<Redirect to="/films" />} />
      {/* 一级路由 */}
      <Route path="/films" element={lazyLoad('Films')}>
        {/* 嵌套路由，films页面留<Outlet/>容器组件，绝对路径写法 */}
        {/* <Route path="/films/nowplaying" element={<NowPlaying />} />
        <Route path="/films/comingsoon" element={<ComingSoon />} /> */}
        {/* 相对路径写法 */}
        {/* index用于嵌套路由，仅匹配父路径时，设置渲染的组件  */}
        <Route index element={<Navigate to="/films/nowplaying" />} />
        <Route path="nowplaying" element={lazyLoad('films/NowPlaying')} />
        <Route path="comingsoon" element={lazyLoad('films/ComingSoon')} />
      </Route>
      <Route path="/cinemas" element={lazyLoad('Cinemas')} />
      <Route
        path="/mine"
        element={<AuthComponent>{lazyLoad('Mine')}</AuthComponent>}
      />
      {/* 路由传参：query传参和动态路由传参 */}
      {/* <Route path="/detail" element={lazyLoad("Detail")} /> */}
      <Route path="/detail/:id" element={lazyLoad('Detail')} />
      <Route path="login" element={lazyLoad('Login')} />
      <Route path="*" element={lazyLoad('NotFound')} />
    </Routes>
  );
}

// 路由懒加载，拆分项目js体积
function lazyLoad(path) {
  const Component = React.lazy(() => import(`../pages/${path}`));
  return (
    <Suspense loading={<div>loading中...</div>}>
      <Component />
    </Suspense>
  );
}

// 路由拦截
function AuthComponent(props) {
  return localStorage.getItem('token') ? (
    props.children
  ) : (
    <Redirect to="/login" />
  );
}
