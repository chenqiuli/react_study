import { take, call, put, fork } from "redux-saga/effects";

// 会监听某些 Action，并在 Action 被触发时执行异步操作。在异步操作完成后，Saga 可以发起新的 Action 来更新状态，从而触发应用的更新。与 redux-thunk 不同，它使用 Generator 函数来定义 Saga。
function* watchSage1 () {
  while (true) {
    yield take("get-list1"); // 非阻塞地 监听组件发来的action
    yield fork(getList1);  // 非阻塞地 fork同步执行异步处理函数
  }
}

// 异步处理请求
function* getList1 () {
  // 阻塞地 call函数调用异步请求
  let res = yield call(getListAction1);
  // 非阻塞地 put函数发出新的action
  yield put({
    type: "change-list1",
    payload: res
  });
}

function getListAction1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["111", "222", "333"]);
    }, 2000);
  });
}

export default watchSage1;
export { getList1 };