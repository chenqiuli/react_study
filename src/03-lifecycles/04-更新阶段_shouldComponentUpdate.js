import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    myname: "qiu"
  };

  UNSAFE_componentWillUpdate () {
    console.log("UNSAFE_componentWillUpdate");
  }

  componentDidUpdate () {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    // 该生命周期是为了防止无效的diff算法计算，作为优化性能的生命周期。返回true会渲染，返回false不会渲染。参数是下一次的props属性和下一次的state状态
    // 该案例中已经点击了click把myname改为QIU，但是每次再次点击还是会执行生命周期以及render重新渲染
    // 老的状态：this.state 新的状态：nextState
    // 老的属性：this.props 新的属性：nextProps
    // console.log(this.state, nextState);
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
      return true;
    }
    return false;
  };


  render () {
    console.log("render");
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: 'QIU'
          });
        }}>click</button>
        {this.state.myname}
      </div>
    );
  }
}

export default MyApp;