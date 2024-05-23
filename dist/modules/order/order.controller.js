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
exports.ControllerOfOrder = void 0;
const order_service_1 = require("./order.service");
// controller for creating a new order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        console.log(order);
        const result = yield order_service_1.OrderServices.createOrder(order);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({
            success: false,
            message: 'Order creation failed!',
            error,
        });
    }
});
// controller to get all orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.OrderServices.getAllOrders(email);
        const message = email
            ? `Orders fetched successfully for user email!`
            : 'Orders fetched successfully!';
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
            message: 'Orders fetching failed!',
            error,
        });
    }
});
exports.ControllerOfOrder = {
    createOrder,
    getAllOrders,
};
