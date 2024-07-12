import fs from 'fs';
import path from 'path';

import pathFile from '../utils/pathFile.js';

const p = path.join(pathFile(import.meta.url), '..', 'data', 'card.json');

export default class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (error, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!error) {
                cart = JSON.parse(fileContent);
            }

            // Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            // Add new product / increase quantity
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }

            // Convert price to a number and add it to cart.totalPrice
            cart.totalPrice += +productPrice;

            cart.totalPrice = Math.round(cart.totalPrice * 100) / 100;

            fs.writeFile(p, JSON.stringify(cart), error => {
                console.log(error);
            });
        });
    }
}
