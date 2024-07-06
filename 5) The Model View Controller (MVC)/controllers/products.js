export const getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

const products = [];

export const postAddProduct = (req, res, next) => {
    if (!req.body.title && req.body.price <= 0) {
        return res.redirect('/admin/add-product');
    }
    else {
        // this data is inhereted through the server and it is not private
        products.push({ title: req.body.title, price: req.body.price });
        res.redirect('/');
    }
};

export const getProducts = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', "views", "shop.html"));
    // OR
    console.log(products);
    // the second argument is the data that will be passed to the view
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
};
