const { exceptionHandler, Error404 } = require("../utils/errors");
const { Categories } = require("./models");

const categoriesControllerList = async (req, res) => {
  try {
    const result = await Categories.find();
    res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoriesControllerCreate = async (req, res) => {
  try {
    const result = await Categories.create(res.locals.matchedData);
    return res.status(201).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoriesControllerDetail = async (req, res) => {
  try {
    let result = await Categories.findOne({ _id: req.params.id });
    if (!result) {
      throw new Error404();
    }
    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoriesControllerUpdate = async (req, res) => {
  try {
    let result = await Categories.findOne({ _id: req.params.id });
    if (!result) {
      throw new Error404();
    }

    result = await Categories.findOneAndUpdate(
      { _id: req.params.id },
      res.locals.matchedData,
      { new: true }
    );
    return res.status(200).json(result);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const categoriesControllerDelete = async (req, res) => {
  try {
    let result = await Categories.findOne({ _id: req.params.id });
    if (!result) {
      throw new Error404();
    }

    await Categories.findOneAndDelete({ _id: req.params.id });
    res.status(204).json(null);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

module.exports = {
  categoriesControllerList,
  categoriesControllerCreate,
  categoriesControllerUpdate,
  categoriesControllerDelete,
  categoriesControllerDetail,
};