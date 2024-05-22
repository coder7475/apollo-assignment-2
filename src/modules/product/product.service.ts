import IProduct from './product.interface';
import { Product } from './product.model';

// create a new product and save it in DB
const createProductInDB = async (product: IProduct) => {
  const result = await Product.create(product);

  return result;
};

// a service to retrive a list of all products
const getAllProducts = async () => {
  const result = await Product.find({});

  return result;
};

export const ProductServices = {
  createProductInDB,
  getAllProducts,
};
