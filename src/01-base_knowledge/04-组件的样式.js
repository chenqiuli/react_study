import React, { Component } from 'react';
import "./css/01-index.css";

class App extends Component {
  render () {
    const name = "xiaoming";
    const obj = {
      background: 'green',
      width: '200px',
      textAlign: 'center',
      fontSize: '16px',
      color: 'white',
      height: '26px',
      lineHeight: '26px'
    };
    return (
      <div>
        1111
        <p>{name}</p>
        <p>{3 + 4}</p>
        <p>{3 > 4 ? '大于' : '小于'}</p>
        <p style={obj}>2222</p>
        <p style={{ color: 'red' }}>3333</p>
        <p className='active'>4444</p>
      </div>
    );
  }
}

export default App;