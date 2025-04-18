import express from 'express';
import {Request, Response} from 'express';
import { validateCreateProduct } from '../validators/validateProduct';
import { validateGetProduct } from '../validators/validateGetProduct';

import{
    getProducts,

    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}from '../controllers/product.controller';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id',validateGetProduct,getProduct);
router.post('/', validateCreateProduct , postProduct);
router.put('/:id',validateGetProduct,validateCreateProduct,updateProduct);
router.delete('/:id',validateGetProduct,deleteProduct);

export default router;

