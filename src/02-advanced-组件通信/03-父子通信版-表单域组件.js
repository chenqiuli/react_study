import React, { Component } from 'react';

class Field extends Component {
  render () {
    const { label = "", type = "", value = "", onChangeEvent = () => { } } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input type={type} onChange={(evt) => {
          onChangeEvent(evt.target.value);
        }} value={value} />
      </div>
    );
  }
}

class MyApp extends Component {
  state = {
    username: localStorage.getItem("username"),
    password: ""
  };

  render () {
    return (
      <div>
        <h2>登录页</h2>
        <Field label="用户名" type="text" onChangeEvent={(value) => {
          this.setState({
            username: value
          });
        }} value={this.state.username} />
        <Field label="密码" type="password" onChangeEvent={(value) => {
          this.setState({
            password: value
          });
        }} value={this.state.password} />
        <button onClick={() => {
          console.log(this.state.username, this.state.password);
        }}>登录</button>
        <button onClick={() => {
          this.setState({
            username: "",
            password: ""
          });
        }}>重置</button>
      </div>
    );
  }
}

export default MyApp;