import express, { Request, Response } from 'express';
import { ControllerOfProduct } from './product.controller';

const router = express.Router();

// api/products [POST] - create a product
router.post('/', ControllerOfProduct.createProduct);

// api/products [GET] - get all products
router.get('/', ControllerOfProduct.getAllProducts);

// api/products/:productId [GET] - Get a specified product
router.get('/:productId', ControllerOfProduct.findOneProduct);

// api/products/:productId [PUT] - Update a product
router.put('/:productId', ControllerOfProduct.updateProductInfo);

// api/products/:productId [Delete] - Delete a product
router.delete('/:productId', (req: Request, res: Response) => {
  res.json({
    message: `Delete product Id: ${req.params.productId}!`,
  });
});

export const ProductRouter = router;
