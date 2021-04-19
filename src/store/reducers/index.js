import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import WeatherReducer from "./WeatherReducer";


export default combineReducers({
  general: GeneralReducer,
  weather: WeatherReducer,
});
