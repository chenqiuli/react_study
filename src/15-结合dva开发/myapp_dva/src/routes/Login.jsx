import React, { Component } from "react";
import request from "../utils/request";

class Login extends Component {
  username = React.createRef();
  password = React.createRef();

  render() {
    return (
      <div>
        <h1>登录页</h1>
        <div>
          用户名：
          <input type="text" ref={this.username} />
        </div>
        <div>
          密码：
          <input type="password" ref={this.password} />
        </div>
        <div>
          <button
            onClick={() => {
              request("/users/login", {
                method: "POST",
                body: JSON.stringify({
                  username: this.username.current.value,
                  password: Number(this.password.current.value),
                }),
                // request根据fetch封装的，POST请求是放在body的，需要加上Content-Type这一个请求头
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((res) => {
                // console.log(res);
                if (res.data.ok === 1) {
                  localStorage.setItem("token", this.username.current.value);
                  this.props.history.push("/mine");
                } else {
                  alert("用户名或密码错误");
                }
              });
            }}
          >
            登录
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
