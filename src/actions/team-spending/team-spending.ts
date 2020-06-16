import { ThunkAction } from "redux-thunk";
import {
  TeamBaseState,
  TeamSpendingState,
  TeamActionTypes,
  SetTeamSpendingAction,
  TeamSpendingError,
  GetSpendingErrorAction,
  GetAllTeamsActions,
  SetTeamLoadingAction,
  Team,
} from "./team-spending.types";
import { getTeamPostionSpending, getTeams } from "../../lib/team";

const setTeamSpending = (
  payload: TeamSpendingState
): SetTeamSpendingAction => ({
  type: TeamActionTypes.GET_TEAM_SPENDING_SUCCESS,
  payload,
  loading: false,
});

const getTeamsSuccess = (payload: Team[]): GetAllTeamsActions => ({
  type: TeamActionTypes.GET_ALL_TEAMS_SUCCESS,
  payload,
  loading: false,
});

const setSpendingError = (
  error: TeamSpendingError
): GetSpendingErrorAction => ({
  type: TeamActionTypes.GET_SPENDING_ERROR,
  error,
});

const setTeamLoading = (): SetTeamLoadingAction => ({
  type: TeamActionTypes.SET_TEAM_LOADING,
  loading: true,
});

export function setTeamSpendings<AppState extends TeamBaseState>(
  id: string
): ThunkAction<
  Promise<void>,
  AppState,
  {},
  SetTeamSpendingAction | GetSpendingErrorAction | SetTeamLoadingAction
> {
  return async (dispatch, getState): Promise<void> => {
    dispatch(setTeamLoading());
    try {
      const data = await getTeamPostionSpending(id);
      dispatch(setTeamSpending(data));
    } catch (err) {
      dispatch(setSpendingError(err));
      throw new Error(err);
    }
  };
}

export function getAllTeams<AppState extends TeamBaseState>(): ThunkAction<
  Promise<void>,
  AppState,
  {},
  GetAllTeamsActions | SetTeamLoadingAction | GetSpendingErrorAction
> {
  return async (dispatch, getState): Promise<any> => {
    dispatch(setTeamLoading());
    try {
      const data = await getTeams();
      dispatch(getTeamsSuccess(data));
    } catch (err) {
      dispatch(setSpendingError(err));
      throw new Error(err);
    }
  };
}
