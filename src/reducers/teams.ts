import {
  TeamBaseState,
  TeamSpendingAction,
  TeamActionTypes,
} from "../actions/team-spending/team-spending.types";

const initialState: TeamBaseState = {
  nflAverageSpending: [],
  teamHistoricalSpending: [],
  teams: [],
  loading: false,
};

export default function (state = initialState, action: TeamSpendingAction) {
  switch (action.type) {
    case TeamActionTypes.GET_TEAM_SPENDING_SUCCESS:
      return {
        ...state,
        teamHistoricalSpending: action.payload,
        loading: false,
      };
    case TeamActionTypes.GET_TEAM_HISTORICAL:
      const { teamHistoricalSpending, nflAverageSpending } = action;
      return {
        ...state,
        teamHistoricalSpending,
        nflAverageSpending,
        loading: false,
      };
    case TeamActionTypes.GET_SPENDING_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case TeamActionTypes.GET_ALL_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        loading: false,
      };
    case TeamActionTypes.SET_TEAM_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
}
