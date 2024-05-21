import express, { Request, Response } from 'express';

const router = express.Router();

// api/products [POST] - create a product
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create a product in database!' });
});

// api/products [GET] - get all products
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all products from database!' });
});

// api/products/:productId [GET] - Get a specified product
router.get('/:productId', (req: Request, res: Response) => {
  res.json({
    message: `Get a product with products Id: ${req.params.productId} in database!`,
  });
});

// api/products/:productId [PUT] - Update a product
router.put('/:productId', (req: Request, res: Response) => {
  res.json({
    message: `Update product Id: ${req.params.productId}!`,
  });
});

// api/products/:productId [Delete] - Delete a product
router.delete('/:productId', (req: Request, res: Response) => {
  res.json({
    message: `Delete product Id: ${req.params.productId}!`,
  });
});

export const ProductRouter = router;
