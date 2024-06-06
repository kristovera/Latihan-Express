const { Product } = require("./models");

const productValidationDetail = (req, res, next) => {
  const result = Product.find((value) => value.id === req.params.id);
  // if (!result) {
  //   return res.status(404).json({ detail: "Resource not found" });
  // }

  return next();
};

const productSanitizeDetail = (req, res, next) => {
  req.params.id = `${req.params.id}-sudah-dicustom`;
  // console.log(req.params.id);
  return next();
};

module.exports = {
  productValidationDetail,
  productSanitizeDetail,
};
