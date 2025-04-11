import mongoose, {Schema,model, Document} from 'mongoose';
export interface ProductDocument extends Document{
    name: string;
    quantity: number;
    price: number;
    image ?: string;
}
const productSchema = new Schema<ProductDocument>({
    name: { type: String, required: true },
    quantity: { type:Number, required: true},
    price: { type: Number, required: true },
    image: { type: String, required: false}
},
{ timestamps: true });

export default model<ProductDocument>('Product', productSchema);


