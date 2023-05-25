import { getMaoyanList } from "../services/maoyan";

export default {

  namespace: 'maoyan',

  state: {
    maoyanList: []
  },

  // 处理同步action
  reducers: {
    save (state, action) {
      return { ...state, ...action.payload };
    },

    change_maoyanList (prevState, { payload }) {
      return { ...prevState, maoyanList: payload };
    }
  },

  // 处理异步action
  effects: {
    *getMaoyanList (aciton, { call, put }) {
      const res = yield call(getMaoyanList);
      console.log(res);
      yield put({
        type: "change_maoyanList",
        payload: res
      });
    }
  },



};
