import {
  Team,
  IYearlyPostionalSpending,
  TeamWithSpending,
  TeamSpendingState,
} from "../actions/team-spending/team-spending.types";

interface BallSideSpending {
  year: number;
  Offense: number;
  Defense: number;
}

function numberWithCommas(cash: number): string {
  return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function doesTeamExist(teams: Team[], id: string): boolean {
  return teams.some((team) => {
    return team.id === id;
  });
}

function filterCapCategories(
  spendingObj: IYearlyPostionalSpending,
  fitlerObj: any
): IYearlyPostionalSpending {
  for (let key in spendingObj) {
    if (key in fitlerObj) {
      delete spendingObj[`${key}`];
    }
  }
  return spendingObj;
}

function convertToPercentage(spendingObj: BallSideSpending): BallSideSpending {
  const { Offense, Defense } = spendingObj;
  const sum = Offense + Defense;
  return {
    year: spendingObj.year,
    Offense: sum / Offense,
    Defense: sum / Defense,
  };
}

function createLabelsByYear(spendingArr: BallSideSpending[]): number[] {
  const yearLabels = [];
  for (let i = 0; i < spendingArr.length; i++) {
    yearLabels.push(spendingArr[i].year);
  }
  return yearLabels;
}

function parseSpending(teamData: TeamWithSpending): TeamSpendingState {
  const { yearlyPostSpending } = teamData;
  teamData["sideOfBallSpending"] = [];
  yearlyPostSpending.forEach((yearData, index) => {
    const { Offense, Defense, year } = yearData;
    const sideOfBall = {
      Offense,
      Defense,
      year,
    };
    delete yearData.Offense;
    delete yearData.Defense;
    delete yearData.__typename;
    delete yearData.id;
    teamData.sideOfBallSpending.push(sideOfBall);
  });
  return teamData;
}

export {
  doesTeamExist,
  filterCapCategories,
  numberWithCommas,
  convertToPercentage,
  createLabelsByYear,
  parseSpending,
};
