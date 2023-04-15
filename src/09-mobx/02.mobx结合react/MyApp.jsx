import React, { Component } from 'react';
import IndexRouter from './router/IndexRouter';
import TabBar from './components/TabBar';
import './css/myapp.css';
import './css/common.css';
// 全局引入antd样式
import 'antd/dist/reset.css';
import { inject, observer } from 'mobx-react';

/* 类组件中监听store状态 */
@inject('store') // 注入store
@observer // 变成观察组件
class MyApp extends Component {
  componentDidMount = () => {
    console.log(this.props.store.isShowTabbar);
  };

  render() {
    return (
      <div className="myapp">
        <IndexRouter>
          {/* 插槽的写法 */}
          {this.props.store.isShowTabbar && <TabBar />}
        </IndexRouter>
      </div>
    );
  }
}

export default MyApp;
