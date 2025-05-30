"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: false }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=product.model.js.map