import React, { Component } from 'react';
import axios from 'axios';
import "./Cinema.css";
import BetterScroll from "better-scroll";

class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isShow: false,
      text: '搜索',
    };
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData = () => {
    // 请求卖座的接口
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7970553",
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      },
    }).then(res => {
      const { status, data } = res.data;
      if (status === 0) {
        this.setState({
          data: data.cinemas,
          fakeData: data.cinemas
        });
        new BetterScroll(this.refs.wrapper);
      }
    }).catch(err => {
      console.log(err);
    });
  };

  myRef = React.createRef();

  handleSearch = () => {
    const { isShow, } = this.state;
    this.setState({
      isShow: true,
      text: '取消'
    });
    if (isShow) {
      this.myRef.current.value = "";
      this.setState({
        isShow: false,
        text: "搜索"
      });
      this.fetchData();
    }
  };

  handleInput = () => {
    const { data } = this.state;
    console.log(data);
    const inputValue = this.myRef.current.value;
    const newData = data.filter(item => item.name.includes(inputValue));
    console.log(newData);
    this.setState({
      data: newData
    });
  };

  render () {
    const { data, fakeData, isShow, text } = this.state;
    return (
      <div>
        {/* <div className='header'>
          {isShow ? <input style={{ width: 280 }} ref={this.myRef} onBlur={this.handleInput} /> : <div className='title'>影院</div>}
          <button onClick={this.handleSearch}>{text}</button>
        </div> */}
        <input onInput={(event) => {
          const inputValue = event.target.value;
          const newData = fakeData.filter(item =>
            item.name.toUpperCase().includes(inputValue.toUpperCase())
            ||
            item.address.toUpperCase().includes(inputValue.toUpperCase())
          );
          this.setState({
            data: newData
          });
        }} />
        <div className='wrapper' ref="wrapper">
          <div className='content'>
            {data.map(item => {
              return (
                <div key={item.cinemaId} className="cinemaItem">
                  <div>
                    <span>{item.name}</span>
                    <span>￥<span className='lowPrice'>{item.lowPrice / 100}</span>起</span>
                  </div>
                  <div>{item.address}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default Cinema;