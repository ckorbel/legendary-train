import React, { ReactElement } from "react";
import DataWorldStyled from "./DataWorldStyled";
import { ITeam } from "../CapExplorer";
import Pie from "../CapGraphs/Pie";

interface DataWorldProps {
  selectedTeam?: ITeam[];
}

const DataWorld: React.FC<DataWorldProps> = ({ selectedTeam }) => {
  return (
    <DataWorldStyled>
      Vizualizations will go here but for now
      {selectedTeam &&
        selectedTeam.map(
          (teamSpending: ITeam): ReactElement => {
            return (
              <Pie selectedTeamsData={teamSpending} key={teamSpending.id} />
            );
          }
        )}
    </DataWorldStyled>
  );
};

export default DataWorld;
