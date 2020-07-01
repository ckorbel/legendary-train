import React, { useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const DonutGraphStyled = styled.div`
  border: 1px solid blue;
`;

const DonutGraph = () => {
  const d3Container = useRef(null);
  return (
    <DonutGraphStyled>
      DonutGraph
      {/* <svg
        viewBox="0 0 550 550"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        className="d3-component"
        ref={d3Container}
      /> */}
    </DonutGraphStyled>
  );
};

export default DonutGraph;
