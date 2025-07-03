import PKG from "../package.json";

import key from "./local-storage-key";
import get from "./local-storage-get";
import set from "./local-storage-set";
import del from "./local-storage-del";
import clear from "./local-storage-clear";
import has from "./local-storage-has";
import len from "./local-storage-len";
import create from "./local-storage-create";

import { isSupport } from "./tool";

export default {
  get VERSION() {
    return PKG.version;
  },
  get length() {
    return len();
  },
  get isSupport() {
    return isSupport();
  },

  key,
  get,
  set,
  del,
  clear,
  has,
  create,
};
