import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    myname: "qiu"
  };

  // 自己更新，父组件更新，初始化，都会触发这个生命周期执行
  // 从属性中获得衍生的状态
  // return一个对象，return的结果会与state进行合并覆盖，配合componentDidUpdate进行异步请求
  // nextProps-最新的属性  nextState-最新的状态
  // 类属性，this指向undefined，没有this.state
  static getDerivedStateFromProps (nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextState);
    return {
      myname: nextState.myname.substring(0, 1).toUpperCase() + nextState.myname.substring(1)
    };
  }

  render () {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: "kkk"
          });
        }}>click</button>
        {this.state.myname}
      </div>
    );
  }
}

export default MyApp; 