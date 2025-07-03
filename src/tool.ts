/**
 * 获取完整存储的 key
 * @param key 键
 * @param config 配置项
 * @returns string
 */
export function getFullKeyStr(key: string, config: IMSLocalStorageConfig = {}) {
  const keyStr = String(key).trim();
  if (!config.prefix) return keyStr;

  const prefixStr = String(config.prefix || "").trim();
  return prefixStr ? `${prefixStr}_${keyStr}` : `${keyStr}`;
}

/**
 * 判断是否支持本地存储
 * @returns boolean
 */
export function isSupport() {
  try {
    return !!window.localStorage;
  } catch (error) {
    return false;
  }
}
