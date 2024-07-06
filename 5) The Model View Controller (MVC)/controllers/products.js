import Product from "../models/product.js";

export const getAddProduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

export const postAddProduct = (req, res, next) => {

    if (!req.body.title && req.body.price <= 0) {
        return res.redirect('/admin/add-product');
    }

    else {
        // this data is inhereted through the server and it is not private
        const product = new Product(req.body.title, req.body.price);
        product.save();
        res.redirect('/');
    }
};

export const getProducts = (req, res, next) => {

    // We call the call back function to pass the data to the controller.
    Product.fetchAll(products => {
        res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
    });
};


