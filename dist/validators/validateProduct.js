"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateProduct = void 0;
const valibot_1 = require("valibot");
const productSchema_1 = require("./schema/productSchema");
const validateCreateProduct = (req, res, next) => {
    const result = (0, valibot_1.safeParse)(productSchema_1.createProductSchema, req.body);
    console.log(result);
    if (!result.success) {
        res.status(400).json({ errors: result.issues });
        return;
    }
    req.body = result.output;
    next();
};
exports.validateCreateProduct = validateCreateProduct;
//# sourceMappingURL=validateProduct.js.map