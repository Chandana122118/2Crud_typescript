"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetProduct = void 0;
const valibot_1 = require("valibot");
const getProductSchema_1 = require("./schema/getProductSchema");
const validateGetProduct = (req, res, next) => {
    const id = req.params;
    const result = (0, valibot_1.safeParse)(getProductSchema_1.getProductSchema, req.params);
    console.log(id);
    console.log("Welcome");
    console.log(result);
    if (!result.success) {
        res.status(400).json({ errors: result.issues });
        return;
    }
    req.body = result.output;
    next();
};
exports.validateGetProduct = validateGetProduct;
//# sourceMappingURL=validateGetProduct.js.map