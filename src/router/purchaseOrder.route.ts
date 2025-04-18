
import express from 'express';
import {postPurchaseOrder} from '../controllers/purchaseOrder.controller';

const router= express.Router();
router.post('/', postPurchaseOrder);

 export default router;
