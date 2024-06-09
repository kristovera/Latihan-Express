const express = require("express");
const {
  categoriesControllerList,
  categoriesControllerDetail,
  categoriesControllerCreate,
  categoriesControllerUpdate,
  categoriesControllerDelete,
} = require("./controllers");

const { validationMiddleware } = require("../utils/middlewares");
const {
  categoriesValidationCreate,
  categoriesValidationUpdate,
} = require("./validations");

const categoriesRouter = express.Router();

const PATH_CATEGORIES = "/categories";

categoriesRouter.get("/", categoriesControllerList);
categoriesRouter.get("/:id", categoriesControllerDetail);
categoriesRouter.post(
  "/",
  validationMiddleware(categoriesValidationCreate),
  categoriesControllerCreate
);
categoriesRouter.put(
  "/:id",
  validationMiddleware(categoriesValidationUpdate),
  categoriesControllerUpdate
);
categoriesRouter.delete("/:id", categoriesControllerDelete);

module.exports = {
  categoriesRouter,
  PATH_CATEGORIES,
};