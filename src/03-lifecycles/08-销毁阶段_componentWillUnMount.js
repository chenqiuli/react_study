import React, { Component } from 'react';

class Child extends Component {
  state = {
    num: 0
  };

  timer = null;

  componentDidMount () {
    // 窗口的变化
    window.onresize = () => {
      console.log("resize");
    };
    // 定时器
    this.timer = setInterval(() => {
      console.log("setInterval");
      this.setState((prevState) => ({
        num: prevState.num + 1
      }));
    }, 1000);
  }

  componentWillUnmount () {
    console.log("componentWillUnmount");
    // 清除window上挂载的事件
    window.onresize = null;
    // 清除定时器
    clearInterval(this.timer);
  }

  render () {
    return <div>Child  {this.state.num}</div>;
  }
}

class MyApp extends Component {
  state = {
    isShow: true,
  };

  render () {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isShow: !this.state.isShow
          });
        }}>click</button>

        {this.state.isShow && <Child />}
      </div>
    );
  }
}

export default MyApp;