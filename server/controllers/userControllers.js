const User = require("../models/usermodel");
const validator = require("validator");
const jsonwebtoken = require("jsonwebtoken");
require("dotenv").config();
const validTo = 3 * 60 * 60 * 24;
const createToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: validTo,
  });
};
const login_user = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.json({ user: user._id, token: token });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

const signup_user = async (req, res) => {
  const { password, username, email } = req.body;
  try {
    const user = await User.signup(password, email, username);
    const token = createToken(user._id);

    res.status(200).json({ user: user._id, token });
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const changeUserDetails = async (req, res) => {
  const { id } = req.params;
  const { email, password, username } = req.body;
  try {
    const user = await User.updateOne(id, {});
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = { login_user, signup_user, getUser };
