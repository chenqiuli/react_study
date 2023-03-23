import React, { Component } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// https://swiperjs.com/get-started


class MyApp extends Component {
  state = {
    list: []
  };

  componentDidMount () {
    // setState在异步中执行是同步的，所以setState完dom节点已经更新完毕
    setTimeout(() => {
      this.setState({
        list: ["Slide 1", "Slide 2", "Slide 3"]
      });
      // 方案1
      // new Swiper('.swiper', {
      //   loop: true,
      //   // If we need pagination
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
      //   // Navigation arrows
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      //   // And if we need scrollbar
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
      // });
    }, 1000);
  }

  componentDidUpdate () {
    // 方案2
    // 数据已经更新完毕
    new Swiper('.swiper', {
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }


  render () {
    return (
      <div className="swiper" style={{
        width: '600px',
        height: '300px'
      }}>
        <div className="swiper-wrapper">
          {this.state.list.map((item, index) => {
            return <div className="swiper-slide" key={index}>{item}</div>;
          })}
        </div>
        {/* If we need pagination */}
        <div className="swiper-pagination"></div>

        {/* If we need navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        {/*  If we need scrollbar  */}
        <div className="swiper-scrollbar"></div>
      </div>
    );
  }
}

export default MyApp;