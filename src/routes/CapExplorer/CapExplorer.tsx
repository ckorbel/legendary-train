import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SidePanel from "./SidePanel/SidePanel";
import ExploreOptionsBar from "./ExplorerOptions/ExplorerOptionsBar";
import Pie from "./CapGraphs/Pie";
import { doesTeamExist } from "../../utils/cap-explorer";
import { getTeamPostionSpending } from "../../lib/team";
import { BaseState } from "../../actions/alert/alert.types";
import { filterCapCategories } from "../../utils/cap-explorer";
import {
  IYearlyPostionalSpending,
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

interface CapExplorerProps {
  teamSpending: TeamSpendingState[];
  teams: TeamWithSpending[];
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
  const [selected, setSelectedTeams] = useState<TeamWithSpending[]>([]);
  const [formData, setFormData] = useState<IExplorerOptionsBarState>({
    positionSpending: "position",
    historical: false,
  });

  useEffect(() => {
    getAllTeams();
    setTeamSpendings("ckb12b09m003e0734ze6gn35f");
  }, []);

  const selectTeamToGraph = async (team: Team): Promise<any> => {
    const { id } = team;
    if (!doesTeamExist(selected, id)) {
      const teamSpending = await getTeamPostionSpending(id);
      setSelectedTeams([...selected, teamSpending]);
    }
  };

  const removeSelection = (id: string): void => {
    const newSelected: TeamWithSpending[] | [] = selected.filter(
      (team: TeamWithSpending): boolean => {
        return team.id !== id;
      }
    );
    setSelectedTeams(newSelected);
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
                  selectedData={formData.positionSpending}
                  positionalSpending={fitleredToPosition(teamSpending)}
                />
              );
            })}
        </div>
      </CapExlorerStyled>
    </>
  );
};

export default CapExplorer;
