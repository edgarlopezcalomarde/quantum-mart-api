import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import UserRouter from './user/infraestructure/user.route';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', UserRouter);

app.use((req, res, next) => {
  res.status(404).json({ messagge: 'Endpoint not found' });
});

export default app;
