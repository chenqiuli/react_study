import React, { Component } from 'react';
import axios from "axios";

class Film extends Component {
  state = {
    filmList: []
  };


  // 执行一次
  componentDidMount () {
    console.log(this.props.type);
    if (this.props.type === 0) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7058163",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        const { status, data } = res.data;
        if (status === 0) {
          this.setState({
            filmList: data.films
          });
        }
      });
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5414335",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        const { status, data } = res.data;
        if (status === 0) {
          this.setState({
            filmList: data.films
          });
        }
      });
    }
  }

  // componentDidUpdate () {
  //   if (this.props.type === 0) {
  //     axios({
  //       url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7058163",
  //       headers: {
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }
  //     }).then(res => {
  //       const { status, data } = res.data;
  //       if (status === 0) {
  //         this.setState({
  //           filmList: data.films
  //         });
  //       }
  //     });
  //   } else {
  //     axios({
  //       url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5414335",
  //       headers: {
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
  //         'X-Host': 'mall.film-ticket.film.list'
  //       }
  //     }).then(res => {
  //       const { status, data } = res.data;
  //       if (status === 0) {
  //         this.setState({
  //           filmList: data.films
  //         });
  //       }
  //     });
  //   }
  // }

  UNSAFE_componentWillReceiveProps (nextProps) {
    if (nextProps.type === 0) {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7058163",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        const { status, data } = res.data;
        if (status === 0) {
          this.setState({
            filmList: data.films
          });
        }
      });
    } else {
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5414335",
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        const { status, data } = res.data;
        if (status === 0) {
          this.setState({
            filmList: data.films
          });
        }
      });
    }
  }

  render () {
    return (
      <div style={{
        width: 400,
        height: 400,
        background: 'pink',
        marginTop: 10,
      }}>
        {
          this.state.filmList.map(item => {
            return (
              <div key={item.filmId}>
                {item.name}
              </div>
            );
          })
        }
      </div>
    );
  }
}

class MyApp extends Component {
  state = {
    list: ["正在热映", "即将上映"],
    type: 1,
  };

  render () {
    return (
      <div>
        <ul>
          {this.state.list.map((item, index) => <li key={index} onClick={() => {
            this.setState({
              type: index
            });
          }} style={{
            cursor: 'pointer'
          }}>{item}</li>)}
          <Film type={this.state.type} />
        </ul>
      </div>
    );
  }
}

export default MyApp;