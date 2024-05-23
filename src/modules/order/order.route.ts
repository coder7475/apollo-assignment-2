import express from 'express';
import { ControllerOfOrder } from './order.controller';

const router = express.Router();

// api/products [POST] - create a product
router.post('/', ControllerOfOrder.createOrder);

export const OrderRouter = router;
