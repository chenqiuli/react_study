const reducer = (
  prevState = {
    list1: [],
    list2: []
  }, action
) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "change-list1":
      // console.log("dispatch1");
      newState.list1 = action.payload;
      return newState;
    case "change-list2":
      // console.log("dispatch2");
      newState.list2 = action.payload;
      return newState;
    default:
      return prevState;
  }
};

export default reducer;

