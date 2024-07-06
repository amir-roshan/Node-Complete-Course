import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import adminRouts from './routes/admin.js';
import shopRoutes from "./routes/shop.js";

import * as errors from './controllers/errors.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));


app.use('/admin', adminRouts);
app.use(shopRoutes);
app.use(errors.get404);

app.listen(3000);
