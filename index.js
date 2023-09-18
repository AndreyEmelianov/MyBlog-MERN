import { config } from 'dotenv';
import express from 'express';

import mongoose from 'mongoose';

import { registerValidation, loginValidation } from './validations/auth.js';
import { postCreateValidation } from './validations/post.js';

import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';
import checkAuth from './utils/checkAuth.js';

config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('DB start'))
  .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());

app.post('/auth/login', loginValidation, UserController.login);

app.post('/auth/register', registerValidation, UserController.register);

app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
// app.patch('/posts', PostController.update);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server Ok');
});
