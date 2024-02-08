const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');
const mongoose = require('mongoose');



const app = express();

app.use(bodyParser.json());

app.post('/products', mongoPractice.createProduct);

app.get('/products', mongoPractice.getProducts);

mongoose
    .connect('mongodb+srv://ustinovoleksij:<password>@cluster0.ldpsemf.mongodb.net/?retryWrites=true&w=majority')
    .then()
    .catch()


