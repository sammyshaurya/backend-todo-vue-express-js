// server.js (or index.js)
import express from 'express';
import path from 'path';
import loginRoute from './usersignup.routes.js';
import { fileURLToPath } from 'url';

const app = express();
const port = 7001;

// Get the directory path of the current module file
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public/sites' directory
const publicDirectoryPath = path.join(__dirname, '..', 'public', 'sites', 'login');
app.use(express.static(publicDirectoryPath));

// Mount the loginRoute middleware for the root path
app.use('/', loginRoute);

app.listen(port, () => {
  console.log(`Server is started at port ${port}`);
});
