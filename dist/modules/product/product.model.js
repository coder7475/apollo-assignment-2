"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
// schema for variant
const variantSchema = new mongoose_1.Schema({
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
const inventorySchema = new mongoose_1.Schema({
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
const productSchema = new mongoose_1.Schema({
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
// create product model
exports.Product = (0, mongoose_1.model)('Product', productSchema);
