const CinemaReducer = (prevState = {
  cinemaList: []
}, action) => {
  const newState = { ...prevState };

  switch (action.type) {
    case "fetch_cinemaList":
      newState.cinemaList = action.payload;
      return newState;

    default:
      return prevState;
  }
};

export default CinemaReducer;