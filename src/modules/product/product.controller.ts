import { Request, Response } from 'express';
import { ProductServices } from './product.service';

// controller for creating a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await ProductServices.createProductInDB(product);

    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Product creation failed!',
      error,
    });
  }
};

// controller to get all products
// also search products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    // console.log(searchTerm);
    const result = await ProductServices.getAllProducts(searchTerm);

    const message = searchTerm
      ? `Products matching search term '${searchTerm}' fetched successfully!`
      : 'Products fetched successfully!';

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
      message: 'Products fetching failed!',
      error,
    });
  }
};

// find one specific product
const findOneProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.findOneProduct(req.params.productId);

    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(404).json({
      success: false,
      message: 'Product fetching failed!',
      error,
    });
  }
};

// update one specific product
const updateProductInfo = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.updateProductInfo(
      req.params.productId,
      product,
    );

    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Product update failed!',
      error,
    });
  }
};

// update one specific product
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.deleteProductById(
      req.params.productId,
    );

    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'Product deletetion failed!',
      error,
    });
  }
};

export const ControllerOfProduct = {
  createProduct,
  getAllProducts,
  findOneProduct,
  updateProductInfo,
  deleteProductById,
};
