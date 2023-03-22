import React, { Component } from 'react';

/**
 * 插槽：children，children是个数组
 * 1.为了复用，当某些组件想要定制化开发的时候
 * 2.一定程度的减少父子通信，在子组件内部插入代码，那段代码可以直接访问到父组件的状态
 */

class Child extends Component {
  render () {
    console.log(this.props.children);
    return (
      <div>
        Child
        {this.props.children[2]}
        {this.props.children[1]}
        {this.props.children[0]}
      </div>
    );
  }
}

class MyApp extends Component {


  render () {
    return (
      <div>
        <Child>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Child>
        <Child>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Child>
        <Child>
          <div >111</div>
          <div>222</div>
          <div>333</div>
        </Child>

      </div>
    );
  }
}

export default MyApp;