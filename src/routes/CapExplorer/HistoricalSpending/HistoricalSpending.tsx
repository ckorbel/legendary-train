import React, { useRef } from "react";
import styled from "styled-components";
import ConnectedScatterPlot from "../CapGraphs/ConnectedScatter";
import DonutGraph from "../CapGraphs/DonutGraph";
import { TeamWithSpending } from "../../../actions/team-spending/team-spending.types";

const HistoricalSpendingStyled = styled.div`
  border: 2px solid green;
  display: grid;
  width: 100%;

  .donut-column {
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    grid-gap: 0px;
    background: #edeef0;
    top: 40px;
    bottom: 0px;
    width: 100%;
  }
`;

interface HistoricalSpendingProps {
  nflAverageSpending: TeamWithSpending | null;
  teamHistoricalSpending: TeamWithSpending | null;
}

const HistoricalSpending: React.FC<HistoricalSpendingProps> = ({
  teamHistoricalSpending,
  nflAverageSpending,
}) => {
  return (
    <HistoricalSpendingStyled>
      <ConnectedScatterPlot
        selectTeamData={teamHistoricalSpending}
        nflAverageData={nflAverageSpending}
      />
      <div className="donut-column">
        <DonutGraph />
        <DonutGraph />
      </div>
    </HistoricalSpendingStyled>
  );
};

export default HistoricalSpending;
