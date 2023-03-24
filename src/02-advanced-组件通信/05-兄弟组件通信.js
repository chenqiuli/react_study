import React, { Component } from 'react';
import axios from "axios";
import "./css/兄弟组件通信.css";

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
        <div>
          {this.state.filmList.map(item => <FilmItem key={item.filmId} {...item} onEventChange={(value) => {
            this.setState({
              info: value
            });
          }} />)}
        </div>

        <FilmDetail info={this.state.info} />
      </div>
    );
  }
}

export default MyApp;


const FilmItem = (props) => {
  const { name, poster, actors, synopsis, onEventChange = () => { } } = props;
  return (
    <div className='filmItem' onClick={() => {
      onEventChange(synopsis);
    }} >
      <img src={poster} />
      <div>
        <p>{name}</p>
        <p>主演：{actors.map(item => item.name).join(" ")}</p>
      </div>
    </div>
  );
};

function FilmDetail (props) {
  return (
    <div className='filmDetail'>{props.info || "--"}</div>
  );
}