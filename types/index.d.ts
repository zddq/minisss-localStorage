/// <reference path="./global.d.ts" />

/**
 * MSLocalStorage本地存储封装
 * @description 推荐使用 MSLocalStorage.create 方法创建实例, 便于后期统一维护管理
 */
declare const MSLocalStorage: IMSLocalStorageStatic<IMSLocalStorageData>;
export default MSLocalStorage;
