import { fromJS } from "immutable";

const CityReducer = (prevState = {
  cityName: '广州',
  cityId: "440100"
}, action) => {
  const newState = fromJS(prevState);
  switch (action.type) {
    case "change_city":
      return newState.set("cityName", action.payload.cityName).set("cityId", action.payload.cityId);

    default:
      return fromJS(prevState);
  }
};

export default CityReducer;