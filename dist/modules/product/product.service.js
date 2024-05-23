"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const product_constant_1 = require("./product.constant");
const product_model_1 = require("./product.model");
// create a new product and save it in DB
const createProductInDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(product);
    return result;
});
// a service to retrive a list of all products with search functionality
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        // search a product with search term
        const result = yield product_model_1.Product.find({
            $text: {
                $search: searchTerm,
            },
        }, product_constant_1.projection)
            .lean()
            .exec();
        return result;
    }
    else {
        // get all products
        const result = yield product_model_1.Product.find({}, product_constant_1.projection).lean().exec();
        return result;
    }
});
// a a specific product by id
const findOneProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(productId, product_constant_1.projection).lean().exec();
    return result;
});
// update a product by id
const updateProductInfo = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(productId, product, {
        new: true,
    })
        .lean()
        .exec();
    return result;
});
// delete product by id
const deleteProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(productId).lean().exec();
    return result;
});
exports.ProductServices = {
    createProductInDB,
    getAllProducts,
    findOneProduct,
    updateProductInfo,
    deleteProductById,
};
