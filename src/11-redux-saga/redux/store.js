import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import createSagaMiddleWare from "redux-saga";
import watchSage from "./saga-every";

const sagaMiddleware = createSagaMiddleWare();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchSage); // 启动根saga

export default store;