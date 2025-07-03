import { getFullKeyStr, isSupport } from "./tool";

/**
 * 删除指定 key 值
 * @param {string} key 键
 * @param {IMSLocalStorageConfig} config 配置
 * @returns void
 */
export default function (key: string, config: IMSLocalStorageConfig = {}) {
  if (!isSupport()) throw new Error("@minisss/localstorage is muse run in browser");

  return localStorage.removeItem(getFullKeyStr(key, config));
}
