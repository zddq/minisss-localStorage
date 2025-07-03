import PKG from "../package.json";

import key from "./local-storage-key";
import get from "./local-storage-get";
import set from "./local-storage-set";
import del from "./local-storage-del";
import clear from "./local-storage-clear";
import has from "./local-storage-has";
import len from "./local-storage-len";

import { isSupport } from "./tool";

/**
 * 创建实例
 * @param {IMSLocalStorageConfig} initConfig 初始化配置
 * @returns {IMSLocalStorageInstance} MSLocalStorage instance
 */
export default function create(initConfig: IMSLocalStorageConfig = {}) {
  const instance = Object.create(null);
  instance.VERSION = PKG.version;
  instance.key = function (index: number) {
    return key(index);
  };
  instance.get = function (key: string, config: IMSLocalStorageConfig = {}) {
    return get(key, { ...initConfig, ...config });
  };
  instance.set = function (key: string, data: any, config: IMSLocalStorageConfig = {}) {
    return set(key, data, { ...initConfig, ...config });
  };
  instance.del = function (key: string, config: IMSLocalStorageConfig = {}) {
    return del(key, { ...initConfig, ...config });
  };
  instance.clear = function () {
    return clear();
  };
  instance.has = function (key: string, config: IMSLocalStorageConfig = {}) {
    return has(key, { ...initConfig, ...config });
  };
  return new Proxy(instance, {
    get(target, key) {
      if (key === "length") return len();
      if (key === "isSupport") return isSupport();
      return target[key];
    },
  });
}
