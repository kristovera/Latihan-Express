const { body } = require("express-validator");

const categoriesValidationCreate = [
  body("categories").exists().withMessage("Categories is required"),
  body("name").exists().withMessage("Name is required"),
 
  body("price")
    .exists()
    .withMessage("Price is required")
    .bail()
    .isInt({ min: 1000, max: 20000 })
    .withMessage("Price invalid"),
  body("stock")
    .exists()
    .withMessage("Stock is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Stock invalid"),
];

const categoriesValidationUpdate = [
  body("categories").exists().withMessage("Categories is required"),
  body("name").optional().notEmpty().withMessage("Name is required"),

  body("price")
    .optional()
    .isInt({ min: 1000, max: 20000 })
    .withMessage("Price invalid"),
  body("stock")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Stock invalid"),
];

module.exports = {
  categoriesValidationCreate,
  categoriesValidationUpdate,
};