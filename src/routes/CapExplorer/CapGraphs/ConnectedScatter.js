import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import { TeamWithSpending } from "../../../actions/team-spending/team-spending.types";

const ConnectedScatterPlotStyled = styled.div`
  border: 1px solid red;
  .d3-component {
    border: 1px solid green;
  }
`;

// interface ConnectedScatterPlotProps {
//   selectTeamData: TeamWithSpending | null;
//   nflAverageData: TeamWithSpending | null;
// }

// interface DataPoint {
//   time: string;
//   value: number;
// }

const ConnectedScatterPlot = ({ selectTeamData, nflAverageData }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    buildConnectScatterPlot();
  }, [selectTeamData, nflAverageData]);

  const buildConnectScatterPlot = () => {
    // if (selectTeamData && d3Container.current) {
    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 100, bottom: 30, left: 30 };
    // width = 460 - margin.left - margin.right,
    // height = 400 - margin.top - margin.bottom;
    const width = 1200;
    const height = 700;

    // append the svg object to the body of the page
    const svg = d3
      .select(d3Container.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //replace
    const allGroup = ["valueA", "valueB"];

    const dataReady = [
      {
        name: "Offense",
        values: [
          { time: "2013", value: 50 },
          { time: "2014", value: 52 },
          { time: "2015", value: 47 },
          { time: "2016", value: 62 },
          { time: "2017", value: 68 },
          { time: "2018", value: 72 },
          { time: "2019", value: 78 },
          { time: "2020", value: 84 },
        ],
      },
      {
        name: "Defense",
        values: [
          { time: "2013", value: 62 },
          { time: "2014", value: 54 },
          { time: "2015", value: 64 },
          { time: "2016", value: 55 },
          { time: "2017", value: 48 },
          { time: "2018", value: 51 },
          { time: "2019", value: 31 },
          { time: "2020", value: 24 },
        ],
      },
    ];

    const myColor = d3
      .scaleOrdinal(allGroup)
      .domain(allGroup)
      .range(d3.schemeSet2);

    //Add X axis
    const x = d3.scaleLinear().domain([2013, 2020]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    //add Y axis
    const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the lines
    const line = d3
      .line()
      .x(function (d) {
        return x(+d.time);
      })
      .y(function (d) {
        return y(+d.value);
      });
    svg
      .selectAll("myLines")
      .data(dataReady)
      .enter()
      .append("path")
      .attr("d", function (d) {
        return line(d.values);
      })
      .attr("stroke", function (d) {
        return myColor(d.name);
      })
      .style("stroke-width", 4)
      .style("fill", "none");

    // Add the points
    svg
      // First we need to enter in a group
      .selectAll("myDots")
      .data(dataReady)
      .enter()
      .append("g")
      .style("fill", function (d) {
        return myColor(d.name);
      })
      // Second we need to enter in the 'values' part of this group
      .selectAll("myPoints")
      .data(function (d) {
        return d.values;
      })
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.time);
      })
      .attr("cy", function (d) {
        return y(d.value);
      })
      .attr("r", 5)
      .attr("stroke", "white");

    // Add a legend at the end of each line
    svg
      .selectAll("myLabels")
      .data(dataReady)
      .enter()
      .append("g")
      .append("text")
      .datum(function (d) {
        return { name: d.name, value: d.values[d.values.length - 1] };
      }) // keep only the last value of each time series
      .attr("transform", function (d) {
        return "translate(" + x(d.value.time) + "," + y(d.value.value) + ")";
      }) // Put the text at the position of the last point
      .attr("x", 12) // shift the text a bit more right
      .text(function (d) {
        return d.name;
      })
      .style("fill", function (d) {
        return myColor(d.name);
      })
      .style("font-size", 15);
    // }
  };

  return (
    <ConnectedScatterPlotStyled>
      <div className="d3-component" ref={d3Container}></div>
    </ConnectedScatterPlotStyled>
  );
};

export default ConnectedScatterPlot;
