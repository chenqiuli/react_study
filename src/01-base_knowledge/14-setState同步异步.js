import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    count: 0
  };

  /**
   * 每次调用setState都会引发虚拟dom的对比
   * 1.setState处在同步的逻辑中，是异步更新状态，异步更新真实dom
   * setState会合并更新[batch update]状态，把几次的setState合并成一次以最后一次为主，访问到的状态是老状态
   * setState接受第二个参数，第二个参数是回调函数，状态和dom更新完后就会被触发
   * 等同步的执行完，再执行异步的
   * 2.setState处在异步的逻辑中，是同步更新状态，同步更新真实dom，访问到的状态是更新后的状态
   */
  handleClick1 = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count, '1()'); // 4
    });
    console.log(this.state.count, '1'); // 1-先执行，后面的按序号


    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count, '2()'); // 5
    });
    console.log(this.state.count, '2'); // 2


    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count, '3()'); // 6
    });
    console.log(this.state.count, '3'); // 3
  };

  handleClick2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count, '1'); // 1-先执行，后面的按序号

      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count, '2'); // 2

      this.setState({
        count: this.state.count + 1
      });
      console.log(this.state.count, '3'); // 3
    }, 0);
  };

  render () {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick1}>点击1</button>
        <button onClick={this.handleClick2}>点击2</button>
      </div>
    );
  }
}

export default MyApp;