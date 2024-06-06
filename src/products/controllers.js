const { Product } = require("./models");

const productControllerList = (req, res) => {
  res.status(200).json(Product);
};

const productControllerCreate = (req, res) => {
  Product.push(req.body);
  res.status(201).json(req.body);
};

const productControllerDetail = (req, res) => {
  console.log(
    "Ini controller detail dengan id yang sudah di custom lewat sanitize",
    req.params.id
  );
  const result = Product.find((value) => value.id === req.params.id);
  res.status(200).json(result);
};

const productControllerUpdate = (req, res) => {
  const index = Product.findIndex((value) => value.id === req.params.id);
  if (!index) {
    return res.status(404).json({ detail: "Data not found" });
  }
  Product.splice(index, 1, req.body);
  const result = Product.find((value) => value.id === req.params.id);
  res.status(200).json(result);
};

const productControllerDelete = (req, res) => {
  const index = Product.findIndex((value) => value.id === req.params.id);
  if (!index) {
    return res.status(404).json({ detail: "Data not found" });
  }
  Product.splice(index, 1);
  res.status(204).json(null);
};

module.exports = {
  productControllerList,
  productControllerCreate,
  productControllerUpdate,
  productControllerDelete,
  productControllerDetail,
};
