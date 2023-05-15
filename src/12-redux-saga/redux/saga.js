import watchSage1 from "./saga/saga1";
import watchSage2 from "./saga/saga2";
import { all } from "redux-saga/effects";

function* watchSage () {
  // 监听多个action
  yield all([watchSage1(), watchSage2()]);
}

export default watchSage;