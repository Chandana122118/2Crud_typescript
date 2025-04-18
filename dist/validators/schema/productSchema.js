"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductSchema = void 0;
const valibot_1 = require("valibot");
exports.createProductSchema = (0, valibot_1.object)({
    name: (0, valibot_1.pipe)((0, valibot_1.string)(), (0, valibot_1.minLength)(7)),
    quantity: (0, valibot_1.pipe)((0, valibot_1.number)(), (0, valibot_1.maxValue)(100, 'quantity should not be greater than 100')),
    price: (0, valibot_1.pipe)((0, valibot_1.number)(), (0, valibot_1.minValue)(100, 'price should be minimum 100'))
});
//# sourceMappingURL=productSchema.js.map