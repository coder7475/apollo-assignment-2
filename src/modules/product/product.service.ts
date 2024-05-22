import IProduct from './product.interface';
import { Product } from './product.model';

// create a new product and save it in DB
const createProductInDB = async (product: IProduct) => {
  const result = await Product.create(product);

  return result;
};

// a service to retrive a list of all products
const getAllProducts = async (searchTerm: any) => {
  if (searchTerm) {
    // search a product with search term
    const result = await Product.find({
      $text: {
        $search: searchTerm,
      },
    });
    return result;
  } else {
    // get all products
    const result = await Product.find();
    return result;
  }
};

// a a specific product by id
const findOneProduct = async (productId: string) => {
  const result = await Product.findById(productId);

  return result;
};

export const ProductServices = {
  createProductInDB,
  getAllProducts,
  findOneProduct,
};
