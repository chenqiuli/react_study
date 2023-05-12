import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

function* watchSaga () {
  yield takeEvery("get_cinemaList", getCinemaList); // 监听aciton
}

function* getCinemaList () {
  const res = yield call(fetchCinemaList); // 阻塞式地等待fetchCinemaList的结果返回作为payload传给新的action

  // 发起新的action
  yield put({
    type: "fetch_cinemaList",
    payload: res
  });
}

function fetchCinemaList (cityId = "440100") {
  // 真正发起请求
  return axios({
    url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=4558896`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929","bc":"110100"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then((res) => {
    // console.log(res.data.data.cinemas);
    return res.data.data.cinemas;
  });
}

export default watchSaga;