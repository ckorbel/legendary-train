import { combineReducers } from "redux";
import alert from "./alert";
import team from "./teams";

export default combineReducers({
  alert,
  team,
});
