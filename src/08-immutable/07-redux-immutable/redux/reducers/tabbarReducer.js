import { fromJS } from "immutable";

const TabbarReducer = (prevState = {
  show: true
}, action) => {
  const newState = fromJS(prevState);

  switch (action.type) {
    case "tabbar_hide":
      return newState.set("show", false).toJS();

    case "tabbar_show":
      return newState.set("show", true).toJS();

    default:
      return prevState;
  }
};

export default TabbarReducer;