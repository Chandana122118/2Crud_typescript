"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateProduct_1 = require("../validators/validateProduct");
const validateGetProduct_1 = require("../validators/validateGetProduct");
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
router.get('/', product_controller_1.getProducts);
router.get('/:id', validateGetProduct_1.validateGetProduct, product_controller_1.getProduct);
router.post('/', validateProduct_1.validateCreateProduct, product_controller_1.postProduct);
router.put('/:id', product_controller_1.updateProduct);
router.delete('/:id', product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.route.js.map