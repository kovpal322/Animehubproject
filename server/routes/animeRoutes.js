const express = require("express");
const route = express.Router();

const {
  createHomeAnimes,
  getAnimes,
  getCategories,
  getFavoriteAnimes,
} = require("../controllers/animeControllers");
const { requireAuth } = require("../middleware/requireAuth");

route.get("/get/categories", getCategories);
route.post("/add/anime", createHomeAnimes);
route.get("/get/animes", getAnimes);
route.get("/get/favanimes/:id", getFavoriteAnimes);
module.exports = route;
