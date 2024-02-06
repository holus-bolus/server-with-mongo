const mongoose = require('mongoose');
const Product = require('./models/product');

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    const result = await createdProduct.save();

    res.status(201).json(result);
}

exports.createProduct = createProduct;
