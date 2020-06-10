export function numberWithCommas(cash: number): string {
  return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
