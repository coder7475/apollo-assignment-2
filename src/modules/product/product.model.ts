import { Schema } from 'mongoose';
import IProduct, { TInventory, TVariant } from './product.interface';

// schema for variant
const variantSchema = new Schema<TVariant>({
  type: {
    type: String,
    required: [true, 'Type of variant is required'],
  },
  value: {
    type: String,
    required: [true, 'Variant value of type is required'],
  },
});

// schema for inventory
const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'In Stock is required'],
  },
});

// schema for product
const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  tags: {
    type: [String],
    required: [true, 'Tags is required'],
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});
