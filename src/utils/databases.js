const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(`mongodb://0.0.0.0:27017/data`)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
      console.log("Database not connected");
    });
};

module.exports = {
  connectDB,
};
