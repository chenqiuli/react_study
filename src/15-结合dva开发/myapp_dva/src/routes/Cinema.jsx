import React, { useEffect } from "react";
import { connect } from "dva";

function Cinema(props) {
  const { dispatch } = props;

  useEffect(() => {
    if (!props.cinemaList.length) {
      // redux store中没有，调用接口获取
      dispatch({
        type: "maizuo/getCinemaList",
      });
    } else {
      // redux store中有，直接读取store中的值
      console.log("从Redux Store缓存中读取", props.cinemaList);
    }
  }, []);

  return (
    <div>
      <ul>
        {props.cinemaList.map((item) => (
          <li key={item.cinemaId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 把Redux的State值映射成该组件的props
const mapStateToProps = (state) => {
  return {
    cinemaList: state.maizuo.cinemaList,
  };
};
export default connect(mapStateToProps)(Cinema);
