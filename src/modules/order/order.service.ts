import { projection } from './order.constant';
import IOrder from './order.interface';
import { Order } from './order.model';

// create a new order
const createOrder = async (order: IOrder) => {
  // const result = await Product.create(product);
  const result = await Order.create(order);

  return result;
};

// a service to retrive a list of all orders with
// eamil search functionality
const getAllProducts = async (email: any) => {
  if (email) {
    // search orders by email
    const result = await Order.find(
      {
        email,
      },
      projection,
    )
      .lean()
      .exec();
    return result;
  } else {
    // get all products
    const result = await Order.find({}, projection).lean().exec();

    return result;
  }
};

export const OrderServices = {
  createOrder,
  getAllProducts,
};
