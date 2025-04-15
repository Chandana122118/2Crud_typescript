"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateProduct_1 = require("../validators/validateProduct");
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
router.get('/', product_controller_1.getProducts);
router.get('/:id', product_controller_1.getProduct);
router.post('/', (req, res) => {
    try {
        const validatedData = (0, validateProduct_1.validateCreateProduct)(req.body);
        (0, product_controller_1.postProduct)(res, validatedData);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
router.put('/:id', product_controller_1.updateProduct);
router.delete('/:id', product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.route.js.map