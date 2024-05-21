import express, { Request, Response } from 'express';

const router = express.Router();

// api/products [POST] - create a product
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create a product in database!' });
});

export const ProductRouter = router;
