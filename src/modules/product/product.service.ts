import IProduct from './product.interface';
import { Product } from './product.model';

// create a new product and save it in DB
const createProductInDB = async (product: IProduct) => {
  const result = await Product.create(product);

  return result;
};

// a service to retrive a list of all products
const getAllProducts = async (searchTerm: any) => {
  // a projection for filtering field to show
  const projection = {
    _id: 0,
    name: 1,
    description: 1,
    price: 1,
    category: 1,
    tags: 1,
    variants: 1,
    inventory: 1,
  };

  if (searchTerm) {
    // search a product with search term
    const result = await Product.find(
      {
        $text: {
          $search: searchTerm,
        },
      },
      projection,
    )
      .lean()
      .exec();
    return result;
  } else {
    // get all products
    const result = await Product.find({}, projection).lean().exec();

    return result;
  }
};

// a a specific product by id
const findOneProduct = async (productId: string) => {
  const result = await Product.findById(productId).lean().exec();

  return result;
};

// update a product by id
const updateProductInfo = async (productId: string, product: IProduct) => {
  const result = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  })
    .lean()
    .exec();

  return result;
};

// delete product by id
const deleteProductById = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId).lean().exec();

  return result;
};

export const ProductServices = {
  createProductInDB,
  getAllProducts,
  findOneProduct,
  updateProductInfo,
  deleteProductById,
};
