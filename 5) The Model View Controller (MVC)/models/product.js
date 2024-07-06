import fs from 'fs';
import pathFile from '../utils/pathFile.js';
import path from 'path';

export default class Product {

    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    save() {
        const p = path.join(pathFile(import.meta.url), '..', 'data', 'products.json');

        // p is the path to the file
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                // JSON is a helper object that has a method called parse
                products = JSON.parse(fileContent);
            }

            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }


    // We use the call back function to pass the data to the controller.
    static fetchAll(cb) {

        const p = path.join(pathFile(import.meta.url), '..', 'data', 'products.json');

        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }

            cb(JSON.parse(fileContent));
        });
    }
}