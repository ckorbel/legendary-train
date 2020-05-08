import {
  AlertActionTypes,
  AlertState,
  AlertAction
} from "../actions/alert/alert.types";

const initialState: AlertState[] = [];

export default function(state = initialState, action: AlertAction) {
  const { type, payload } = action;
  switch (type) {
    case AlertActionTypes.REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload.id);
    case AlertActionTypes.SET_ALERT:
      return {
        ...state,
        payload
      };
    default:
      return {
        ...state
      };
  }
}
