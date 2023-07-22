import React, { useReducer } from 'react';

const initialState = {
  count: 0
};

const reducer = (prevState, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "add":
      newState.count++;
      return newState;

    case "minus":
      newState.count--;
      return newState;

    default:
      return prevState;
  }
};


/**
 * useReducer：降低组件内数据层与视图层的耦合度  
 * 把状态全部抽离出去外面管理
 * useReducer只能写在父组件上
 */
export default function MyApp () {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: "minus"
        });
      }}>-</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: "add"
        });
      }}>+</button>
    </div>
  );
}
