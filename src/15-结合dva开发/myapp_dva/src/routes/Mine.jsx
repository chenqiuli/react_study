import { withRouter } from "dva/router";
import React, { Component } from "react";
import { connect } from "dva";

class Mine extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "maoyan/getMaoyanList",
    });
  };

  render() {
    const { maoyanList } = this.props;
    return (
      <div>
        Mine
        <Child />
        <div style={{ marginTop: "20px" }}>猫眼电影列表如下：</div>
        <ul>
          {maoyanList.map((item) => (
            <li key={item.id}>{item.nm}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// 使用withRouter包裹组件，使拿不到
const Child = withRouter((props) => {
  // console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          props.history.push("/login");
        }}
      >
        退出登录
      </button>
    </div>
  );
});

export default connect((state) => {
  return {
    maoyanList: state.maoyan.maoyanList,
  };
})(Mine);
