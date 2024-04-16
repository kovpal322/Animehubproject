const express = require("express");
const {
  login_user,
  signup_user,
  getUser,
  changeUserDetails,
  updatefavoriteAnimes,
  deletefavoriteAnime,
  forgotPassword,
  deleteProfile,
  google_signup_user,
  getAllUsers,
} = require("../controllers/userControllers");
const route = express.Router();
const { requireAuth } = require("../middleware/requireAuth");

route.post("/login", login_user);
route.post("/signup", signup_user);
route.get("/getuser/:id", requireAuth, getUser);
route.patch("/update/user/:id", changeUserDetails);
route.patch("/update/favanimes/:id", requireAuth, updatefavoriteAnimes);
route.patch("/remove/favanime/:id", deletefavoriteAnime);
route.get("/reset-password/:id/:token");
route.post("/forgot/password", forgotPassword);
route.post("/google/login", google_signup_user);
route.delete("/user/delete/:id", requireAuth, deleteProfile);
route.get("/get/users", requireAuth, getAllUsers);
module.exports = route;
