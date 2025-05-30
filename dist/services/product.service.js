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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductById = exports.UpdateProductById = exports.CreateProduct = exports.findProductById = exports.findAllProducts = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const findAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.find({});
});
exports.findAllProducts = findAllProducts;
const findProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findById(id);
});
exports.findProductById = findProductById;
const CreateProduct = (ProductData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.create(ProductData);
});
exports.CreateProduct = CreateProduct;
const UpdateProductById = (id, ProductData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findByIdAndUpdate(id, ProductData, {
        new: true,
        runvalidators: true
    });
});
exports.UpdateProductById = UpdateProductById;
const DeleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.findByIdAndDelete(id);
});
exports.DeleteProductById = DeleteProductById;
//# sourceMappingURL=product.service.js.map