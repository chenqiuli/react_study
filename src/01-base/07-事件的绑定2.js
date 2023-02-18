import React, { Component } from 'react';

class App extends Component {

  a = "aaa";
  render () {
    return (
      <div>
        <button onClick={() => {
          console.log('按钮1', this.a);
        }}>按钮1</button>
        <button onClick={this.handleClick2.bind(this)}>按钮2</button>
        <button onClick={() => this.handleClick3()}>按钮3</button>
        <button onClick={this.handleClick4}>按钮4</button>
      </div >
    );
  }

  handleClick2 () {
    console.log('按钮2', this.a);
  }

  handleClick3 () {
    console.log('按钮3', this.a);
  };

  handleClick4 = () => {
    console.log('按钮4', this.a);
  };
}

export default App;