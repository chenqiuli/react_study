import React, { Component } from 'react';
import axios from "axios";
import "./css/兄弟组件通信.css";


// 跨组件通信，所有想要通信的子组件必须包裹在GlobalContext定义的父组件内
/**
 * context通信模式：生产者消费者模式
 * 1.把父组件当成生产者，使用GlobalContext.Provider包裹起来，传递value属性
 * 2.想要通信的子组件当成消费者，使用GlobalContext.Consumer包裹起来，里面使用回调函数取的共享状态的value属性，共享父组件的value属性
 */
const GlobalContext = React.createContext(); // 创建一个生产者-供应商

// FilmItem 与 FilmDetail通信
class MyApp extends Component {
  state = {
    filmList: [],
    info: ""
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
        <GlobalContext.Provider value={{
          info: this.state.info,
          changeInfo: (value) => {
            this.setState({
              info: value
            });
          }
        }}>
          <div>
            {this.state.filmList.map(item => <FilmItem key={item.filmId} {...item} />)}
          </div>

          <FilmDetail />
        </GlobalContext.Provider>
      </div>
    );
  }
}

export default MyApp;


const FilmItem = (props) => {
  const { name, poster, actors, synopsis, } = props;
  return (
    <GlobalContext.Consumer>
      {(value) => {
        return (
          <div className='filmItem' onClick={() => {
            value.changeInfo(synopsis);
          }} >
            <img src={poster} />
            <div>
              <p>{name}</p>
              <p>主演：{actors.map(item => item.name).join(" ")}</p>
            </div>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

function FilmDetail () {
  return (
    <GlobalContext.Consumer>
      {(value) => {
        // console.log(value);
        return (
          <div className='filmDetail'>{value.info ?? "--"}</div>
        );
      }}
    </GlobalContext.Consumer>
  );
};