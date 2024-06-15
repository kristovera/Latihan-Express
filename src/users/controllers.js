const { otpHelperCreate } = require("../otp/helpers");
const { exceptionHandler } = require("../utils/errors");
const { utilHelperMakeJWT, utilHelperSendEmail } = require("../utils/helpers");
const { User } = require("./models");

const userControllerRegiter = async (req, res) => {
  try {
    await User.create(res.locals.matchedData);
    const { password, ...safeData } = res.locals.matchedData;
    const codeOtp = await otpHelperCreate(safeData.email);
    await utilHelperSendEmail(safeData.email, codeOtp);
    return res.status(201).json(safeData);
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

const userControllerSignIn = async (req, res) => {
  try {
    const user = await User.findOne({ email: res.locals.matchedData.email });
    const payload = {
      email: user.email,
    };
    const token = utilHelperMakeJWT(payload);

    return res.status(200).json({ token });
  } catch (error) {
    return exceptionHandler(error, res);
  }
};

module.exports = {
  userControllerRegiter,
  userControllerSignIn,
};
