import fs from 'fs';
import path from 'path';

import pathFile from '../utils/pathFile.js';

const p = path.join(pathFile(import.meta.url), '..', 'data', 'products.json');


/**
 * Reads the products data from the JSON file and passes it to the provided callback function.
 * 
 * This function performs an asynchronous file read operation using Node.js's `fs` module.
 * The path to the file is defined by the variable `p`, which points to `products.json`.
 * 
 * @param {Function} cb - The callback function to be executed after reading the file.
 *                        It takes one parameter, which will be either:
 *                        - An empty array if an error occurs while reading the file.
 *                        - The parsed JSON content of the file if read successfully.
 */
const getProductsFormFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

export default class Product {

    constructor(title, imgUrl, description, price) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.price = price;
    }

    save() {
        this.id = (Math.random() * 10).toString();
        getProductsFormFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }


    // We use the call back function to pass the data to the controller.
    static fetchAll(cb) {
        getProductsFormFile(cb);
    }


    /**
     * Finds a product by its ID and passes it to the provided callback function.
     * 
     * This method reads the products data from the JSON file using the `getProductsFormFile` function,
     * and then searches for the product with the specified ID using the `find` method.
     * The found product, or `undefined` if no product with the given ID exists, is then passed to the callback function.
     * 
     * @param {string} id - The ID of the product to find.
     * @param {Function} cb - The callback function to be executed after finding the product.
     *                        It takes one parameter:
     *                        - The found product object, or `undefined` if no product with the given ID exists.
     */
    static findById(id, cb) {
        getProductsFormFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }

}