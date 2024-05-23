import express from 'express';
import { ControllerOfOrder } from './order.controller';

const router = express.Router();

// api/orders [POST] - create a product
router.post('/', ControllerOfOrder.createOrder);
// api/orders [Get] - retrieve all products
router.get('/', ControllerOfOrder.getAllOrders);

export const OrderRouter = router;
