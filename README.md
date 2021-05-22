# SETUP

$ mkdir client server
$ npm i express mongoose dotenv
$ npm i --save-dev nodemon concurrently

# FRONT END

cd client
npx create-react-app
rm -rf .git (To remove git repo in client folder)

# BACKEND

"change main in package.json to server.js"

## In server.js

require("dotenv").config()
const express = require('express');
const app = express()
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes") 


connectDB()

const PORT = process.env.PORT || 5000

app.use(express.json())
// ! Creating routes

app.use("/api/products", productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})


## CLI

$ cd server
$ mkdir config controller data models routes

## Create db.js in config folder

require("dotenv").config()
const mongoose = require('mongoose');
const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true
});
console.log("MongoDB connected successfully")
} catch (error) {
console.log("MongoDB connection failed")
console.log(error)
process.exit(1)

}
}

module.exports = connectDB

## Create Product.js in models folder to define schema for MongoDB

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
description: {
type: String,
required: true
},
price: {
type: Number,
required: true

    },
    countInStock: {
        type: Number,
        required: true

    },
    countInStock: {
        type: String,
        required: true

    }

})

const Product = mongoose.model("product", productSchema)

module.exports = Product

### Create a products.js file under data and export an array of objects >>> Create seederScript.js in server directory (to import data to MongoDB)

require('dotenv').config();
const connectDB = require('./config/db');
const productsData = require('./data/products');
const Products = require('./models/Product');

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


### Create productControllers.js in controller file 
const Product = require('../models/Product');
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        // ! Makes a request to products in database
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error occured' });
    }
};
const getProductbyId = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        }

        // ! Makes a request to products in database
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error occured' });
    }
};

module.exports = {
    getAllProducts,
    getProductbyId,
};
### Create productRoutes.js in routes file 

const express = require('express');
const router = express.Router()

const { getAllProducts, getProductById} = require("../controller/productControllers")


// ! desc : GETS all products from database
// ! route : GET /api/products
// ! access: public


router.get("/", getAllProducts)

// ! desc : GETS specific product from database
// ! route : GET /api/products/:id
// ! access: public
router.get("/:id", getProductById)


module.exports = router



## .env + gitignore

PORT = 5000
MONGO_URI = ""
==============================

### dependencies

node_modules
node_modules/
/.pnp
.pnp.js

### testing

/coverage

### production

/build

### misc

.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log\*

### Testing

node server/server.js

### Setting up scripts

"scripts": {
"start": "node server/server.js",
"server": "nodemon server/server.js",
"client": "npm start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\"",
"data:import": "node server/seederScript.js"

},
