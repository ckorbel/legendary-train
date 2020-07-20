export interface IYearlyPostionalSpending {
  [key: string]: number | undefined | string;
  id: string;
  qb: number;
  rb: number;
  wr: number;
  te: number;
  ol: number;
  dl: number;
  lb: number;
  s: number;
  cb: number;
  year: number;
}

export interface SideOfBallSpending {
  [key: string]: any;
  Offense: number;
  Defense: number;
}

export interface Team {
  [key: string]: any;
  id: string;
  name: string;
  location: string;
  division: string;
  logo: string;
  abbrv_location: string;
}

export interface TeamWithSpending extends Team {
  yearlyPostSpending: IYearlyPostionalSpending[];
}

export interface PostitionalSpending {
  qb: number;
  rb: number;
  wr: number;
  te: number;
  ol: number;
  dl: number;
  lb: number;
  s: number;
  cb: number;
  year: number;
}

export interface TeamSpendingState {
  [key: string]: any;
  id: string;
  name: string;
  location: string;
  division: string;
  logo: string;
  abbrv_location: string;
  sideOfBallSpending?: SideOfBallSpending[];
  yearlyPostSpending: PostitionalSpending[];
}

export interface TeamBaseState {
  nflAverageSpending: TeamWithSpending | null;
  teamHistoricalSpending: TeamWithSpending | null;
  teams: TeamWithSpending[];
  loading: boolean;
}

export type TeamSpendingError = null | string;

export const GET_TEAM_SPENDING_SUCCESS: "GET_TEAM_SPENDING_SUCCESS" =
  "GET_TEAM_SPENDING_SUCCESS";
export const GET_SPENDING_ERROR: "GET_SPENDING_ERROR" = "GET_SPENDING_ERROR";
export const GET_ALL_TEAMS_SUCCESS: "GET_ALL_TEAMS_SUCCESS" =
  "GET_ALL_TEAMS_SUCCESS";
export const SET_TEAM_LOADING: "SET_TEAM_LOADING" = "SET_TEAM_LOADING";

export enum TeamActionTypes {
  SET_TEAM_LOADING = "SET_TEAM_LOADING",
  GET_TEAM_SPENDING_SUCCESS = "GET_TEAM_SPENDING_SUCCESS",
  GET_SPENDING_ERROR = "GET_SPENDING_ERROR",
  GET_ALL_TEAMS_SUCCESS = "GET_ALL_TEAMS_SUCCESS",
  GET_TEAM_HISTORICAL = "GET_TEAM_HISTORICAL",
}

export interface GetTeamHistoricalAction {
  type: TeamActionTypes.GET_TEAM_HISTORICAL;
  teamHistoricalSpending: TeamSpendingState;
  nflAverageSpending: TeamSpendingState;
  loading: false;
}

export interface SetTeamSpendingAction {
  type: TeamActionTypes.GET_TEAM_SPENDING_SUCCESS;
  payload: TeamSpendingState;
  loading: false;
}

export interface GetSpendingErrorAction {
  type: TeamActionTypes.GET_SPENDING_ERROR;
  error: null | string;
}

export interface SetTeamLoadingAction {
  type: TeamActionTypes.SET_TEAM_LOADING;
  loading: boolean;
}

export interface GetAllTeamsActions {
  type: TeamActionTypes.GET_ALL_TEAMS_SUCCESS;
  payload: Team[];
  loading: false;
}

export type TeamSpendingAction =
  | SetTeamSpendingAction
  | GetSpendingErrorAction
  | GetAllTeamsActions
  | SetTeamLoadingAction
  | GetTeamHistoricalAction;
