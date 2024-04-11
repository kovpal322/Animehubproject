const express = require("express");
const {
  login_user,
  signup_user,
  getUser,
  changeUserDetails,
  updatefavoriteAnimes,
  deletefavoriteAnime,
  forgotPassword,
} = require("../controllers/userControllers");
const route = express.Router();
const { requireAuth } = require("../middleware/requireAuth");

route.post("/login", login_user);
route.post("/signup", signup_user);
route.get("/getuser/:id", requireAuth, getUser);
route.patch("/update/user/:id", changeUserDetails);
route.patch("/update/favanimes/:id", requireAuth, updatefavoriteAnimes);
route.patch("/remove/favanime/:id", deletefavoriteAnime);

route.post("/forgot/password", requireAuth, forgotPassword);
module.exports = route;
