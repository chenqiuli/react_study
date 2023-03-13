import React, { Component } from 'react';
import "./css/01-index.css";


class MyApp extends Component {
  render () {
    const style = {
      background: 'red',
      width: 200,
      textAlign: 'center',
      color: '#fff'
    };

    return (
      <div>
        <p style={{
          background: 'green',
          width: 200,
          textAlign: 'center',
          color: 'white'
        }}>第一种展示样式方法</p>
        <p style={style}>第二种展示样式方法</p>
        <p className='highlight'>第三种展示样式方法，通过引入外部样式，webpack把样式当做head标签内的内部样式执行了</p>
      </div>
    );
  }
}

export default MyApp;