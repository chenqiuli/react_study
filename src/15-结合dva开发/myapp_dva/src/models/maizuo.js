import { getCinemaList } from "../services/maizuo";

export default {

  namespace: 'maizuo',

  state: {
    isShow: true,
    cinemaList: []
  },

  // 处理同步action
  reducers: {
    save (state, action) {
      return { ...state, ...action.payload };
    },

    show (prevState, action) {
      return { ...prevState, isShow: true };
    },

    hide (prevState, action) {
      return { ...prevState, isShow: false };
    },

    change_cinemaList (prevState, { payload }) {
      return { ...prevState, cinemaList: payload };
    }
  },

  // 处理异步action
  effects: {
    *getCinemaList (aciton, { call, put }) {
      const res = yield call(getCinemaList);
      yield put({
        type: "change_cinemaList",
        payload: res
      });
    }
  },

  // 监听订阅
  subscriptions: {
    setup ({ dispatch, history }) {
      console.log("初始化");
    },
  },

};
