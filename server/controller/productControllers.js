const Product = require('../models/Product');


// ! The controllers to be passed down for dealing with routes


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        // ! Makes a request to products in database
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Could not fetch products' });
    }
};
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        // if (!product) {
        //     res.status(404).json({ message: 'Product not found' });
        // }

        // ! Makes a request to products in database
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Could not fetch the proper product' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};
