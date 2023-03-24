import React, { Component } from 'react';

class Field extends Component {
  state = {
    value: this.props.defaultValue
  };

  clear () {
    this.setState({
      value: ""
    });
  }

  render () {
    const { label = "", type = "" } = this.props;
    // console.log(this.state.value);
    return (
      <div>
        <label>{label}</label>
        <input type={type} onChange={(evt) => {
          this.setState({
            value: evt.target.value
          });
        }} value={this.state.value} />
      </div>
    );
  }
}

class MyApp extends Component {
  // 使用Ref去获取子组件整个实例，获得值

  usernameRef = React.createRef();
  passwordRef = React.createRef();

  render () {
    return (
      <div>
        <h2>登录页</h2>
        <Field label="用户名" type="text" ref={this.usernameRef} defaultValue={localStorage.getItem("username")} />
        <Field label="密码" type="password" ref={this.passwordRef} />
        <button onClick={() => {
          const username = this.usernameRef.current.state.value;
          const password = this.passwordRef.current.state.value;
          console.log(username, password);
        }}>登录</button>
        <button onClick={() => {
          this.usernameRef.current.clear();
          this.passwordRef.current.clear();
        }}>重置</button>
      </div>
    );
  }
}

export default MyApp;