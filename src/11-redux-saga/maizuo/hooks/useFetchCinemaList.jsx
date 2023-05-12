import { useEffect, useState } from 'react';
import store from '../redux/store';
// import getCinemaList from '../redux/actionCreators/getCinemaList';

// 从redux中读取cinemaList的数据出来， 如果redux中有缓存数据，从redux中读，如果没有从后端拿。search页面也是一样，判断如果redux中有cinemaList的数据，从redux中读，如果没有从后端拿。
// 不用一直从后端频发请求
export default function useFetchCinemaList() {
  const [cinemaList, setCinemaList] = useState(
    store.getState().CinemaReducer.cinemaList
  );

  // 让请求在redux中发，保证view层只处理ui层，如果先进的是search页面
  useEffect(() => {
    if (!store.getState().CinemaReducer.cinemaList.length) {
      // redux-thunk或redux-promise写法，触发的代码
      // store.dispatch(getCinemaList(store.getState().cityReducer.cityId));
      // redux-saga写法，触发的代码
      store.dispatch({
        type: 'get_cinemaList',
      });
    } else {
      console.log('从 store 缓存中读取');
    }

    // 订阅store变化
    const unsubscribe = store.subscribe(() => {
      setCinemaList(store.getState().CinemaReducer.cinemaList);
      console.log(store.getState().CinemaReducer.cinemaList, '-=-');
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    cinemaList,
  };
}
