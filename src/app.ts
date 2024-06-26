import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRouter } from './modules/product/product.route';
import { OrderRouter } from './modules/order/order.route';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'PH Ecommerce app is running!' });
});

// Application Routes
app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRouter);

export default app;
