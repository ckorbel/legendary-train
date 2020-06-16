import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SidePanel from "./SidePanel/SidePanel";
import ExploreOptionsBar from "./ExplorerOptions/ExplorerOptionsBar";
import Pie from "./CapGraphs/Pie";
import { doesTeamExist } from "../../utils/cap-explorer";
import { getTeams, getTeamPostionSpending } from "../../lib/team";
import { BaseState } from "../../actions/alert/alert.types";
import {
  IYearlyPostionalSpending,
  TeamSpendingState,
  Team,
} from "../../actions/team-spending/team-spending.types";

export interface IExplorerOptionsBarState {
  positionSpending: string;
  historical: boolean;
}

interface CapExplorerProps {
  teamSpending: TeamSpendingState[];
  teams: Team[];
  getAllTeams: () => void;
  setTeamSpendings: (id: string) => void;
}

const CapExlorerStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 15% 85%;
  grid-gap: 0px;
  background: #edeef0;
  top: 40px; /* Header Height */
  bottom: 0px; /* Footer Height */
  width: 100%;
`;

const CapExplorer: React.FC<CapExplorerProps> = ({
  setTeamSpendings,
  getAllTeams,
  teamSpending,
  teams,
}) => {
  // const [teams, setTeams] = useState<Team[]>([]);
  const [selected, setSelectedTeams] = useState<Team[]>([]);
  const [formData, setFormData] = useState<IExplorerOptionsBarState>({
    positionSpending: "position",
    historical: false,
  });

  useEffect(() => {
    getAllTeams();
  }, []);

  const selectTeamToGraph = async (team: Team): Promise<any> => {
    const { id } = team;
    if (!doesTeamExist(selected, id)) {
      const teamSpending = await getTeamPostionSpending(id);
      setSelectedTeams([...selected, teamSpending]);
    }
  };

  const removeSelection = (id: string): void => {
    const newSelected: Team[] | [] = selected.filter((team: Team): boolean => {
      return team.id !== id;
    });
    setSelectedTeams(newSelected);
  };

  const handleToggle = (value: string): void => {
    setFormData({
      ...formData,
      positionSpending: value,
    } as any);
  };

  return (
    <>
      <ExploreOptionsBar formData={formData} handleToggle={handleToggle} />
      <CapExlorerStyled>
        <SidePanel teams={teams} selectTeam={selectTeamToGraph} />
        <div style={{ display: "flex" }}>
          {selected &&
            selected.map((teamSpending) => {
              return (
                <Pie
                  selectedTeamsData={teamSpending}
                  key={teamSpending.id}
                  removeSelection={removeSelection}
                />
              );
            })}
        </div>
      </CapExlorerStyled>
    </>
  );
};

// const mapState = (state: BaseState) => {
//   const { teamSpending } = state || {};
//   return {
//     teamSpending,
//   };
// };

// const mapDispatch = {
//   setTeamSpendings,
// };

export default CapExplorer;
