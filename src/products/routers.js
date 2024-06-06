const express = require("express");
const {
  productControllerList,
  productControllerDetail,
  productControllerCreate,
  productControllerUpdate,
  productControllerDelete,
} = require("./controllers");
const {
  productValidationDetail,
  productSanitizeDetail,
} = require("./validations");

const productRouter = express.Router();

const PATH_PRODUCT = "/products";

productRouter.get("/", productControllerList);
productRouter.get(
  "/:id",
  [productValidationDetail, productSanitizeDetail],
  productControllerDetail
);
productRouter.post("/", productControllerCreate);
productRouter.put("/:id", productControllerUpdate);
productRouter.delete("/:id", productControllerDelete);

module.exports = {
  productRouter,
  PATH_PRODUCT,
};
