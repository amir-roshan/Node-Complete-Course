import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import booksRouter from './router/book.js';
import libraryRouter from './router/library.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url); // get filename
const __dirname = path.dirname(__filename); // get the absolute path of the directory where the file is located


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));


app.use(booksRouter);
app.use(libraryRouter);

// next is a function that will pass the request to the next middleware function in the stack
app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });