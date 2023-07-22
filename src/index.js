/* 在React16之前必须引入这一句，引入这句代码是在执行jsx的时候需要使用React.createElement转译为js对象，
   在React16之后不用引入是在执行的时候会自动引入React */
import React from 'react';
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// import App from "./10-styled-components/05-动画";
// import App from "./12-redux-saga/MyApp";
// import App from "./12-redux-saga/maizuo/MyApp";
// import App from "./13-react补充/portal/App";
// import App from "./13-react补充/02-懒加载_优化首屏加载速度/App-loadable";
// import App from "./13-react补充/04-性能优化/App_函数组件";
// import App from "./14-graphql/MyAPP_Todolist";
// import App from "./11-单元测试/App";
import App from "./04-hooks/06-useLayoutEffect";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <App />
);

/**
 * 07-react-redux文件夹
import App from "./07-react-redux/MyApp";
import { Provider } from 'react-redux';
import { store, persistor } from './07-react-redux/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
root.render(
  // Provider 把store通过context上下文传递给App组件，是所有组件都能拿到store的值
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
 */

/**
 * 09-mobx文件夹
 *
 * import App from "./09-mobx/02.mobx结合react/MyApp";
  import { Provider } from "mobx-react";
  import store from './09-mobx/02.mobx结合react/mobx/store';
  root.render(
    // Provider 把store通过context上下文传递给App组件，是所有组件都能拿到store的值\
    <Provider store={store}>
      <App />
    </Provider>
  );
 */


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