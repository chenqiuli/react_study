import React, { useEffect, useState } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import '../css/Films.css';
import NowPlaying from './films/NowPlaying';
import SoonComing from './films/SoonComing';

export default function Films(props) {
  const [tabList] = useState(['正在热映', '即将上映']);
  const [active, setactive] = useState(0);

  const [fixed, setfixed] = useState(false);
  const [showTitle, setshowTitle] = useState(false);

  const {
    history,
    location: { pathname },
  } = props;

  useEffect(() => {
    // 输入url，url一变化，active变化
    if (pathname.includes('nowplaying')) {
      setactive(0);
    } else {
      setactive(1);
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;
      // console.log('scroll', scrollTop);
      if (scrollTop >= 200) {
        setfixed(true);
        setshowTitle(true);
      } else {
        setfixed(false);
        setshowTitle(false);
      }
    });
  }, []);

  return (
    <div className="films">
      <div className={fixed ? 'header_fix' : ''}>
        {showTitle && <div className="title">电影</div>}
        <ul className={`tabList`}>
          {tabList.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setactive(index);
                if (index === 0) {
                  history.push('/films/nowplaying');
                } else {
                  history.push('/films/sooncoming');
                }
              }}
              className={active === index ? 'actives' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 嵌套路由，写在父组件内部 */}
      {/* 什么时候用嵌套路由：一个页面中有一部分组件是需要根据路径显示隐藏的，就需要设计成嵌套路由 */}
      <Switch>
        <Route path="/films/nowplaying" component={NowPlaying} />
        <Route path="/films/sooncoming" component={SoonComing} />
        <Redirect from="/films" to="/films/nowplaying" />
      </Switch>

      <div
        style={{
          background: '#ededed',
          width: '100%',
          height: '65px',
        }}
      ></div>
    </div>
  );
}

/**
 * 声明式导航：a链接  NavLink 可以自动实现路由与点击激活状态呼应
 * 编程式导航：location.hash
 */
