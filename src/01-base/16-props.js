import React, { Component } from 'react';
import Navbar from "./components/Navbar";

class MyApp extends Component {
  render () {
    return (
      <div>
        <h2>首页</h2>
        <Navbar title="首页" leftBtn={false} rightBtn={false} />

        <h2>列表页</h2>
        <Navbar title="列表页" />

        <h2>我的页面</h2>
        <Navbar title="我的页面" />
      </div>
    );
  }
}

export default MyApp;