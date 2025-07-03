import del from "./local-storage-del";
import { getFullKeyStr, isSupport } from "./tool";

/**
 * 获取指定 key 值
 * @param {string} key 键
 * @param {IMSLocalStorageConfig} config 配置
 * @returns {any} any
 */
export default function (key: string, config?: IMSLocalStorageConfig) {
  if (!isSupport()) throw new Error("@minisss/localstorage is muse run in browser");

  const tmpVal = localStorage.getItem(getFullKeyStr(key, config));
  if (!tmpVal) return tmpVal;

  try {
    const res: IMSLocalStorageStore = JSON.parse(tmpVal);
    if (!res) return null;
    // 校验数据时间有效性
    if (res.maxAge && res.maxAge <= Date.now()) return del(key, config);
    return res.data;
  } catch (error) {
    return tmpVal;
  }
}
