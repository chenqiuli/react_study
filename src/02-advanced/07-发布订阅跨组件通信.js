import React, { Component } from 'react';
import axios from "axios";
import "./css/兄弟组件通信.css";

const bus = {
  list: [],

  // 订阅
  subscribe (callback) {
    // console.log(callback);
    this.list.push(callback);
  },

  // 发布
  publish (text) {
    // 遍历所有的list，将回调函数执行
    this.list.forEach(callback => {
      callback && callback(text);
    });
  }
};

// FilmItem 与 FilmDetail通信
class MyApp extends Component {
  state = {
    filmList: [],
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
      });
    });
  }

  render () {
    return (
      <div className='app'>
        <div>
          {this.state.filmList.map(item => <FilmItem key={item.filmId} {...item} />)}
        </div>

        <FilmDetail />
      </div>
    );
  }
}

export default MyApp;


const FilmItem = (props) => {
  const { name, poster, actors, synopsis, } = props;
  return (
    <div className='filmItem' onClick={() => {
      bus.publish(synopsis);
    }} >
      <img src={poster} alt={name} />
      <div>
        <p>{name}</p>
        <p>主演：{actors.map(item => item.name).join(" ")}</p>
      </div>
    </div>
  );
};


class FilmDetail extends Component {
  state = {
    info: ""
  };

  // 组件一上来就要订阅
  componentDidMount () {
    bus.subscribe((value) => {
      this.setState({
        info: value
      });
    });
  }

  render () {
    return (
      <div className='filmDetail'>{this.state.info || "--"}</div>
    );
  }
}

