"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// api/products [POST] - create a product
router.post('/', product_controller_1.ControllerOfProduct.createProduct);
// api/products [GET] - get all products
router.get('/', product_controller_1.ControllerOfProduct.getAllProducts);
// api/products/:productId [GET] - Get a specified product
router.get('/:productId', product_controller_1.ControllerOfProduct.findOneProduct);
// api/products/:productId [PUT] - Update a product
router.put('/:productId', product_controller_1.ControllerOfProduct.updateProductInfo);
// api/products/:productId [Delete] - Delete a product
router.delete('/:productId', product_controller_1.ControllerOfProduct.deleteProductById);
exports.ProductRouter = router;
