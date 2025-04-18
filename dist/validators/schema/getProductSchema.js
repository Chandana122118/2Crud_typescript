"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductSchema = void 0;
const valibot_1 = require("valibot");
exports.getProductSchema = (0, valibot_1.object)({
    id: (0, valibot_1.pipe)((0, valibot_1.string)(), (0, valibot_1.uuid)())
});
//# sourceMappingURL=getProductSchema.js.map