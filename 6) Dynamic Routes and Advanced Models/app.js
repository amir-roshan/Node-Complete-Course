import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import adminRouts from './routes/admin.js';
import shopRoutes from "./routes/shop.js";
import * as errors from './controllers/errors.js';

import pathFile from './utils/pathFile.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(pathFile(import.meta.url), '/public')));


app.use('/admin', adminRouts);
app.use(shopRoutes);
app.use(errors.get404);

app.listen(3000);
