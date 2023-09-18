import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://640775:qunbvqsw@cluster0.3l5fedz.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => console.log('DB start'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/auth/login', (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: 'Андрей Емельянов',
    },
    'secret123',
  );

  res.json({
    success: true,
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('server start');
});
