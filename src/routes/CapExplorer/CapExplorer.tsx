import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SidePanel from "./SidePanel/SidePanel";
import Pie from "./CapGraphs/Pie";
import HistoricalSpending from "./HistoricalSpending/HistoricalSpending";
import { doesTeamExist } from "../../utils/cap-explorer";
import { getTeamPostionSpending } from "../../lib/team";
import { BaseState } from "../../actions/alert/alert.types";
import { filterCapCategories } from "../../utils/cap-explorer";
import {
  TeamSpendingState,
  PostitionalSpending,
  SideOfBallSpending,
  TeamWithSpending,
  Team,
} from "../../actions/team-spending/team-spending.types";

export interface IExplorerOptionsBarState {
  positionSpending: string;
  historical: boolean;
}

interface CapExlorerState {
  view: "team" | "teams";
}

interface CapExplorerProps {
  nflAverageSpending: TeamWithSpending | null;
  teamSpending: TeamSpendingState[];
  teams: TeamWithSpending[];
  getAllTeams: () => void;
  setTeamSpendings: (id: string) => void;
  teamHistoricalSpending: TeamWithSpending | null;
  selectedTeamId: string | null;
}

const ExplorerOptionsBarStyled = styled.div`
  border: 1px solid purple;
  height: 120px;
`;

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
  nflAverageSpending,
  setTeamSpendings,
  getAllTeams,
  teamHistoricalSpending,
  selectedTeamId,
  teams,
}) => {
  const [selected, setSelectedTeams] = useState<TeamWithSpending[]>([]);
  const [formData, setFormData] = useState<CapExlorerState>({
    view: "team",
  });

  useEffect(() => {
    getAllTeams();
  }, []);

  const selectTeamToGraph = async (team: Team): Promise<any> => {
    const { view } = formData;
    const { id } = team;
    setTeamSpendings(id);
  };

  const removeSelection = (id: string): void => {
    const newSelected: TeamWithSpending[] | [] = selected.filter(
      (team: TeamWithSpending): boolean => {
        return team.id !== id;
      }
    );
    setSelectedTeams(newSelected);
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    } as any);
  };

  const handleToggle = (value: string): void => {
    setFormData({
      ...formData,
      positionSpending: value,
    } as any);
  };

  const fitleredToPosition = (
    spendObj: TeamWithSpending
  ): SideOfBallSpending | PostitionalSpending | null => {
    if (!spendObj) return null;
    const filterObj: any = {
      id: 1,
      __typename: "",
      year: "",
      Offense: 0,
      Defense: 0,
    };
    return filterCapCategories(spendObj?.yearlyPostSpending?.[0], filterObj);
  };

  return (
    <>
      <ExplorerOptionsBarStyled>
        <form>
          <label>Historical</label>
          <select
            name="view"
            value={formData.view}
            onChange={handleSelectChange}
          >
            <option value="team">Single Team</option>
            <option value="teams">Teams</option>
          </select>
        </form>
      </ExplorerOptionsBarStyled>
      <CapExlorerStyled>
        <SidePanel
          teams={teams}
          selectTeam={selectTeamToGraph}
          selectedTeamId={selectedTeamId}
        />
        <div>
          {formData.view === "team" ? (
            <HistoricalSpending
              nflAverageSpending={nflAverageSpending}
              teamHistoricalSpending={teamHistoricalSpending}
            />
          ) : (
            <div>Other option</div>
          )}

          {/* {selected &&
            selected.map((teamSpending) => {
              return (
                <Pie
                  selectedTeamsData={teamSpending}
                  key={teamSpending.id}
                  removeSelection={removeSelection}
                  selectedData={formData.positionSpending}
                  positionalSpending={fitleredToPosition(teamSpending)}
                />
              );
            })} */}
        </div>
      </CapExlorerStyled>
    </>
  );
};

export default CapExplorer;
