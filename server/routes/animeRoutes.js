const express = require("express");
const route = express.Router();
const { createHomeAnimes } = require("../controllers/animeControllers");
route.get("/animes/homeimages", async (req, res) => {
  res.json("hello");
});
module.exports = route;

route.post("/animes/add", createHomeAnimes);
