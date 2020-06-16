import { TeamBaseState } from "../team-spending/team-spending.types";
export const SET_ALERT: "SET_ALERT" = "SET_ALERT";
export const REMOVE_ALERT: "REMOVE_ALERT" = "REMOVE_ALERT";

export interface AlertState {
  id: string;
  msg: string;
  alertType: string;
}
export interface BaseState {
  alert: AlertState;
  team: TeamBaseState;
}

export enum AlertActionTypes {
  SET_ALERT = "SET_ALERT",
  REMOVE_ALERT = "REMOVE_ALERT",
}
export interface SetAlertAction {
  type: AlertActionTypes.SET_ALERT;
  payload: AlertState;
}

export interface RemoveAlertAction {
  type: AlertActionTypes.REMOVE_ALERT;
  payload: AlertState;
}

export type AlertAction = SetAlertAction | RemoveAlertAction;
