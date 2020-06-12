import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SidePanel from "./SidePanel/SidePanel";
import DataWorld from "./DataWorld/DataWorld";
import Pie from "./CapGraphs/Pie";

import { getTeams, getTeamPostionSpending } from "../../lib/team";

export interface IYearlyPostionalSpending {
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
  Defense: number;
  Offense: number;
}

export interface ITeam {
  id: string;
  name: string;
  location: string;
  division: string;
  logo: string;
  abbrv_location: string;
  yearlyPostSpending: IYearlyPostionalSpending[];
}

const CapExlorerStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 15% 85%;
  grid-gap: 20px;
  background: #edeef0;
  top: 40px; /* Header Height */
  bottom: 0px; /* Footer Height */
  width: 100%;
`;

const CapExlorer: React.FC = () => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [selected, setSelectedTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    async function getTeam() {
      const teams = await getTeams();
      setTeams(teams);
    }

    getTeam();
  }, []);

  const selectTeamToGraph = async (team: ITeam): Promise<any> => {
    const { id } = team;
    const teamSpending = await getTeamPostionSpending(id);
    setSelectedTeams([...selected, teamSpending]);
  };

  return (
    <CapExlorerStyled>
      <SidePanel teams={teams} selectTeam={selectTeamToGraph} />
      <div style={{ display: "flex" }}>
        {selected &&
          selected.map((teamSpending) => {
            return (
              <Pie selectedTeamsData={teamSpending} key={teamSpending.id} />
            );
          })}
      </div>
    </CapExlorerStyled>
  );
};

export default CapExlorer;
