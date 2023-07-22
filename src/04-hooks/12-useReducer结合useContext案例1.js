import React, { useContext, useReducer } from 'react';

// 需求：点击Child1的改变a,Child2组件改变；点击Child1的改变b,Child3组件改变

/**
 * 跨组件的通信，结合useContext，把共享状态以及触发方法共享给子组件，所有组件内部只负责视图渲染
 */

const initialState = {
  a: "aaaa",
  b: "bbbb"
};

const reducer = (prevState, action) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "changeA":
      newState.a = action.value;
      return newState;

    case "changeB":
      newState.b = action.value;
      return newState;

    default:
      return prevState;
  }
};

const GlobalContext = React.createContext();

export default function MyApp () {
  const [state, dispatch] = useReducer(reducer, initialState,);

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </GlobalContext.Provider>
  );
}


const Child1 = () => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div style={{ background: 'red' }}>
      <button onClick={() => dispatch({
        type: "changeA",
        value: "AAAA"
      })}>改变a</button>
      <button onClick={() => dispatch({
        type: "changeB",
        value: "BBBB"
      })}>改变b</button>
    </div>
  );
};

const Child2 = () => {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: 'yellow' }}>Child2-{state.a}</div>;
};

const Child3 = () => {
  const { state } = useContext(GlobalContext);
  return <div style={{ background: 'green' }}>Child3-{state.b}</div>;
};