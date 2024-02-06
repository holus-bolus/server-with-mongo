const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://ustinovoleksij:OvCHfNy8ENpFsUkg@cluster0.ldpsemf.mongodb.net/products_test'

const createProduct = async (req, res) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('products').insertOne(newProduct);
        client.close();
        res.json(newProduct);
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ message: 'Could not store data.' });
    }
};


const getProducts = async (req, res) => {

    const client = new MongoClient(url);

    let products;

    try {
        await client.connect();
        const db = client.db();
        products = await db.collection('products').find().toArray();
        client.close();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Could not retrieve products.' });
    }

    res.json(products);
}

exports.createProduct = createProduct
exports.getProducts = getProducts
