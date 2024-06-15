const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const utilHelperMakeJWT = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: process.env.EXPIRED_IN,
  });
};

const utilHelperSendEmail = (to, text) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const options = {
    from: process.env.EMAIL_ACCOUNT,
    to,
    subject: "Verify Account",
    text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = {
  utilHelperMakeJWT,
  utilHelperSendEmail,
};
