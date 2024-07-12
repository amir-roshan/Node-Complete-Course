import Product from "../models/Product.js";

export const getProducts = (req, res, next) => {

    // We call the call back function to pass the data to the controller.
    Product.fetchAll(products => {
        res.render('shop/product-list', { prods: products, pageTitle: 'Shop', path: '/' });
    });
};

export const getAllProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', { prods: products, pageTitle: 'Shop', path: '/products' });
    });
};

export const getProduct = (req, res, next) => {
    const productId = req.params.productId; // params is an object that holds the dynamic segments of the URL.
    Product.findById(productId, product => {
        res.render('shop/product-detail', { product: product, pageTitle: product.title, path: '/products' });
    });
};

export const getOrders = (req, res, next) => {
    res.render('shop/orders', { pageTitle: 'Orders', path: '/orders' });
};

export const getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Cart', path: '/cart' });
};
