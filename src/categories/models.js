const mongoose = require("mongoose");

const categoriesObject = {
  categories:{ type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  stock: { type: Number, required: true, min: 1 },
};

const categoriesSchema = new mongoose.Schema(categoriesObject, {
  versionKey: false,
  timestamps: true,
});

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = {
  Categories,
  categoriesObject,
  categoriesSchema,
};