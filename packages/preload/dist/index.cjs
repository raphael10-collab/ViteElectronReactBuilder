"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const crypto = require("crypto");
function sha256sum(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}
const versions = process.versions;
exports.sha256sum = sha256sum;
exports.versions = versions;
const { contextBridge } = require("electron");
;
contextBridge.exposeInMainWorld("__electron_preload__sha256sum", exports.sha256sum);
;
contextBridge.exposeInMainWorld("__electron_preload__versions", exports.versions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7In0=
