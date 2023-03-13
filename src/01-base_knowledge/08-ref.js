import React, { Component } from 'react';

class MyApp extends Component {
  myref = React.createRef();

  handleClick = () => {
    console.log(this.refs.myref.value);
  };

  render () {
    return (
      <div>
        {/* deprecated */}
        <input ref="myref" id="input1" />
        <button onClick={this.handleClick}>点击</button>
        <br />
        {/* new */}
        <input ref={this.myref} id="input2" />
        <button onClick={() => {
          console.log(this.myref.current.value);
        }}>点击</button>
      </div>
    );
  }
}

export default MyApp;