import React, { Component } from 'react';
import "./css/01-clear.css";

class MyApp extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9,]
  };

  myRef = React.createRef();

  getSnapshotBeforeUpdate () {
    return this.myRef.current.scrollHeight;
    // console.log(this.myRef.current.scrollHeight);
  }

  componentDidUpdate (prevProps, prevState, value) {
    console.log(this.myRef.current.scrollTop);
    // console.log(this.myRef.current.scrollHeight);
    this.myRef.current.scrollTop += this.myRef.current.scrollHeight - value;
  }

  render () {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            list: [...[11, 22, 33, 44, 55, 66, 77, 88, 99], ...this.state.list]
          });
        }}>来邮件</button>
        <h2>邮件中心</h2>
        <ul className='ul' ref={this.myRef}>
          {this.state.list.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MyApp;