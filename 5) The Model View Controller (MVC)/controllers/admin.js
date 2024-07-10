import Product from "../models/Product.js";

export const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
};

export const postAddProduct = (req, res, next) => {

    if (!req.body.title && req.body.price <= 0) {
        return res.redirect('/admin/add-product');
    }

    else {
        // this data is inhereted through the server and it is not private

        const title = req.body.title;
        const imgUrl = req.body.imgUrl;
        const description = req.body.description;
        const price = req.body.price;

        const product = new Product(title, imgUrl, description, price);
        product.save();
        res.redirect('/');
    }
};

export const getProductsList = (req, res, next) => {
    res.render('admin/admin-product-list', { pageTitle: 'Admin Products', path: '/admin/admin-product-list' });
};
