import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import UserRouter from './user/infraestructure/user.route';
import { AuthMiddleware } from './middleware/auth.middleware';
import AuthRouter from './auth/infrastructure/auth.route';
import ProductRouter from './product/infrastructure/product.route';
import path from 'path';
import { HttpResponse, HttpStatus } from './response/response.http';

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  try {
    next();
  } catch (err) {
    HttpResponse.Ko(
      res,
      'Internal Server Errror',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
});

app.use('/api', AuthRouter);

app.use((req, res, next) => {
  if (req.path === '/api/product') {
    return next();
  }
  AuthMiddleware(req, res, next);
});

app.use('/api', ProductRouter);
app.use('/api', UserRouter);

app.use((req, res, next) => {
  res.status(404).json({ messagge: 'Endpoint not found' });
});

export default app;
