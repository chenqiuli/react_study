import React from 'react';
import { connect } from 'react-redux';

/**
 * 以此页面来实战redux持久化
 * 列表页进入详情页：在列表页存储参数在redux，进入详情页展示，页面一刷新redux的数据丢失，因为redux缓存的数据是在内存中
 *
 */

function CinemaDetail(props) {
  console.log(props);
  const { info } = props;
  return <div>{info.name}</div>;
}

const mapStateToProps = (state) => {
  return {
    info: state.CinemaReducer.cinemaDetail,
  };
};

export default connect(mapStateToProps)(CinemaDetail);
