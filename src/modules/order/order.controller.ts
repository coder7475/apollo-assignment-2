import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// controller for creating a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    // console.log(order);
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

// controller to get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    const result = await OrderServices.getAllOrders(email);

    const message = email
      ? `Orders fetched successfully for user email!`
      : 'Orders fetched successfully!';

    // console.log(result);
    res.status(200).json({
      success: true,
      message,
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Orders fetching failed!',
      error,
    });
  }
};

export const ControllerOfOrder = {
  createOrder,
  getAllOrders,
};
