require('dotenv').config();
const connectDB = require('./config/db');
const productsData = require('./data/products');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        // ! Clears database
        await Product.deleteMany({});
        // ! Inserts database
        await Product.insertMany(productsData);
        console.log('Data imported successfully');
    } catch (error) {
        console.log(error);
        console.log('Data was not imported. Process failed');
        process.exit(1);
    }
};

importData()
