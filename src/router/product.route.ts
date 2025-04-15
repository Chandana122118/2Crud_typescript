import express from 'express';
import {Request, Response} from 'express';
//import { safeParse } from 'valibot';
//import { createUserSchema } from '../schema/userSchema';
import { validateCreateProduct } from '../validators/validateProduct';



import{
    getProducts,

    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}from '../controllers/product.controller';

const router = express.Router();

router.get('/',getProducts);
router.get('/:id',getProduct);
// router.post('/', postProduct);
router.post('/', (req: Request, res: Response) => {
    try {
      const validatedData = validateCreateProduct(req.body);
      postProduct(res, validatedData);
    } catch (error) {
      res.status(400).json({ error });
    }
  });
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;

