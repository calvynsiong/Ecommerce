
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

