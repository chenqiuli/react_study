import { fromJS } from "immutable";

const CinemaReducer = (prevState = fromJS({
  cinemaList: []
}), action) => {
  // const newState = { ...prevState };

  switch (action.type) {
    case "fetch_cinemaList":
      // newState.cinemaList = action.payload;
      return prevState.set("cinemaList", action.payload);

    default:
      return prevState;
  }
};

export default CinemaReducer;