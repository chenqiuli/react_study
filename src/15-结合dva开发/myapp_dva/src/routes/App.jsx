import React from "react";
import Tabbar from "../components/Tabbar/Tabbar";
import { connect } from "dva";

function App(props) {
  // console.log(props);
  return (
    <div>
      {props.children}
      {props.isShow && <Tabbar />}
    </div>
  );
}

export default connect((state) => {
  return {
    isShow: state.maizuo.isShow,
  };
})(App);
