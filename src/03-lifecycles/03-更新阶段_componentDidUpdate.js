import React, { Component } from 'react';
import axios from "axios";
import BetterScroll from "better-scroll";

class MyApp extends Component {
  state = {
    myname: 'qiu',
    filmList: []
  };

  componentDidMount () {
    axios({
      method: 'get',
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=764626',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      }
    }).then(res => {
      this.setState({
        filmList: res.data.data.films
      }
        // , () => {
        //   console.log(document.getElementById("wrapper"));
        //   new BetterScroll("#wrapper");
        // }
      );
    });
  }

  UNSAFE_componentWillUpdate () {
    console.log("更新之前的state状态", document.getElementById("myname").innerHTML);//qiu
  }

  componentDidUpdate (prevProps, prevState) {
    // 更新后，想要获取dom节点
    // 缺点：会执行多次，添加标志位-使用老的属性或状态去判断，避免重复执行
    console.log("更新之后的state状态", document.getElementById("myname").innerHTML);//QIU
    // console.log(prevState); // 上一次的state，只有第一次的时候filmList是空的
    if (!prevState.filmList.length) {
      new BetterScroll("#wrapper");
    }
  }

  render () {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            myname: "QIU"
          });
        }}>click</button>
        <p id="myname">{this.state.myname}</p>
        <div id="wrapper"
          style={{
            height: 100, cursor: 'pointer',
            background: 'yellow', overflow: 'hidden',
            userSelect: 'none'
          }}>
          <ul>
            {this.state.filmList.map(item => {
              return (
                <li key={item.filmId}>{item.name}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyApp;