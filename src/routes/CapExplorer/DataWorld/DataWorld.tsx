import React from "react";
import DataWorldStyled from "./DataWorldStyled";
import { numberWithCommas } from "../../../utils/cap-explorer";
import { ITeam, IYearlyPostionalSpending } from "../CapExplorer";

interface DataWorldProps {
  selectedTeam?: ITeam[];
}

const DataWorld: React.FC<DataWorldProps> = ({ selectedTeam }) => {
  return (
    <DataWorldStyled>
      Vizualizations will go here but for now
      {selectedTeam &&
        selectedTeam.map((team) => {
          return (
            <div key={team.id}>
              {team.name}
              {team.logo}
              {team.yearlyPostSpending.map((year: IYearlyPostionalSpending) => {
                return <div>${numberWithCommas(year.Defense)}</div>;
              })}
            </div>
          );
        })}
    </DataWorldStyled>
  );
};

export default DataWorld;
