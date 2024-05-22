import IProduct from './product.interface';
import { Product } from './product.model';

// create a new product and save it in DB
const createProductInDB = async (product: IProduct) => {
  const result = await Product.create(product);

  return result;
};

export const ProductServices = {
  createProductInDB,
};
