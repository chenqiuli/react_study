import React, { Component } from 'react';
import axios from 'axios';
import "./Cinema.css";
import BetterScroll from "better-scroll";

class Cinema extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      fakeData: [],
      mytext: ""
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
        });
        new BetterScroll(".wrapper");
      }
    }).catch(err => {
      console.log(err);
    });
  };

  myRef = React.createRef();

  dealData = () => {
    return this.state.data.filter(item =>
      item.name.toUpperCase().includes(this.state.mytext.toUpperCase())
      ||
      item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
    );
  };


  render () {
    const { /* data, fakeData,*/ mytext } = this.state;
    return (
      <div>
        {/* 非受控 */}
        {/* 
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
        }} /> */}
        {/* 受控 */}
        <input value={mytext} onChange={(evt) => {
          this.setState({
            mytext: evt.target.value
          });
        }} />
        <div className='wrapper' ref="wrapper">
          <div className='content'>
            {this.dealData().map(item => {
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