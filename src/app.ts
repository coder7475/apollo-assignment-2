import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// Root Route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'PH Ecommerce app is running!' });
});

// Application Routes
app.use('/api/products', (req: Request, res: Response) => {
  res.json({ message: 'Go to product route' });
});

export default app;
