import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import { TeamWithSpending } from "../../../actions/team-spending/team-spending.types";

const ConnectedScatterPlotStyled = styled.div`
  border: 1px solid red;
`;

interface ConnectedScatterPlotProps {
  selectTeamData: TeamWithSpending | null;
  nflAverageData: TeamWithSpending | null;
}

const ConnectedScatterPlot: React.FC<ConnectedScatterPlotProps> = ({
  selectTeamData,
  nflAverageData,
}) => {
  const d3Container = useRef(null);

  useEffect(() => {
    buildConnectScatterPlot();
  }, [selectTeamData, nflAverageData]);

  const buildConnectScatterPlot = () => {
    if (selectTeamData && d3Container.current) {
      const margin = { top: 10, right: 100, bottom: 30, left: 30 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

      //append svg object
      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    }
  };

  return (
    <ConnectedScatterPlotStyled>
      ConnectedScatterPlot
      {/* <svg
        viewBox="0 0 550 550"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        className="d3-component"
        ref={d3Container}
      /> */}
    </ConnectedScatterPlotStyled>
  );
};

export default ConnectedScatterPlot;
