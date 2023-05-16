import React, { Component } from 'react';

class App extends Component {
  myRef = React.createRef();

  render () {
    return (
      <div>
        <button onClick={() => {
          const childInstance = this.myRef.current;
          childInstance.test();
          console.log(this.myRef.current);// 获取子组件的实例
        }}>click</button>
        <MyInput ref={this.myRef} />
      </div>
    );
  }
}


class MyInput extends Component {
  test () {
    console.log('test');
  }

  render () {
    return (
      <div>
        <input defaultValue={20} />
      </div>
    );
  }
}


export default App;