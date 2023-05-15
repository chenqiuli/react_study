// 1.引入redux
// 2.createStore(reducer)  过时，推荐redux-toolkit
// 3.写reducer，如果有多个reducer，对reducer拆分

/**
 * store.subscribe 订阅store，当store变化就会立马收到新的store
 * store.dispatch  触发store的改变
 * store.getState  永远获取最新的store
 * 
 * 概念，代码
 */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// 将处理不同业务的reducer拆分出来
import tabbarReducer from "./reducers/tabbarReducer";
import cityReducer from "./reducers/cityReducer";
import CinemaReducer from "./reducers/cinemaReducer";
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise";
import createSagaMiddleWare from "redux-saga";
import watchSaga from "./redux-saga/saga";

const sagaMiddleware = createSagaMiddleWare();

const reducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  tabbarReducer,
  cityReducer,
  CinemaReducer
});

// 配置redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * 在redux中处理异步需要redux-thunk（返回函数）或redux-promise（返回Promise对象）中间件加持
 * 同步即返回纯js对象
 */
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk, ReduxPromise, sagaMiddleware)));

sagaMiddleware.run(watchSaga);

export default store;

// const createQStore = (reducer, initialstate) => {
//   var list = [];
//   initialstate = reducer();

//   function subscribe (callback) {
//     list.push(callback);
//   }
//   function dispatch (action) {
//     initialstate = reducer(initialstate, action);
//     for (var i in list) {
//       list[i] && list[i]();
//     }
//   }
//   function getState () {
//     return initialstate;
//   }
//   return {
//     subscribe,
//     dispatch,
//     getState
//   };
// };


