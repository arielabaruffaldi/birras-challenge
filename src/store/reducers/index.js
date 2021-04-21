import { combineReducers } from "redux";
import GeneralReducer from "./GeneralReducer";
import WeatherReducer from "./WeatherReducer";
import MeetReducer from "./MeetReducer";



export default combineReducers({
  general: GeneralReducer,
  weather: WeatherReducer,
  meet: MeetReducer,
});
