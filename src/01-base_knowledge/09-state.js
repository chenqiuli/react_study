import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    isShow: true
  };

  render () {
    const { isShow } = this.state;
    return (
      <div>
        <h1>欢迎来到react的世界</h1>
        <button onClick={() => {
          this.setState({
            isShow: !isShow
          });
        }}>{isShow ? '收藏' : '取消收藏'}</button>
      </div>
    );
  }
}

export default MyApp;