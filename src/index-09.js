/* 在React16之前必须引入这一句，引入这句代码是在执行jsx的时候需要使用React.createElement转译为js对象，
   在React16之后不用引入是在执行的时候会自动引入React */
   import React from 'react';
   // import ReactDOM from "react-dom";
   import { createRoot } from "react-dom/client";
   import App from "./09-mobx/02.mobx结合react/MyApp";  
  import { Provider } from "mobx-react"
  import store from './09-mobx/02.mobx结合react/mobx/store';
    
   

   const container = document.getElementById("root");
   const root = createRoot(container);
   
   // ReactDOM.render(<App />, document.getElementById("root"));
   root.render(
     // Provider 把store通过context上下文传递给App组件，是所有组件都能拿到store的值\
     <Provider store={store}>
        <App />
     </Provider>
   );
   
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