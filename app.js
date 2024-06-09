const express = require("express");
const { PATH_PRODUCT, productRouter } = require("./src/products/routers");
const { PATH_CATEGORIES, categoriesRouter } = require("./src/categories/routers");
const { connectDB } = require("./src/utils/databases");

const app = express();

app.use(express.json());
connectDB();
app.use(PATH_PRODUCT, productRouter);
app.use(PATH_CATEGORIES, categoriesRouter);

module.exports = { app };