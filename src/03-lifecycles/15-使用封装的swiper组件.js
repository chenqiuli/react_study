import React, { Component } from 'react';
import { KSwiper, KSwiperItem } from "./components/KSwiper";
import axios from "axios";
import "./css/swiper.css";

class MyApp extends Component {
  state = {
    list: [1, 2, 2]
  };

  componentDidMount () {
    axios("/test.json").then(res => {
      // console.log(res.data.data.films);
      this.setState({
        list: res.data.data.films
      });
    });
  }



  render () {
    return (
      <div>
        <KSwiper
          isshowpagination={true}
          loop={true}
        >
          {this.state.list.map((item, index) => {
            return <KSwiperItem key={index}>
              <img src={item.poster} alt={item.name} style={{
                height: '400px',
                width: '100%',
                objectFit: 'contain',
                // backgroundSize: 'contain'
              }} />
            </KSwiperItem>;
          })}
        </KSwiper>
      </div>
    );
  }
}

export default MyApp;