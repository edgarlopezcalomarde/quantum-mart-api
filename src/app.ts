import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import UserRouter from './user/infraestructure/user.route';
import { AuthMiddleware } from './middleware/auth.middleware';
import AuthRouter from './auth/infrastructure/auth.route';
import ProductRouter from './product/infrastructure/product.route';
import path from 'path';
import CookieParser from 'cookie-parser';

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());
app.use(CookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.path === '/api/product') {
    return next();
  }
  if (req.path === '/api/auth/login') {
    return next();
  }
  AuthMiddleware(req, res, next);
});

app.use('/api', AuthRouter);
app.use('/api', ProductRouter);
app.use('/api', UserRouter);

app.use((req, res, next) => {
  res.status(404).json({ messagge: 'Endpoint not found' });
});

export default app;
