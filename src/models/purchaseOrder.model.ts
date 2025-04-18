import mongoose, {Schema,model, Document} from 'mongoose';

export interface PurchaseOrderDocument extends Document{
    productid: mongoose.Types.ObjectId;
  quantity: number;
  name: string; // optional
}
const purchaseOrderSchema = new Schema<PurchaseOrderDocument>({
    productid: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    name: { type: String }
  }, { timestamps: true });
  
  export default mongoose.model<PurchaseOrderDocument>('PurchaseOrder', purchaseOrderSchema);

