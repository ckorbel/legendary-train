import {
  Team,
  IYearlyPostionalSpending,
} from "../actions/team-spending/team-spending.types";

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

export { doesTeamExist, filterCapCategories, numberWithCommas };
