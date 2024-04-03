const express = require("express");
const route = express.Router();
const {requireAuth}=require('../middleware/requireAuth')
const {
  createHomeAnimes,

  getAnimes,
  createCategory,
  getCategories,

} = require("../controllers/animeControllers");

module.exports = route;

route.get("/get/categories", getCategories);
route.post("/add/anime",createHomeAnimes);
route.get("/get/animes" ,getAnimes);



