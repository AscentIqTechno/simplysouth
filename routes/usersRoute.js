const express = require('express');
const routerAuth = express.Router();
const User = require("../models/userModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/auth.config");

// Reusable function for sending error responses
const sendErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).send({ message });
};

routerAuth.post('/signup', async (req, res) => {
  try {
    console.log(req.body)
    const { firstname, lastname, mobile, address, email, password } = req.body;

    // Validate and sanitize input here

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({ firstname, lastname, mobile, address, email, password: hashedPassword });

    await user.save();
    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    sendErrorResponse(res, 500, err.message);
  }
});

routerAuth.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate and sanitize input here

    const user = await User.findOne({ email }).exec();
    if (!user) {
      return sendErrorResponse(res, 404, "User not found.");
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return sendErrorResponse(res, 401, "Invalid Password!");
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      algorithm: 'HS256',
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      mobile: user.mobile,
      address: user.address,
      email: user.email,
      accessToken: token
    });
  } catch (err) {
    sendErrorResponse(res, 500, err.message);
  }
});

module.exports = routerAuth;