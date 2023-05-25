import { connect } from "dva";
import React, { useEffect } from "react";

function Detail(props) {
  // console.log(props);
  const { dispatch } = props;
  useEffect(() => {
    dispatch({
      type: "maizuo/hide",
    });

    return () => {
      dispatch({
        type: "maizuo/show",
      });
    };
  }, []);

  return <div>Detail</div>;
}

// 使用connect连接，dispatch方法会自动在props上
export default connect()(Detail);
