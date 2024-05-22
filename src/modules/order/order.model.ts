import { Schema, model } from 'mongoose';
import IOrder from './order.interface';

// schema for order
const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  productId: {
    type: String,
    required: [true, 'Product Id is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

// create order model
export const Order = model<IOrder>('Order', orderSchema);
