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
  res.json({ message: `products Id: ${req.params.productId} in database!` });
});

export const ProductRouter = router;
