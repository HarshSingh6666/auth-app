require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is missing in .env file");
  }

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d", // ya 3*24*60*60 seconds
  });
};
