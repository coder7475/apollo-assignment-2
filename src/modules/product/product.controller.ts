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
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(400).json({
      success: false,
      message: 'Product creation failded',
    });
  }
};

// controller to get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();

    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(404).json({
      success: false,
      message: 'Products fetching failed!',
    });
  }
};

export const ControllerOfProduct = {
  createProduct,
  getAllProducts,
};
