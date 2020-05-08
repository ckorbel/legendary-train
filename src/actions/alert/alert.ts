import uuid from "uuid";
import {
  BaseState,
  AlertState,
  SetAlertAction,
  RemoveAlertAction,
  AlertActionTypes
} from "./alert.types";
import { ThunkAction } from "redux-thunk";

const setAlert = (payload: AlertState): SetAlertAction => ({
  type: AlertActionTypes.SET_ALERT,
  payload
});

const removeAlert = (payload: AlertState): RemoveAlertAction => ({
  type: AlertActionTypes.REMOVE_ALERT,
  payload
});

export const setAlerts = (
  msg: string,
  alertType: string
): ThunkAction<void, BaseState, unknown, SetAlertAction> => dispatch => {
  const id = uuid.v4();
  const payload = {
    id,
    msg,
    alertType
  };
  dispatch(setAlert(payload));
};

export const removeAlerts = (
  msg: string,
  alertType: string
): ThunkAction<void, BaseState, void, RemoveAlertAction> => dispatch => {
  const id = uuid.v4();
  const payload = {
    id,
    msg,
    alertType
  };
  dispatch(removeAlert(payload));
};
