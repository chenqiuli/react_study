import React, { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Redirect from '../components/Redirect';

export default function IndexRouter() {
  const element = useRoutes([
    { path: '/', element: <Redirect to="/films" /> },
    {
      path: '/films',
      element: lazyLoad('Films'),
      children: [
        { path: '', element: <Navigate to="/films/nowplaying" /> },
        { path: 'nowplaying', element: lazyLoad('films/NowPlaying') },
        { path: 'comingsoon', element: lazyLoad('films/ComingSoon') },
      ],
    },
    { path: '/cinemas', element: lazyLoad('Cinemas') },
    {
      path: '/mine',
      element: <AuthComponent>{lazyLoad('Mine')}</AuthComponent>,
    },
    { path: '/detail/:id', element: lazyLoad('Detail') },
    { path: '/login', element: lazyLoad('Login') },
    { path: '*', element: lazyLoad('NotFound') },
  ]);
  return element;
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
