import product from '../models/product.model';
export const findAllProducts= async()=>{
    return await product.find({});
};

export const findProductById= async(id:string) =>{
    return await product.findById(id);
}

export const CreateProduct= async(ProductData:any) =>{
    return await product.create(ProductData);

}

export const UpdateProductById= async (id:string, ProductData:any)=>{
    return await product.findByIdAndUpdate(id, ProductData,{
        new:true,
        runvalidators:true
    });
};

export const DeleteProductById= async(id:string)=>{
    return await product.findByIdAndDelete(id);
};


