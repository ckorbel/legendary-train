import { connect } from "react-redux";
import CapExplorer from "./CapExplorer";
import { BaseState } from "../../actions/alert/alert.types";
import {
  setTeamSpendings,
  getAllTeams,
} from "../../actions/team-spending/team-spending";

const mapState = (state: BaseState) => {
  const { team } = state;
  const { teams, teamHistoricalSpending } = team;
  return {
    teams,
    teamHistoricalSpending,
  };
};

const mapDispatch = {
  setTeamSpendings,
  getAllTeams,
};

export default connect(mapState, mapDispatch)(CapExplorer);
