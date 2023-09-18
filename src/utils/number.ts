// utility関数なのでdefaultエクスポートしない
/* eslint-disable import/prefer-default-export */

/**
 * 入力値を必ず正の整数にする。NaNだった場合は0を返す
 * @param num
 */
export function makePositiveInt(num: number): number {
  if (Number.isNaN(num)) return 0;
  return Math.round(Math.abs(num));
}
