import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IExplorerOptionsBarState } from "../CapExplorer";

interface IExplorerOptionsBarProps {
  formData: IExplorerOptionsBarState;
  handleToggle: (value: string) => void;
}

const ExplorerOptionsBar: React.FC<IExplorerOptionsBarProps> = ({
  formData,
  handleToggle,
}) => {
  const { positionSpending } = formData;
  return (
    <div>
      <form>
        <label>Positonal</label>
        <input
          type="checkbox"
          onChange={() => handleToggle("position")}
          name="position"
          value="position"
          checked={positionSpending === "position"}
        />
        <label>Offense and Defense</label>
        <input
          type="checkbox"
          onChange={() => handleToggle("team")}
          name="team"
          value="team"
          checked={positionSpending === "team"}
        />
      </form>
    </div>
  );
};

export default ExplorerOptionsBar;
