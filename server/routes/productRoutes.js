const express = require('express');
const router = express.Router()

const { getAllProducts, getProductById } = require("../controller/productControllers")


// ! desc : GETS all products from database
// ! route : GET /api/products
// ! access: public


router.get("/", getAllProducts)

// ! desc : GETS specific product from database
// ! route : GET /api/products/:id
// ! access: public
router.get("/:id", getProductById)


module.exports = router