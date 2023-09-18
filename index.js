import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';
import { validationResult } from 'express-validator';

mongoose
  .connect('mongodb+srv://640775:wwwwww@cluster0.3l5fedz.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB start'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  res.json({
    success: true,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('server start');
});
