import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import Todo from '../models/todos.js';
import path from 'path';
import signupRoute from './usersignup.routes.js';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import loginRoute from './userlogin.routes.js';


const url = process.env.url;
await mongoose.connect(url);

function addtodb(data) {
  const addTodo = new Todo({
    title: data
  });
  addTodo.save();
}

const app = express();
const port = 3000;

app.use(express.json());
// CORS handling
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDirectoryPath = path.join(__dirname, '..', 'public', 'sites', 'login');
app.use(express.static(publicDirectoryPath));

app.use('/signup', signupRoute);
app.use('/login', loginRoute);

app.post('/api/todos', (req, res) => {
  const {title} = req.body
  addtodb(title);
  res.send('Todo added successfully');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
