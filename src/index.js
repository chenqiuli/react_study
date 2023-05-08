/* 在React16之前必须引入这一句，引入这句代码是在执行jsx的时候需要使用React.createElement转译为js对象，
   在React16之后不用引入是在执行的时候会自动引入React */
import React from 'react';
import { createRoot } from "react-dom/client";
// import App from "./10-styled-components/05-动画";
import App from "./11-redux-saga/MyApp";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <App />
);

