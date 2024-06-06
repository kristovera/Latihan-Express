const express = require("express");
const { PATH_PRODUCT, productRouter } = require("./src/products/routers");

const app = express();



app.use(express.json());

app.use(PATH_PRODUCT, productRouter);
module.exports = { app };
