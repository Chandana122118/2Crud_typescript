
import {Request, Response} from 'express';

import {createPurchaseOrder} from '../services/purchase.service';

export const postPurchaseOrder = async (req:Request, res:Response)=>{
    try{
        const {productid, quantity, name }= req.body;
        const order= await createPurchaseOrder(productid,quantity,name);
        res.status(201).json(order);
    }catch (error:any){
        res.status(400).json({message:error.message});
    }
};
