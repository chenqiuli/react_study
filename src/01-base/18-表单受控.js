import React, { Component } from 'react';

class MyApp extends Component {
  state = {
    username: "xiaoming"
  };

  render () {
    const { username } = this.state;
    return (
      <div>
        <input value={username} type="text" onChange={(evt) => {
          this.setState({
            username: evt.target.value
          });
        }} />
        <button onClick={() => {
          console.log(username);
        }}>登录</button>
        <button onClick={() => {
          this.setState({
            username: ""
          });
        }}>重置</button>
      </div>
    );
  }
}

export default MyApp;