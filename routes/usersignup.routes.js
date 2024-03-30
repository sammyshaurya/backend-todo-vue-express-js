import user from '../models/user.model.js'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const signupRoute = express.Router();

// Serve index.html file
signupRoute.get('/', (req, res) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  res.sendFile(path.join(__dirname, '..', 'public', 'sites', 'login', 'index.html'));
});

// loggin user code and function
function addUser(username, email, password) {
  if (!username || !email || !password) {
    ("All fields are not provided!!");
    return; // Exiting the function if any field is missing
  }
  const addnew = new user({
    username: username,
    email: email,
    password: password
  });

  addnew.save()
    .then(() => {
      console.log('User added successfully');
    })
    .catch(err => {
      console.error('Error adding user:', err);
    });
}

signupRoute.post('/', (req,res) =>{
  const { username, email, password } = req.body;
  addUser(username,email,password);
  res.send('User added successfully');
})

export default signupRoute;
