import PKG from "../package.json";

import key from "./ls-key";
import get from "./ls-get";
import set from "./ls-set";
import del from "./ls-del";
import clear from "./ls-clear";
import has from "./ls-has";
import len from "./ls-len";
import create from "./ls-create";

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
