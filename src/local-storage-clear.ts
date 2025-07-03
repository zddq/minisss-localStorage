import { isSupport } from "./tool";

/**
 * 清除本地存储
 */
export default function () {
  if (!isSupport()) throw new Error("@minisss/localstorage is muse run in browser");

  localStorage.clear();
}
