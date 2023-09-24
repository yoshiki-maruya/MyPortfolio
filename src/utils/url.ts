// utility関数なのでdefaultエクスポートしない
/* eslint-disable import/prefer-default-export */

import { Url } from "next/dist/shared/lib/router/router";

/**
 * sidebarListの中身をURLPathの形式にして返却する
 * @param item
 */
export function createUrl(item: string): Url {
  const trimUrl = item.replace(/\s+/g, "");
  const lowerUrl = "/" + trimUrl.toLowerCase();
  return lowerUrl;
}
