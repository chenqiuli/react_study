import React, { Component } from 'react';

class Child extends Component {
  // 该生命周期只能用于子组件，在父组件修改属性时触发
  UNSAFE_componentWillReceiveProps (nextProps) {
    console.log("UNSAFE_componentWillReceiveProps", nextProps);
  }



  render () {
    return (
      <div>Child</div>
    );
  }
}

class MyApp extends Component {
  state = {
    myname: "qiu"
  };

  render () {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: "QIU"
          });
        }}>click</button>
        {this.state.myname}
        <Child myname={this.state.myname} />
      </div>
    );
  }
}

export default MyApp;