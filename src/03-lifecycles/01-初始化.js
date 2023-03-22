import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    myname: "qiu"
  };

  componentWillMount () {
    // 第一次上树前最后一次修改state的状态，dom树还没渲染，只会执行一次
    this.setState({
      myname: 'QIU'
    });
    console.log("componentWillMount", document.getElementById("myname"));
  }


  componentDidMount () {
    /**
     * dom树渲染完毕，只会执行一次
     * 数据请求axios
     * 订阅函数调用
     * setInterval
     * 基于创建完的dom进行初始化，BetterScroll
     */
    console.log("componentDidMount", document.getElementById("myname"));
  }

  render () {
    console.log("render");
    return (
      <div>
        <span id="myname">{this.state.myname}</span>
      </div>
    );
  }
}

export default MyApp;