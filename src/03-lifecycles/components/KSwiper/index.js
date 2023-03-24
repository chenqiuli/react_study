import React, { Component } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import PropTypes from "prop-types";

// https://swiperjs.com/get-started
class KSwiper extends Component {
  static propTypes = {
    isshowpagination: PropTypes.bool,
    isshowbutton: PropTypes.bool,
    isshowscrollbar: PropTypes.bool,
    loop: PropTypes.bool
  };

  static defaultProps = {
    isshowpagination: false,
    isshowbutton: false,
    isshowscrollbar: false,
    loop: false
  };


  componentDidMount () {
    const { isShowScrollBar, loop } = this.props;
    // 数据已经更新完毕
    new Swiper('.swiper', {
      loop,
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
      scrollbar: isShowScrollBar ? {
        el: '.swiper-scrollbar',
      } : {}
    });
  }


  render () {
    const {
      isshowpagination,
      isshowbutton,
      isshowscrollbar,
      children,
    } = this.props;
    return (
      <div className="swiper" {...this.props}>
        <div className="swiper-wrapper">
          {children}
        </div>
        {/* If we need pagination */}
        {isshowpagination && <div className="swiper-pagination" />}
        {/* If we need navigation buttons */}
        {isshowbutton && (
          <>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </>
        )}
        {/*  If we need scrollbar  */}
        {isshowscrollbar && <div className="swiper-scrollbar"></div>}
      </div>
    );
  }
}

class KSwiperItem extends Component {
  render () {
    return (
      <div className="swiper-slide" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export { KSwiper, KSwiperItem };