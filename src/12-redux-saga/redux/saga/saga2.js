import { take, call, put, fork } from "redux-saga/effects";

// 会监听某些 Action，并在 Action 被触发时执行异步操作。在异步操作完成后，Saga 可以发起新的 Action 来更新状态，从而触发应用的更新。与 redux-thunk 不同，它使用 Generator 函数来定义 Saga。
function* watchSage2 () {
  while (true) {
    yield take("get-list2"); // 非阻塞地 监听组件发来的action
    yield fork(getList2);  // 非阻塞地 fork同步执行异步处理函数
  }
}

// 异步处理请求
function* getList2 () {
  // 链式调用：像写同步代码去调用异步请求
  const res1 = yield call(getListAction2_1); // call函数：阻塞地调用异步请求，直到结果返回才会往下走
  const res2 = yield call(getListAction2_2, res1); // 第二个参数可以传值
  // put函数: 非阻塞地发出新的action
  yield put({
    type: "change-list2",
    payload: res2
  });
}

function getListAction2_1 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["444", "555", "666"]);
    }, 2000);
  });
}

function getListAction2_2 (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...data, "777", "888", "999"]);
    }, 1000);
  });
}

export default watchSage2;
export { getList2 };