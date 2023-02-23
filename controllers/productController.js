const Products = require("../models/product");


const createProduct = async (req, res) => {
    const product = await Products.create(req.body);
    res.status(201).json({product})
};

const getProducts = async (req, res) => {
    const product = await Products.find()
    res.status(200).json({product})
};


module.exports = { createProduct, getProducts};