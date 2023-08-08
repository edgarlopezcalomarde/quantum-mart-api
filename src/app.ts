import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.status(404).json({ messagge: 'Endpoint not found' });
});

export default app;
