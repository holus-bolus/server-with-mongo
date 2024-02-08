const mongoose = require('mongoose');
const Product = require('./models/product');
mongoose.connect('mongodb+srv://ustinovoleksij:OvCHfNy8ENpFsUkg@cluster0.ldpsemf.mongodb.net/products_test')
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();

    res.status(200).json(products);
}

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
exports.getProducts = getProducts;
