import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import createSagaMiddleWare from "redux-saga";
import watchSage1 from "./saga/saga1";

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchSage1); // 监听saga任务

export default store;