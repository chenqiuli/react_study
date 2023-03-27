import React from 'react';
import {
  HashRouter,
  Route,
  Redirect,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import Films from '../views/Films';
import Cinemas from '../views/Cinemas';
import Mine from '../views/Mine';
import NotFound from '../views/NotFound';
import FilmDetail from '../views/FilmDetail';

/**
 *
 * HashRouter：会在浏览器带#号，利用location.hash可以拿到哈希值
 * HashRouter留了插槽，只有当前的哈希值跟path路径匹配到了，组件才会渲染展示
 *
 * 路由重定向："/" 自动跳转到 "/films"，exact参数表示是否精确匹配的意思，如果不精确匹配，所有的path路径都符合"/"开头，那么走到这里后面的代码就不走了
 *
 * Switch组件：理解成js的switch分支，匹配到某一个Route就break跳出了Switch分支
 * 为何要使用Switch组件：使用了Redirect组件后，写在前面的Route组件的path路径都是匹配"/"开头的，刷新之后还是会走到重定向
 *
 */

export default function IndexRouter(props) {
  return (
    <HashRouter>
      {/* 匹配一级路由，若是嵌套路由，需写在组件内部 */}
      <Switch>
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        <Route path="/mine" component={Mine}></Route>

        {/* 动态路由 */}
        {/* <Route path="/filmdetail/:id" component={FilmDetail} /> */}
        {/* query传参 */}
        <Route path="/filmdetail" component={FilmDetail} />

        <Redirect from="/" to="/films" exact />
        <Route component={NotFound} />
      </Switch>

      {/* 留好插槽给TabBar组件 */}
      {props.children}
    </HashRouter>
  );
}
