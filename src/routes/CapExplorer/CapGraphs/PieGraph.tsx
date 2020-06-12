import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface PieGraphProps {
  data: any | number;
}

const chart_width: number = 800;
const chart_height = 400;
const padding = 50;

const PieGraph: React.FC<PieGraphProps> = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", chart_width)
        .attr("height", chart_height);

      const x_scale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max<[number, number], number>(data, (d: any) => d[0]) as number,
        ])
        .range([padding, chart_width - padding * 2]);

      const y_scale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max<[number, number], number>(data, (d) => {
            return d[1];
          }) as number,
        ])
        .range([chart_height - padding, padding]);

      //   const r_scale = d3
      //     .scaleLinear()
      //     .domain([
      //       0,
      //       d3.max(data, function(d) {
      //         return d[1]
      //       }),
      //     ])
      //     .range([5, 30])

      const a_scale = d3
        .scaleSqrt()
        .domain([
          0,
          d3.max<[number, number], number>(data, (d: any) => {
            return d[1];
          }) as number,
        ])
        .range([0, 25]);
      const xAxis = d3.axisBottom(x_scale);
      const yAxis = d3.axisLeft(y_scale);

      svg
        .append("g")
        .call(xAxis)
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + (chart_height - padding) + ")");

      svg
        .append("g")
        .call(yAxis)
        .attr("class", "y-axis")
        .attr("transform", "translate(" + padding + ")");

      svg
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d: any) {
          return x_scale(d[0]);
        })
        .attr("cy", function (d: any) {
          return y_scale(d[1]);
        })
        .attr("r", function (d: any) {
          return a_scale(d[1]);
        })
        .attr("fill", "#D1AB0E");
    }
  }, [data]);

  return (
    <div style={{ border: "1px solid red" }}>
      <svg
        className="d3-component"
        width={800}
        height={400}
        ref={d3Container}
      />
    </div>
  );
};

export default PieGraph;
