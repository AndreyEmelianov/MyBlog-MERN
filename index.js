import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://640775:wwwwww@cluster0.3l5fedz.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB start'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/register', (req, res) => {});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('server start');
});
