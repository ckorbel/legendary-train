import React, { useEffect } from "react";
import SidePanelStyled from "./SidePanelStyled";
import { ITeam } from "../CapExplorer";

interface SidePanelProps {
  teams: ITeam[];
  selectTeam: (team: ITeam) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ teams, selectTeam }) => {
  return (
    <SidePanelStyled>
      <h1 className="side-panel-title">2020 Cap Options</h1>
      <ul className="team-panel">
        {teams &&
          teams.map((team) => {
            return (
              <li
                key={team.id}
                className="team-item"
                onClick={() => selectTeam(team)}
              >
                <div>
                  <img
                    src={team.logo}
                    alt="team logo"
                    style={{ height: "20px" }}
                  />
                  {team.name}
                </div>
              </li>
            );
          })}
      </ul>
    </SidePanelStyled>
  );
};

export default SidePanel;
