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
exports.ControllerOfProduct = void 0;
const product_service_1 = require("./product.service");
// controller for creating a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield product_service_1.ProductServices.createProductInDB(product);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({
            success: false,
            message: 'Product creation failed!',
            error,
        });
    }
});
// controller to get all products
// also search products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        // console.log(searchTerm);
        const result = yield product_service_1.ProductServices.getAllProducts(searchTerm);
        const message = searchTerm
            ? `Products matching search term '${searchTerm}' fetched successfully!`
            : 'Products fetched successfully!';
        // console.log(result);
        res.status(200).json({
            success: true,
            message,
            data: result,
        });
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({
            success: false,
            message: 'Products fetching failed!',
            error,
        });
    }
});
// find one specific product
const findOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.findOneProduct(req.params.productId);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        // console.log(error);
        res.status(404).json({
            success: false,
            message: 'Product fetching failed!',
        });
    }
});
// update one specific product
const updateProductInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield product_service_1.ProductServices.updateProductInfo(req.params.productId, product);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({
            success: false,
            message: 'Product update failed!',
            error,
        });
    }
});
// update one specific product
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.deleteProductById(req.params.productId);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({
            success: false,
            message: 'Product deletetion failed!',
            error,
        });
    }
});
exports.ControllerOfProduct = {
    createProduct,
    getAllProducts,
    findOneProduct,
    updateProductInfo,
    deleteProductById,
};
