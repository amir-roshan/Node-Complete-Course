import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// parse application/json
// This is used to parse the incoming request with JSON payloads.
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/app-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

// default route is '/'
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);

