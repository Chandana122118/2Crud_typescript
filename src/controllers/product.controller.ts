import {Request, Response} from 'express';
import{

    findAllProducts,
    findProductById,
    CreateProduct,
    UpdateProductById,
    DeleteProductById
} from '../services/product.service';

export const getProducts= async(req:Request, res:Response): Promise<void> =>{
    try{
        const product= await findAllProducts();
        res.status(200).json(product);
    }catch(error:any){
        res.status(500).json({message:error.message});
    }
};

export const getProduct= async(req:Request, res:Response): Promise<void>=>{
    try{
        const {id}= req.params;
        const product= await findProductById(id);
        res.status(200).json(product);
    }catch(error:any){
        res.status(500).json({message:error.message});
    };
};

export const postProduct = ( req:Request, res: Response)=> {
    console.log("Hello");
    console.log(req.body)
    const  ProductData= CreateProduct(req.body);
    // Do your DB stuff here
    res.status(201).json({ message: 'User created' });
  };


export const updateProduct= async(req:Request, res:Response): Promise<void>=>{
    try{
        const{id}= req.params;
        //const {ProductData: any}= req.params;
        const Updated_product= await UpdateProductById(id,req.body);
        if(!Updated_product){
            res.status(404).json({message:"Product not found"});
        }
          res.status(200).json(Updated_product);
    }catch(error:any){
        res.status(500).json({message:error.message});
    };
};

export const deleteProduct= async(req:Request, res:Response): Promise<void>=>{
    try{
        const{id}= req.params;
        const product= await DeleteProductById(id);
        if (!product){
            res.status(404).json({message:"Product not found"});
       }
       res.status(200).json({message:"Product deleted Successfully"});
    }catch(error:any){
        res.status(500).json({message:error.message});
    };
};