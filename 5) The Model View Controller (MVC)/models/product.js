import fs from 'fs';
import pathFile from '../utils/pathFile.js';
import path from 'path';

const p = path.join(pathFile(import.meta.url), '..', 'data', 'products.json');

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
}