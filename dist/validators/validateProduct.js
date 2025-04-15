"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateProduct = void 0;
const valibot_1 = require("valibot");
const productSchema_1 = require("../schema/productSchema");
const validateCreateProduct = (body) => {
    const result = (0, valibot_1.safeParse)(productSchema_1.createProductSchema, body);
    if (!result.success) {
        throw result.issues;
    }
    return result.output;
};
exports.validateCreateProduct = validateCreateProduct;
//# sourceMappingURL=validateProduct.js.map