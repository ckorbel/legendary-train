interface IYearlyPostionalSpending {
  [key: string]: number | undefined | string;
  id?: string;
  qb?: number;
  rb?: number;
  wr?: number;
  te?: number;
  ol?: number;
  dl?: number;
  lb?: number;
  s?: number;
  cb?: number;
  year?: number;
  Defense?: number;
  Offense?: number;
}

export function numberWithCommas(cash: number): string {
  return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// export function calculateSpendingTotal(
//   spendingObj: IYearlyPostionalSpending
// ): number {
//   let sum = 0;
//   for (let key in spendingObj) {
//   }
// }

export function filterCapCategories(
  spendingObj: IYearlyPostionalSpending,
  fitlerObj: IYearlyPostionalSpending
): IYearlyPostionalSpending {
  for (let key in spendingObj) {
    if (key in fitlerObj) {
      delete spendingObj[`${key}`];
    }
  }
  return spendingObj;
}
