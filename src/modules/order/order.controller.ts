import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// controller for creating a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await OrderServices.createOrder(order);

    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Order creation failed!',
      error,
    });
  }
};

export const ControllerOfOrder = {
  createOrder,
};
