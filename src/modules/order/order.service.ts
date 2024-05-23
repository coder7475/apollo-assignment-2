import IOrder from './order.interface';
import { Order } from './order.model';

// create a new order
const createOrder = async (order: IOrder) => {
  // const result = await Product.create(product);
  const result = await Order.create(order);

  return result;
};

export const OrderServices = {
  createOrder,
};
