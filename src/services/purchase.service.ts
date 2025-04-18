import PurchaseOrder from '../models/purchaseOrder.model';
import Product from '../models/product.model';


export const createPurchaseOrder = async(productid:string, quantity:number, name: string)=>{
 
        const product = await Product.findById(productid);
        if(!product)
            {throw new Error("Product not found");}

        if(product.quantity< quantity){throw new Error("Insufficient product quantity");}

    product.quantity -= quantity;
    await product.save();

return await PurchaseOrder.create({ productid, quantity, name });
}