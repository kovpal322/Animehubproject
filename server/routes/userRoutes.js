const express = require("express");
const {
  login_user,
  signup_user,
  getUser,
} = require("../controllers/userControllers");
const route = express.Router();
const { requireAuth } = require("../middleware/requireAuth");

route.post("/login", login_user);
route.post("/signup", signup_user);
route.get("/getuser/:id", requireAuth, getUser);
module.exports = route;
