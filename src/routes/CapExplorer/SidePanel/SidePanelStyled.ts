import styled from "styled-components";

const SidePanelStyled = styled.section`
  background: #fff;
  border-radius: 10px;

  .side-panel-title {
    font-size: 24px;
  }
  .team-panel {
    padding-left: 0;
    margin
  }

  .team-item {
    list-style-type: none;
    background-color: #edeef0;
    display: block;
    margin-left: 10px;
    height: 32px;
    border: 1px solid black;

    div:hover {
      background: #fff;
    }

    img {
      margin-right: 8px;
    }

    .team-item:hover {
      background-color: red;
    }
  }
`;

export default SidePanelStyled;
