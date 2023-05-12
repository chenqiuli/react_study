/* 在React16之前必须引入这一句，引入这句代码是在执行jsx的时候需要使用React.createElement转译为js对象，
   在React16之后不用引入是在执行的时候会自动引入React */
import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./09-mobx/02.mobx结合react/MyApp";
import { Provider } from "mobx-react";
import store from './09-mobx/02.mobx结合react/mobx/store';



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // Provider 把store通过context上下文传递给App组件，是所有组件都能拿到store的值\
  <Provider store={store}>
    <App />
  </Provider>
);
