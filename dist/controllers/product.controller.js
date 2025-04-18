"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
const product_service_1 = require("../services/product.service");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.findAllProducts)();
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.findProductById)(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    ;
});
exports.getProduct = getProduct;
const postProduct = (req, res) => {
    console.log("Hello");
    console.log(req.body);
    const ProductData = (0, product_service_1.CreateProduct)(req.body);
    res.status(201).json({ message: 'User created' });
};
exports.postProduct = postProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Updated_product = yield (0, product_service_1.UpdateProductById)(id, req.body);
        if (!Updated_product) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(Updated_product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    ;
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield (0, product_service_1.DeleteProductById)(id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted Successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    ;
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map