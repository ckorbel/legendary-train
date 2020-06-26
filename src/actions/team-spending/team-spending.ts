import { ThunkAction } from "redux-thunk";
import {
  TeamBaseState,
  TeamWithSpending,
  TeamSpendingState,
  TeamActionTypes,
  SetTeamSpendingAction,
  TeamSpendingError,
  GetSpendingErrorAction,
  GetAllTeamsActions,
  SetTeamLoadingAction,
  GetTeamHistoricalAction,
} from "./team-spending.types";
import { getTeamPostionSpending, getTeams } from "../../lib/team";

const nflAverageId: string = "ckbmhb9dw007n0734ywuwbiru";

const setTeamHistoricalSpending = (
  teamHistoricalSpending: TeamSpendingState,
  nflAverageSpending: TeamSpendingState
): GetTeamHistoricalAction => ({
  type: TeamActionTypes.GET_TEAM_HISTORICAL,
  teamHistoricalSpending,
  nflAverageSpending,
  loading: false,
});

const getTeamsSuccess = (payload: TeamWithSpending[]): GetAllTeamsActions => ({
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
  GetTeamHistoricalAction | GetSpendingErrorAction | SetTeamLoadingAction
> {
  return async (dispatch, getState): Promise<void> => {
    dispatch(setTeamLoading());
    try {
      const [nflAverageSpending, teamSpending] = await Promise.all([
        getTeamPostionSpending(nflAverageId),
        getTeamPostionSpending(id),
      ]);
      dispatch(setTeamHistoricalSpending(teamSpending, nflAverageSpending));
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
