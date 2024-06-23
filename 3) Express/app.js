import express from 'express';
import bodyParser from 'body-parser';

import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

const app = express();

// parse application/json
// This is used to parse the incoming request with JSON payloads.
app.use(bodyParser.urlencoded({ extended: false }));

// Using the the adminRoutes module as a middleware
app.use('/admin', adminRoutes);

// Using the the shopRoutes module as a middleware
app.use(shopRoutes);

// 404 page - at the end of the to catch all routes that are not defined and send a 404
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
