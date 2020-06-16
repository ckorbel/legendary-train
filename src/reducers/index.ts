import { combineReducers } from "redux";
import alert from "./alert";
import team from "./teamSpending";

export default combineReducers({
  alert,
  team,
});
