import React, { useContext, useEffect, useReducer } from 'react';
import axios from "axios";

const GlobalContext = React.createContext();

const initialState = {
  filmList: [],
  detailInfo: ""
};

const reducer = (prevState, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "setFilmList":
      newState.filmList = action.value;
      return newState;

    case "setDetailInfo":
      newState.detailInfo = action.value;
      return newState;

    default:
      return prevState;
  }
};

export default function MyApp () {
  const [state, dispatch] = useReducer(reducer, initialState);


  /**
   * useReducer不能实现异步请求，redux可以，依靠中间件
   */
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=764626',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.film.list',
      }
    }).then(res => {
      dispatch({
        type: "setFilmList",
        value: res.data.data.films
      });
    });
  }, []);


  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        {state.filmList.map(item => <FilmItem key={item.filmId} {...item} />)}
        <FilmDetail />
      </div>
    </GlobalContext.Provider>
  );
}


const FilmItem = ({ name, poster, synopsis }) => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div style={{ marginBottom: 10 }} onClick={() => dispatch({
      type: "setDetailInfo",
      value: synopsis
    })}>
      <img src={poster} alt={name} style={{
        width: 100,
        height: 100,
        marginRight: 10,
        cursor: 'pointer'
      }} />
      <span>电影名称：{name}</span>
    </div>
  );
};


const FilmDetail = () => {
  const { state } = useContext(GlobalContext);
  return <div style={{
    background: 'yellow',
    width: 300,
    height: 300,
    position: 'fixed',
    right: 0,
    top: 0
  }}>FilmDetail-{state.detailInfo}</div>;
};