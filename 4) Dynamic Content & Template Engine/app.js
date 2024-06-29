import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import { adminRouter, products } from './routes/admin.js';
import shopRoutes from "./routes/shop.js";

const app = express();

// Setting up the view engine to pug
app.set('view engine', 'pug');
// Setting up the views folder to use the template engine to iterate over the data in html files in the views folder
app.set('views', 'views');

// To get the current file name
const __filename = fileURLToPath(import.meta.url);

// The __dirname is the absolute path of the directory containing the source file.
const __dirname = path.dirname(__filename);


// parse application/json
// This is used to parse the incoming request with JSON payloads.
app.use(bodyParser.urlencoded({ extended: false }));

// Seting up static file serving
// Remember to delete public path from the link in the html file
// You can register multiple static folders
app.use(express.static(path.join(__dirname, '/public')));

// Using the the adminRoutes module as a middleware
app.use('/admin', adminRouter);

// Using the the shopRoutes module as a middleware
app.use(shopRoutes);

// 404 page - at the end of the to catch all routes that are not defined and send a 404
app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000);
