const path = require('path');
require("dotenv").config()
const express = require('express');
const app = express()
const connectDB = require("./server/config/db")
const productRoutes = require("./server/routes/productRoutes")
const cors = require('cors')




connectDB()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

// ! Creating routes

app.use("/api/products", productRoutes);

// ! Deployment

console.log(path.join(__dirname, "client/build"))
console.log(path.join(__dirname,  "client", "build", "index.html"))

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    });
} else {
    app.get('/', (req, res) => {
        res.send("API is running");
    });
}




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})

