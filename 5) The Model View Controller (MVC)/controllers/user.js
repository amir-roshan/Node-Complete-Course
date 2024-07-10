import Product from "../models/Product.js";

export const getProducts = (req, res, next) => {

    // We call the call back function to pass the data to the controller.
    Product.fetchAll(products => {
        res.render('shop/product-list', { prods: products, pageTitle: 'Shop', path: '/' });
    });
};

export const getAllProducts = (req, res, next) => {
    res.render('shop/index', { pageTitle: 'Shop', path: '/products' });
};

export const getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Cart', path: '/cart' });
};
