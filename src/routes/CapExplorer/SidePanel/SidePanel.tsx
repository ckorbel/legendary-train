import React, { useEffect } from "react";
import styled from "styled-components";
import SidePanelStyled from "./SidePanelStyled";
import { Team } from "../../../actions/team-spending/team-spending.types";

interface SidePanelProps {
  teams: Team[];
  selectTeam: (team: Team) => void;
  selectedTeamId: string | null;
}

const SidePanel: React.FC<SidePanelProps> = ({
  teams,
  selectTeam,
  selectedTeamId,
}) => {
  return (
    <SidePanelStyled>
      <h1 className="side-panel-title">2020 Cap Options</h1>
      <ul className="team-panel">
        {teams &&
          teams.map((team) => {
            return (
              <li key={team.id} className="team-item">
                <div>
                  <img
                    src={team.logo}
                    alt="team logo"
                    style={{ height: "20px" }}
                  />
                  {team.name}
                  <input
                    type="checkbox"
                    checked={selectedTeamId === team.id}
                    onClick={() => selectTeam(team)}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </SidePanelStyled>
  );
};

export default SidePanel;
