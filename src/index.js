/* 在React16之前必须引入这一句，引入这句代码是在执行jsx的时候需要使用React.createElement转译为js对象，
   在React16之后不用引入是在执行的时候会自动引入React */
import React from 'react';
import ReactDOM from "react-dom";
import App from "./01-base_knowledge/17-props函数组件";

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <div id="aaa" style={{ color: 'red' }}>
//     <p id="bbb">111</p>
//     <p id="ccc">222</p>
//   </div>, document.getElementById("root")
// );

/* 以上写法也可写作下面这种js对象的形式，会有babel自动转 */
// ReactDOM.render(React.createElement("div", {
//   id: "aaa",
//   style: {
//     color: 'red'
//   }
// }, [
//   React.createElement("p", { id: "bbb" }, 111),
//   React.createElement("p", { id: "ccc" }, 222)
// ]), document.getElementById("root"));